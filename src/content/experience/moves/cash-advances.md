---
title: "Moves Cash Advances: Engineering Liquidity for the Gig Economy"
subtitle: "A technical deep dive into the design of a resilient, event-driven credit system for irregular income."
type: "experience"
category: "Engineering"
date: "2024"
readTime: "10 min read"
seoTitle: "Moves Cash Advances: Engineering Liquidity for the Gig Economy"
seoDescription: "A technical deep dive into the design of a resilient, event-driven credit system for irregular income."
url: "/experience/moves/cash-advances"
backButton: '{"to": "/experience/moves", "label": "Back to My Moves of Memoir"}'
footer: '{"backTo": "/experience/moves", "backLabel": "Back to My Moves of Memoir"}'
---

When I joined Moves, cash advances were managed through [LoanPro](https://www.loanpro.io/). The system handled traditional lending workflows, but it was built around fixed weekly payments that didn't align with how gig workers earned.

For people with unpredictable income, that model quickly broke down. Payments were missed, repayment schedules drifted, and defaults increased. It wasn't a matter of intent but of structure. 

The system itself couldn't adapt to the rhythm of gig work.

The challenge was clear: we needed a distributed, real-time system that could understand income patterns, disburse funds instantly, and handle repayments dynamically. Every transaction, from a new deposit to a repayment event, needed to execute with banking-grade reliability.

That became my focus: designing a resilient, event-driven credit engine that could align with irregular income and maintain precision.

![Early prototype of requesting a cash advance (2022)](/moves/bca-old-flow.jpg)

---

## Architecture Overview

The core of the system was built around four domain microservices, each with a single responsibility and clear domain boundaries.

- **Adjudication Service**: Consumed gig deposit and financial behavior events, recalculated eligibility, and persisted eligibility snapshots that represented a member’s up-to-date borrowing capacity.

- **Origination Service**: Handled user-initiated advance requests, coordinated eligibility checks, and kicked off the multi-step saga that governed the lifecycle of a cash advance.

- **Disbursement Service**: Managed fund transfers through the Unit Banking API, handled rollback and retry logic, and guaranteed that disbursements were atomic and auditable.

- **Servicing Service**: Managed deposit-based repayments, instant repayments, and collection of outstanding balances. It also supported the frontend experience by exposing APIs to display cash advance progress, repayment history, and current status in real-time.

### Infrastructure

The system ran on a foundation built for reliability and real-time coordination:

- **Redis Streams** for inter-service pub/sub and sequencing of domain events.
- **MongoDB CDC (change streams)** for state synchronization and derived projections.
- **gRPC** for synchronous service-to-service adjudication checks.
- **Express and Node.js** powering REST APIs for mobile and admin clients.
- **BullMQ** for background job processing, scheduled tasks, and cron workflows across services.
- **Kubernetes** for service deployment, scaling, and cron job scheduling.
- **Datadog** for metrics, tracing, and distributed observability.

Each service emitted and subscribed to events using a shared event library that defined schemas, types, and routing conventions. This consistency allowed the system to evolve quickly while maintaining strict control over data flow.

---

## Event Flow: The Lifecycle of a Cash Advance

The lifecycle of a cash advance was asynchronous and event-driven. Stages emitted domain events that triggered downstream processes across services. The system relied on message queues, change data capture (CDC) streams, and sagas to process operations efficiently, maintain extensibility, and ensure high availability through eventual consistency.

![Early rough designs of the Cash Advance Service (2022)](/moves/bca-service-diagram.jpeg)

### 1. Request and Origination

The process began when a member requested a cash advance through the Moves app. The Origination Service received the request and called the Adjudication Service via gRPC to retrieve the most recent eligibility snapshot.

If the member qualified, the Origination Service emitted an `origination:created` event that initiated the cash advance saga. This event signaled that the request had been approved and began the disbursement workflow.

### 2. Disbursement

The Disbursement Service consumed the origination event and initiated a funds transfer through the Unit Banking API. Funds moved directly into the member's Moves Spending Account.

- On success, it emitted `advance:disbursed`, confirming the cash advance was active.
- On failure, it retried disbursement with exponential backoff until reaching a point where it emitted a compensating event that rolled back eligibility and logged the failure state for audit and recovery.

This event represented the transition from "requested" to "active" and served as the trigger for the servicing lifecycle.

### 3. Servicing Setup

The Servicing Service consumed the `advance:disbursed` event and created a new cash advance record in the servicing database, which acted as the single source of truth for the repayment lifecycle. This record stored configuration details, cash advance state, and progress tracking.

Active cash advances were identified through active originations, where each cash advance corresponded to exactly one origination. When the client application received an active origination ID, it used that identifier as the cash advance ID. This mapping allowed the frontend to fetch and display an active cash advance through endpoints such as:

`GET /user/cash-advance/{id}`

The API powered the in-app experience for managing and tracking cash advances, showing repayment history, progress, and the remaining balance in real-time.

During servicing setup, the cash advance entity itself held only the primary details of the advance such as amount, status, and disbursement information. Its repayment channels were created dynamically based on the configuration data from the `origination:created` event. A setup strategy determined which repayment mechanisms applied and initialized their corresponding configurations.

For example:

- A deposit-based repayment channel could be created and registered as the default repayment source.
- Additional channels, such as Instant Pay or scheduled repayment, could be configured as secondary mechanisms.

Each repayment channel was stored and managed independently but linked to the same cash advance record. This design kept repayment channels decoupled and interchangeable, allowing the servicing logic to evolve without changing the underlying cash advance schema. It also made it easy to experiment with new repayment channels or add future products without rewriting the servicing layer.

### 4. Repayment

Repayment flows were asynchronous and event-driven, designed to handle multiple repayment channels through a unified execution model. All repayment channels, automated or manual, shared the same underlying command and event infrastructure, ensuring accurate, consistent, and recoverable state transitions.

#### Unified Repayment Abstraction

The Repayment Executor and Progress Updater were designed around Command-Query Responsibility Segregation (CQRS). The executor issued commands that moved money and mutated state, while the updater reacted to resulting events to rebuild projections for the frontend and analytics.

The Repayment Executor also provided a shared interface for all repayment channels to request payment attempts. This abstraction encapsulated the validations, balance checks, and side effects required to safely execute a cash advance repayment.

Within this abstraction, repayment attempts flowed through a dedicated queue that asynchronously processed requests to the Banking-as-a-Service API for fund transfers. Each attempt was tagged with a unique Payment Attempt ID, used as an idempotency key to prevent duplicate transfers for the same repayment. This queuing layer provided resilience, recoverability, and precise control over concurrency and retries.

By isolating repayment execution behind this shared abstraction, repayment channels remained effective and decoupled. Each channel could operate independently, orchestrating when to repay while delegating how repayment occurred to a single, consistent executor.

#### Deposit-Based Repayment

Deposit-based repayments were driven by income events rather than fixed schedules. When a new deposit arrived, Unit sent a webhook to the Banking Service, which classified the transaction through the Gig Deposit Classifier. If identified as gig income, it published a `gigDeposit:created` event.

The Cash Advance Service subscribed to this event and checked whether the user had any active deposit-based repayment configurations. If one existed, it triggered a repayment attempt via the Repayment Executor.

The repayment amount was determined by a percentage of the most recent gig deposit. For example, a 10% configuration applied to a $200 deposit would trigger a $20 repayment.

This kept deposit-based repayments adaptive to real earning behavior while maintaining consistent handling through the shared repayment architecture.

#### Instant Pay

Members could also make manual repayments through the Instant Pay flow. This was a user-initiated repayment method that leveraged the same executor pipeline used by automated strategies. The user defined the repayment amount and triggered an immediate attempt.

The public API exposed:

`POST /user/cash-advance/{cashAdvanceId}/payment`

A parallel internal endpoint existed for the support team to perform similar actions for recovery or testing.

The request was processed through the Instant Pay Executor, which passed control to the shared Repayment Executor downstream.

### 5. Due Date Executor and Credit Collection

If a cash advance reached its due date and remained unpaid, the Due Date Executor took over. This scheduled process ran daily and identified advances that had exceeded their grace period. When a due cash advance was found, the executor triggered the Credit Collection Flow, which attempted to fully recover the outstanding balance.

If sufficient funds weren't available, credit collection entered a recovery state that automatically captured 100% of future incoming deposits until the balance was repaid in full. Each collection event was executed as a credit transaction repayment attempt, prioritized for immediate processing through the shared Repayment Executor.

This flow ensured overdue cash advances were recovered as quickly and safely as possible while preserving transactional integrity and consistency across all repayment operations.

### 6. Cool-Off and Completion

Once a cash advance reached 100% repayment, the Cool-Off Policy Executor evaluated whether the member required a waiting period before settling the cash advance (occasionally needed for risk mitigation). This logic followed a policy pattern, keeping compliance and fraud controls independent of servicing logic.

- If no cool-off applied, the cash advance was immediately marked settled.
- If a cool-off period was required, the policy stored the cool-off configuration with an end date.
- A scheduled cron job periodically checked for expired cool-offs and transitioned qualifying advances to settled.

When a cash advance was marked as settled, a MongoDB CDC event triggered the Cash Advance Settled Producer, which emitted `advance:settled` to the broader system.

Downstream consumers responded accordingly:

- Adjudication Service recalculated eligibility for future cash advances.
- Origination Service marked the member eligible for their next cash advance request.

---

## Reliability and Recovery

Handling real money meant every event needed to succeed exactly once.

### Core Resilience Techniques

- **Idempotency Keys** applied to all outbound API calls and saga checkpoints.
- **Custom Replay System** built on Mongo snapshots and Redis replay jobs to recover partial failures.
- **Circuit Breakers and Exponential Backoff** for unstable partner APIs.
- **CDC Projections** rebuilt derived views in real-time after transient drops.
- **Observability** with Datadog tracing and saga duration metrics.
- **Manual Recovery CLI** to rebuild or replay a single cash advance flow using event lineage.

### Race Conditions

Deposit-based repayments had to compete with other debit attempts on the same deposit. We prioritized Moves repayments using a queueing system that pre-authorized repayment charges before other transactions executed. This reduced repayment failure rates and improved consistency of collection.

---

## Lessons and Trade-offs

- **Redis Streams lacked persistent replay**:
We built a custom event store and replay pipeline to manually recover historical events. This provided manual event sourcing capabilities and improved reliability after failures.

- **Third-party outages**:
We implemented circuit breakers and retry orchestration around external APIs. This kept the system operational and resilient during partner downtime.

- **Irregular income patterns**:
Real-time adjudication updates were triggered by gig data events. This allowed eligibility to adapt dynamically to members' changing work patterns.

- **Frequent product iteration**:
We used strategy and factory patterns throughout the architecture. This supported rapid experimentation and iteration without introducing regressions.

- **Multi-service consistency**:
We adopted the saga pattern with idempotent checkpoints for multi-step workflows. This ensured predictable transaction boundaries and reliable recovery across services.

---

## Results

By the end of 2023, the cash advance system processed millions in daily transactions across thousands of gig workers. Repayment reliability improved dramatically and gross margins rose by over 200 basis points. Failures were traceable, recoverable, and auditable from any point in the lifecycle.

Most importantly, the architecture gave Moves the flexibility to adapt to a volatile market without sacrificing trust or reliability.

---

## Reflection

Building cash advances at Moves was more than writing APIs. It was designing a distributed financial engine that turned unpredictable human income into structured, reliable transactions. Every event represented trust between the company and the worker. Maintaining that trust meant treating architecture like infrastructure for people's livelihoods.

We weren't building a loan app. We were building a distributed credit system that understood how real people earn.
