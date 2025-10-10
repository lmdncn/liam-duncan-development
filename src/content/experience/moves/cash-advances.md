---
title: "Moves Cash Advances: Engineering Liquidity for the Gig Economy"
subtitle: "A deep technical dive into designing a resilient, event-driven credit system for irregular income."
type: "experience"
category: "Engineering"
date: "2024"
readTime: "10 min read"
seoTitle: "Moves Cash Advances - Technical Deep Dive"
seoDescription: "How we built a distributed, event-driven cash advance system for gig workers with irregular income at Moves Financial."
url: "/experience/moves/cash-advances"
backButton: '{"to": "/experience/moves", "label": "Back to Moves Memoir"}'
footer: '{"backTo": "/experience/moves", "backLabel": "Back to Moves Memoir"}'
---

When I joined Moves, cash advances were managed through LoanPro. The system handled traditional lending workflows, but it was built around fixed weekly payments that did not align with how gig workers earned.

For people with unpredictable income, that model quickly broke down. Payments were missed, repayment schedules drifted, and defaults increased. It was not a matter of intent but of structure — the system itself could not adapt to the rhythm of gig work.

The challenge was clear: we needed a distributed, real-time system that could understand income patterns, disburse funds instantly, and handle repayments dynamically. Every transaction, from a new deposit to a repayment event, had to execute with banking-grade reliability.

That became my focus: designing a resilient, event-driven credit engine that could align with irregular income and maintain precision.

---

## Architecture Overview

The core of the system was built around four domain microservices, each with a single responsibility and clear event boundaries.

- **Adjudication Service**: Consumed gig deposit and behavior events, recalculated eligibility, and persisted eligibility snapshots that represented a member’s up-to-date borrowing capacity.

- **Origination Service**: Handled user-initiated advance requests, coordinated eligibility checks, and kicked off the multi-step saga that governed the lifecycle of a cash advance.

- **Disbursement Service**: Managed fund transfers through the Unit Banking API, handled rollback and retry logic, and guaranteed that disbursements were atomic and auditable.

- **Servicing Service**: Managed deposit-based repayments, instant repayments, and collection of outstanding balances. It also supported the frontend experience by exposing APIs to display cash advance progress, repayment history, and current status in real time.

### Infrastructure

- **Redis Streams** for inter-service pub/sub and sequencing of domain events.
- **MongoDB CDC (change streams)** for state synchronization and derived projections.
- **gRPC** for synchronous service-to-service adjudication checks.
- **Express and Node.js** powering REST APIs for mobile and admin clients.
- **BullMQ** for background job processing, scheduled tasks, and cron workflows across services.
- **Kubernetes** for service deployment, scaling, and cron job scheduling.
- **Datadog** for metrics, tracing, and distributed observability.

Each service emitted and subscribed to events using a shared event library that defined schemas, types, and routing conventions.

This consistency allowed the system to evolve quickly while maintaining strict control over data flow.

---

## Event Flow: The Lifecycle of a Cash Advance

The lifecycle of a cash advance is asynchronous and fully event-driven.  
Stages emit domain events which trigger downstream processes across services.  
The system relies on message queues, change data capture (CDC) streams, and sagas to process operations efficiently, maintain extensibility, and ensure high availability through eventual consistency.

![Rough Design of the Cash Advance Service](/bca-service-diagram.jpeg)

---

### 1. Request and Origination

The process begins when a member requests a cash advance through the Moves app.  
The **Origination Service** receives the request and calls the **Adjudication Service** via gRPC to retrieve the most recent eligibility snapshot.

If the member qualifies, the Origination Service emits an "origination:created" event that initiates the cash advance saga.
This event signals that the request has been approved and begins the disbursement workflow.

---

### 2. Disbursement

The **Disbursement Service** consumes the origination event and initiates a funds transfer through the **Unit Banking API**. Funds are moved directly into the member’s Moves Spending Account.

- On success, it emits "advance:disbursed", confirming the cash advance is active.
- On failure, it retries disbursement with exponential backoff until a point where it emits a compensating event that rolls back eligibility and logs the failure state for audit and recovery.

This event represents the transition from “requested” to “active” and serves as the trigger for the servicing lifecycle.

---

### 3. Servicing Setup

The **Servicing Service** consumes the `advance:disbursed` event and creates a new **cash advance record** in the servicing database, which acts as the single source of truth for the repayment lifecycle.  
This record stores configuration details, cash advance state and progress tracking.

Active cash advances are determined through **active originations**.  
When the client application receives an active origination id, it uses that identifier as the cash advance id, since every cash advance correspond to one origination.  
This mapping allows the frontend to fetch and display an active cash advance through endpoints such as:
*GET /user/cash-advance/{id}*

The API powers the in-app experience for managing and tracking cash advances, showing repayment history, progress, and the remaining balance in real time.

During servicing setup, the cash advance entity itself holds only the primary details of the advance such as amount, status, and disbursement information.  
Its repayment channels are created dynamically based on the configuration data from the "origination:created" event.  
A setup strategy determines which repayment mechanisms apply and initializes their corresponding configurations.

For example:

- A **deposit-based repayment channel** may be created and registered as the default repayment source.
- Additional channels, such as **instant pay** or **scheduled repayment**, can be configured as secondary mechanisms.

Each repayment channel is stored and managed independently but linked to the same cash advance record.
This design keeps repayment channels **decoupled and interchangeable**, allowing the servicing logic to evolve without changing the underlying cash advance schema.  
It also made it easy to experiment with new repayment channels or add future products without rewriting the servicing layer.

---

### 4. Repayment

Repayment flows are asynchronous and event-driven, designed to handle multiple repayment channels through a unified execution model.  
All repayment channels, automated or manual, share the same underlying command and event infrastructure, ensuring accurate, consistent, and recoverable state transitions.

#### Unified Repayment Abstraction

The Repayment Executor and Progress Updater were designed around Command–Query Responsibility Segregation (CQRS).
The executor issues commands that move money and mutate state, while the updater reacts to resulting events to rebuild projections for the frontend and analytics.

The Repayment Executor also provides a shared interface for all repayment channels to request payment attempts.
This abstraction encapsulates the validations, balance checks, and side effects required to safely take a cash advance repayment.

Within this abstraction, repayment attempts flow through a dedicated queue that asynchronously processes requests to the Banking-as-a-Service API for fund transfers.
Each attempt is tagged with a unique Payment Attempt ID, used as an idempotency key to prevent duplicate transfers for the same repayment.
This queuing layer provides resilience, recoverability, and precise control over concurrency and retries.

By isolating repayment execution behind this shared abstraction, repayment channels remain effective and decoupled.
Each channel can operate independently, orchestrating when to repay while delegating how repayment occurs to a single, consistent executor.

#### Deposit-Based Repayment

Deposit-based repayments are driven by income events rather than fixed schedules.  
When a new deposit arrives, **Unit** sends a webhook to the **Banking Service**, which classifies the transaction through the **Gig Deposit Classifier**.  
If identified as gig income, it publishes a "gigDeposit:created" event.

The **Cash Advance Service** subscribes to this event and checks whether the user has any active deposit-based repayment configurations.  
If one exists, it triggers a repayment attempt via the **Repayment Executor**.

The repayment amount is determined by a percentage of the most recent gig deposit.
For example, a 10% configuration applied to a $200 deposit would trigger a $20 repayment.

This keeps deposit-based repayments adaptive to real earning behavior while maintaining consistent handling through the shared repayment architecture.

#### Instant Pay

Members can also make manual repayments through the **Instant Pay** flow.  
This is a user-initiated repayment method that leverages the same executor pipeline used by automated strategies.
The user defines the repayment amount and triggers an immediate attempt.

The public API exposes:
*POST /user/cash-advance/{cashAdvanceId}/payment*

A parallel internal endpoint exists for the support team to perform similar actions for recovery or testing.

The request is processed through the **Instant Pay Executor**, which passes control to the shared **Repayment Executor** downstream.

---

### 5 Due Date Executor and Credit Collection

If a cash advance reaches its due date and remains unpaid, the Due Date Executor takes over.
This scheduled process runs daily and identifies advances that have exceeded their grace period.
When a due cash advance is found, the executor triggers the Credit Collection Flow, which attempts to fully recover the outstanding balance.

If sufficient funds are not available, credit collection enters a recovery state that automatically captures 100% of all future incoming deposits until the balance is repaid in full.
Each collection event is executed as a credit transaction repayment attempt, prioritized for immediate processing through the shared Repayment Executor.

This flow ensures overdue cash advances are recovered as quickly and safely as possible while preserving transactional integrity and consistency across all repayment operations.

---

### 6. Cool-Off and Completion

Once a cash advance reaches 100% repayment, the **Cool-Off Policy Executor** evaluates whether the member requires a waiting period before settling cash advance.  
This logic follows a **policy pattern**, keeping compliance and fraud controls independent of servicing logic.

- If no cool-off applies, the cash advance is immediately marked settled.
- If a cool-off period is required, the policy stores the cool-off configuration with an end date.
- A scheduled **cron job** periodically checks for expired cool-offs and transitions qualifying advances to settled.

When a cash advance is marked as settled, a **MongoDB CDC** event triggers the **Cash Advance Settled Producer**, which emits `advance:settled` to the broader system.

Downstream consumers respond accordingly:

- **Adjudication Service** recalculates eligibility for future cash advances.
- **Origination Service** marks the member eligible for their next cash advance request.

---

## Reliability and Recovery

Handling real money meant **every event had to succeed exactly once**.

### Core Resilience Techniques

- **Idempotency Keys** applied to all outbound API calls and saga checkpoints.
- **Custom Replay System** built on Mongo snapshots and Redis replay jobs to recover partial failures.
- **Circuit Breakers and Exponential Backoff** for unstable partner APIs.
- **CDC Projections** rebuilt derived views in real time after transient drops.
- **Observability** with Datadog tracing and saga duration metrics.
- **Manual Recovery CLI** to rebuild or replay a single cash advance flow using event lineage.

### Race Conditions

Deposit-based repayments had to compete with other debit attempts on the same deposit.  
We prioritized Moves repayments using a **queueing system** that pre-authorized repayment charges before other transactions executed.  
This reduced repayment failure rates and improved consistency of collection.

---

## Lessons and Trade-offs

**Redis Streams lacked persistent replay**
We built a custom event store and replay pipeline to manually recover historical events.
This provided manual event sourcing capabilities and improved reliability after failures.

**Third-party outages**
We implemented circuit breakers and retry orchestration around external APIs.
This kept the system operational and resilient during partner downtime.

**Irregular income patterns**
Real-time adjudication updates were triggered by gig data events.
This allowed eligibility to adapt dynamically to members’ changing work patterns.

**Frequent product iteration**
We used strategy and factory patterns throughout the architecture.
This supported rapid experimentation and iteration without introducing regressions.

**Multi-service consistency**
We adopted the saga pattern with idempotent checkpoints for multi-step workflows.
This ensured predictable transaction boundaries and reliable recovery across services.

---

## Results

By the end of 2023, the cash advance system processed millions in daily transactions across thousands of gig workers.  
Repayment reliability improved dramatically and gross margins rose by over 200 basis points.  
Failures were traceable, recoverable, and auditable from any point in the lifecycle.

Most importantly, the architecture gave Moves the flexibility to adapt to a volatile market without sacrificing trust or reliability.

---

## Reflection

Building cash advances at Moves was more than writing APIs.  
It was designing a distributed financial engine that turned unpredictable human income into structured, reliable transactions.  
Every event represented trust between the company and the worker.  
Maintaining that trust meant treating architecture like infrastructure for people’s livelihoods.

We were not building a loan app. We were building a distributed credit system that understood how real people earn.
