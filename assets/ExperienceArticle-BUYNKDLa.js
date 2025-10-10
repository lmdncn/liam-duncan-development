import{h as d,u as m,j as e,i as u,S as p,L as l,C as g,d as y,b as v,e as f}from"./index-BL11Qwv6.js";import{g as b,a as w}from"./markdown-DKg6JsEp.js";import{A as k,M as x}from"./article-layout-DkMgsOOs.js";/**
 * @license lucide-react v0.462.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const T=d("Building",[["rect",{width:"16",height:"20",x:"4",y:"2",rx:"2",ry:"2",key:"76otgf"}],["path",{d:"M9 22v-4h6v4",key:"r93iot"}],["path",{d:"M8 6h.01",key:"1dz90k"}],["path",{d:"M16 6h.01",key:"1x0f13"}],["path",{d:"M12 6h.01",key:"1vi96p"}],["path",{d:"M12 10h.01",key:"1nrarc"}],["path",{d:"M12 14h.01",key:"1etili"}],["path",{d:"M16 10h.01",key:"1m94wz"}],["path",{d:"M16 14h.01",key:"1gbofw"}],["path",{d:"M8 10h.01",key:"19clt8"}],["path",{d:"M8 14h.01",key:"6423bh"}]]);/**
 * @license lucide-react v0.462.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const M=d("CreditCard",[["rect",{width:"20",height:"14",x:"2",y:"5",rx:"2",key:"ynyp8z"}],["line",{x1:"2",x2:"22",y1:"10",y2:"10",key:"1b3vmo"}]]);/**
 * @license lucide-react v0.462.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const h=d("FileText",[["path",{d:"M15 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V7Z",key:"1rqfz7"}],["path",{d:"M14 2v4a2 2 0 0 0 2 2h4",key:"tnqrlb"}],["path",{d:"M10 9H8",key:"b1mrlr"}],["path",{d:"M16 13H8",key:"t4e002"}],["path",{d:"M16 17H8",key:"z1uh3a"}]]),C=`---
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

---

### 1. Request and Origination

The process begins when a member requests a cash advance through the Moves app.  
The **Origination Service** receives the request and calls the **Adjudication Service** via gRPC to retrieve the most recent eligibility snapshot.

If the member qualifies, the Origination Service emits an "origination:created" event that initiates the cash advance saga.
This event signals that the request has been approved and begins the disbursement workflow.

\`\`\`text
[Mobile App] → [Origination Service] → gRPC → [Adjudication Service]
                                       ↓
                             emits → origination:created
\`\`\`

---

### 2. Disbursement

The **Disbursement Service** consumes the origination event and initiates a funds transfer through the **Unit Banking API**. Funds are moved directly into the member’s Moves Spending Account.

- On success, it emits "advance:disbursed", confirming the cash advance is active.
- On failure, it retries disbursement with exponential backoff until a point where it emits a compensating event that rolls back eligibility and logs the failure state for audit and recovery.

This event represents the transition from “requested” to “active” and serves as the trigger for the servicing lifecycle.

\`\`\`text
origination:created → [Disbursement Service] → Unit API → advance:disbursed
\`\`\`

---

### 3. Servicing Setup

The **Servicing Service** consumes the \`advance:disbursed\` event and creates a new **cash advance record** in the servicing database, which acts as the single source of truth for the repayment lifecycle.  
This record stores configuration details, cash advance state and progress tracking.

Active cash advances are determined through **active originations**.  
When the client application receives an active origination id, it uses that identifier as the cash advance id, since every cash advance correspond to one origination.  
This mapping allows the frontend to fetch and display an active cash advance through endpoints such as:

\`\`\`text
GET /user/cash-advance/{id}
\`\`\`

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

---

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

---

### 4.1 Deposit-Based Repayment

Deposit-based repayments are driven by income events rather than fixed schedules.  
When a new deposit arrives, **Unit** sends a webhook to the **Banking Service**, which classifies the transaction through the **Gig Deposit Classifier**.  
If identified as gig income, it publishes a "gigDeposit:created" event.

The **Cash Advance Service** subscribes to this event and checks whether the user has any active deposit-based repayment configurations.  
If one exists, it triggers a repayment attempt via the **Repayment Executor**.

The repayment amount is determined by a percentage of the most recent gig deposit.
For example, a 10% configuration applied to a $200 deposit would trigger a $20 repayment.

This keeps deposit-based repayments adaptive to real earning behavior while maintaining consistent handling through the shared repayment architecture.

---

### 4.2 Instant Pay

Members can also make manual repayments through the **Instant Pay** flow.  
This is a user-initiated repayment method that leverages the same executor pipeline used by automated strategies.

The public API exposes:

\`\`\`text
POST /user/cash-advance/{cashAdvanceId}/payment
\`\`\`

The user defines the repayment amount and triggers an immediate attempt.  
The request is processed through the **Instant Pay Executor**, which passes control to the shared **Repayment Executor** downstream.  
A parallel internal endpoint exists for the support team to perform similar actions for recovery or testing.

Because both Instant Pay and automated deposits share the same repayment backbone, they follow identical downstream handling, validation, and ledger updates, guaranteeing consistent behavior across channels.

\`\`\`text
User Action → POST /user/cash-advance/{id}/payment
                     ↓
             [Instant Pay Executor]
                     ↓
          triggers repayment via Repayment Executor
                     ↓
          updates Cash Advance record + ledger
\`\`\`

This unified approach made repayment extensible, auditable, and predictable, regardless of what initiated it.

---

### 4.2 Due Date Executor and Credit Collection

If a cash advance reaches its due date and remains unpaid, the **Due Date Executor** takes over.  
This cron-based process runs daily and identifies cash advances that have exceeded their grace period.  
When a due cash advance is found, the executor triggers the **Credit Collection Flow**, which uses a combination of the **Credit Collection Executor** and **Remaining Amount Collector** to attempt full repayment as quickly as possible.

The Credit Collection process runs multiple **credit transaction** repayment attempts, representing full collection of the remaining owed amount.  
These are treated as high-priority repayment attempts and processed through the same **Repayment Executor** abstraction to maintain transactional safety and consistency.

This ensures that overdue cash advances enter a recovery cycle where full repayment is attempted automatically through multiple collection events until the balance reaches zero or transitions to a finalized status.

### 5. Cool-Off and Completion

Once a cash advance reaches 100% repayment, the **Cool-Off Policy Executor** evaluates whether the member requires a waiting period before becoming eligible for another cash advance.  
This logic follows a **policy pattern**, keeping compliance and fraud controls independent of servicing logic.

- If no cool-off applies, the cash advance is immediately marked **paid off**.
- If a cool-off period is required, the policy stores the cool-off configuration with an end date.
- A scheduled **cron job** periodically checks for expired cool-offs and transitions qualifying advances to **paid off**.

When a cash advance is marked paid off, a **MongoDB CDC** event triggers the **Cash Advance Settled Producer**, which emits \`advance:settled\` to the broader system.

\`\`\`text
Repayment Complete → [Cool-Off Policy] → [Settled Producer] → advance:settled
\`\`\`

Downstream consumers respond accordingly:

- **Adjudication Service** recalculates eligibility for future cash advances.
- **Origination Service** marks the member eligible for their next request.

---

### 6. End-to-End System Flow

The complete cash advance lifecycle can be visualized through its event sequence:

\`\`\`text
origination:created
    ↓
advance:disbursed
    ↓
gigDeposit:created
    ↓
repayment.success | repayment.failed
    ↓
advance:settled
\`\`\`

Each event represents a durable state transition that can be replayed or audited independently.  
Together, these events form a distributed, fault-tolerant cash advance engine capable of managing real-time disbursement, adaptive repayment logic, and compliance workflows across interconnected microservices.

![BCA Service - Credit Collection Architecture Diagram](/bca-service-diagram.jpeg)

---

## Designing a Flexible Repayment Engine

The repayment engine was built for iteration. Product requirements changed weekly as we tested different repayment models.  
To make the system adaptable, we implemented a **strategy-factory-adapter architecture**.

### Strategy Pattern

Each repayment type implemented a shared interface:

\`\`\`ts
interface RepaymentStrategy {
  execute(context: RepaymentContext): Promise<Result>;
  recover(context: RepaymentContext): Promise<Result>;
  audit(context: RepaymentContext): void;
}
\`\`\`

Concrete implementations handled:

- **DepositBasedRepayment**
- **InstantRepayment**
- **ScheduledRepayment**
- **CollectionRepayment**

### Factory Pattern

A central factory selected which strategy to instantiate at runtime based on the member’s repayment configuration:

\`\`\`ts
const strategy = RepaymentFactory.create(type, config);
await strategy.execute(context);
\`\`\`

### Adapter Pattern

External dependencies (Unit, Astra, internal ledger) were abstracted behind adapters.  
This allowed us to test the logic independently of API behavior and swap out integrations without refactoring the repayment logic.

### Benefits

- Fast experimentation without touching core servicing logic.
- Consistent audit trail across all repayment types.
- Idempotent processing with event correlation IDs.
- Shared snapshot system prevented duplicate charges or missed repayments.

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

| Challenge                              | Approach                                           | Outcome                                        |
| -------------------------------------- | -------------------------------------------------- | ---------------------------------------------- |
| Redis Streams lacked persistent replay | Built custom event store and replay pipelines      | Achieved manual event sourcing                 |
| Third-party outages                    | Circuit breakers and retry orchestration           | Sustained uptime even during partner incidents |
| Irregular income patterns              | Real-time adjudication updates via gig data events | Eligibility adjusted dynamically               |
| Frequent product iteration             | Strategy and factory architecture                  | Rapid experimentation without regressions      |
| Multi-service consistency              | Saga pattern and idempotent checkpoints            | Predictable transaction boundaries             |

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

> We were not building a loan app. We were building a distributed credit system that understood how real people earn.
`,A=`---
title: "My Memoir Of Moves"
subtitle: "My three year journey leading the team that built Moves Financial's core banking platform and transformed cash advances for gig workers."
type: "experience"
category: "Financial Technology"
date: "2021-2024"
readTime: "12 min read"
seoTitle: "My Memoir Of Moves - Liam Duncan"
seoDescription: "My three year journey leading the team that built Moves Financial's core banking platform and transformed cash advances for gig workers."
url: "/experience/moves"
backButton: '{"to": "/", "label": "Back to Portfolio"}'
footer: '{"backTo": "/", "backLabel": "Back to Portfolio"}'
---

### A Better Option Than Payday Loans

When a gig worker's car broke down, their only option was often a payday loan. That meant sky-high interest, rigid repayment terms, and a cycle of debt that punished the very people keeping the modern economy moving.

At Moves, we believed there had to be a better way. Gig workers weren't irresponsible. They were delivering food, moving packages, and driving passengers every day. The problem was that banks couldn't process their irregular, instant income. That blind spot locked millions of hard-working people out of credit and basic financial services.

## Why Moves Existed

Moves set out to build financial services around how gig workers actually earn and spend. The first hypothesis was simple: cash advances could bridge the gap. If someone needed to repair their car or replace an e-bike, they should be able to access liquidity without being trapped by predatory lenders.

But for cash advances to work long-term, they couldn't just be a transaction. They had to be the beginning of an ongoing financial relationship, one built on trust, visibility, and fairness.

![Platform designed for gig workers' unique income patterns (2022)](/what-is-moves-financial.jpg)

### Where Things Stood When I Joined

By the time I arrived in late 2021, Moves had already proven there was demand. The first product let customers request advances through simple forms, with underwriting done more manually by reviewing gig work data. Disbursements went straight to external bank accounts, and repayments were tracked in spreadsheets. The company eventually built a mobile app and migrated to a lending platform: LoanPro, but servicing was still clunky and defaults were high.

Customers often took the money and disappeared. Without an ecosystem to anchor them, retention was poor and margins unsustainable.

That was when Moves made a critical decision: bring business cash advances in-house and stop relying on LoanPro. This pivot opened the door to integrate advances directly into a broader banking platform. It was also the moment I joined, just as the company was transforming from a scrappy loan provider into a full financial services platform.

### My Contributions

I came on board as a Senior Software Engineer just as the Moves Spending Account was launching. Within a few months, I stepped into the role of Technical Lead and Manager of "The Bank Job", the team responsible for banking and financial services.

For the next three years, I led the design and delivery of systems that powered Moves' pivot into a full-service banking platform. My team owned:

- **KYC and Identity Flows**: Full onboarding and verification lifecycle, integrating Unit’s KYC API, handling document upload, resubmissions, and retry logic.
- **Banking and Payments**: Creation and management of Moves Spending Accounts, transaction handling, card issuance, and transfers.
- **Gig Deposits**: Linking gig platforms, classifying deposits, and routing funds into Moves accounts.
- **Cash Advances**: Proprietary system for adjudication, disbursement, servicing, and repayment.

It was the most formative chapter of my career. A mix of architecture, leadership, and product strategy tied directly to the financial lives of real people.

## Three Bets That Defined Moves

### 1. Onboarding: Single Session Aha

Originally, signing up took days. KYC could stall, gig accounts were tricky to link, and most people dropped off before ever feeling any value.

We realized time to “aha” was everything. The longer it took for someone to experience their first win, the less likely they were to come back. In fintech, trust doesn’t come from branding or copy. It comes from the first time money moves.

For us, that “aha” moment was the first gig deposit into a Moves account. That’s when a member saw their income land instantly, labeled as gig earnings, reflected in their stats and tools, and tied directly to progress toward cash advance eligibility. It was the first real sign that Moves worked for them.

We rebuilt onboarding to make that happen as fast as possible:

- Automated KYC with Unit
- Progress tracking in-app
- Instant spending account creation with a virtual card
- Easy gig account linking through Argyle
- One click gig deposit redirection to Moves

Onboarding time dropped from a week to the same day. Most members now hit their “aha” moment the first time they open the app.

![Streamlined onboarding from signup to first gig deposit (2022)](/why-choose-moves.jpg)

### 2. Primary Banking: The Everyday Account

Early on, customers saw Moves as a place to grab an advance, not a daily bank. That mindset hurt retention, left gaps in their financial needs, and kept us from building the kind of relationship we wanted.

To change that, we focused on building habits and reasons to use Moves every day. Data from customer usage guided our next steps. We saw what members actually did with their money and used that to build features that turned Moves into their financial home base:

- Transfers in and out
- Bill pay and peer-to-peer payments
- Virtual and physical debit cards
- Card management tools
- Apple Pay and Google Pay support
- Enriched and labeled transactions
- Spend categorization for taxes and insights
- Real-time gig earnings insights
- Early deposit access

Over time, Moves became the primary spending account for many gig workers. It anchored relationships, improved retention, and turned a transactional product into a trusted relationship.

![Integrated platform combining banking, earnings tracking, and rewards (2023)](/gig-flow.jpg)

### 3. Cash Advances: Our Core Product

Cash advances were our gateway product, but the early model wasn’t built to last. Defaults were high, margins were thin, and repayment was inconsistent. It worked for short-term growth, not long-term trust.

We rebuilt the system from the ground up to make it sustainable for us and fair for members. It had to work with the reality of gig income, with irregular deposits, shifting schedules, and unpredictable earnings, so that repayments actually happened.

Our proprietary cash advance platform handled every step:

- Adjudication based on gig income and financial behavior
- Disbursement directly into Moves Spending Accounts
- Flexible repayment engine with deposit-based, scheduled, instant, and collection strategies
- End-to-end servicing for repayments, delinquency management, collections, and compliance

Cash advances became something members could rely on, and something we could sustain. Repayments improved, margins grew, and trust finally worked both ways.

![Cash advance eligibility based on gig deposit history (2022)](/bca-flow.jpg)

## Building the Engine Behind Moves

At the front, a React Native mobile app delivered the full banking experience. Behind it, many event-driven backend services powered banking and cash advances, handling millions in daily transactions.

Our stack included:

- Redis Streams for event processing and pub/sub communication between services
- MongoDB for operational data
- CDC change stream listeners for real-time synchronization and state updates across services
- Node.js and Express for RESTful APIs powering the backend
- React Native for the cross-platform mobile app
- gRPC for interservice communication
- Webhook integrations with third-party partners like Unit, Argyle, and Astra
- Scheduled jobs and background processes for recurring tasks and system maintenance
- Kubernetes for deployment and scalability

And our core design patterns:

- Domain-driven design for clear service boundaries
- Saga pattern for multi-step workflows such as disbursements and repayments
- Repository pattern for clean data access and separation of concerns
- Adapter pattern for integrating external APIs and partners
- Strategy and factory patterns for dynamic repayment logic
- Circuit breaker pattern for handling partner API failures gracefully
- Event sourcing and idempotency for reliable transaction recovery and audit trails

Together, these systems formed the backbone of Moves. They kept everything running in sync and gave every member a sense that their money was always moving exactly as it should.

## What We Achieved

Moves proved that financial inclusion and sustainability could coexist. It gave gig workers real access to liquidity, a banking home that fit how they worked, and the insights to manage money on their terms. It also gave the company a foundation that could scale responsibly.

By Q4 2023, originations had tripled year over year, revenue from cash advances was up 900 percent, and the product had evolved from an experiment into a stable, profitable business. More importantly, it showed that fair design and strong systems could turn a simple advance into a lasting financial relationship.

![Customer review highlighting transfers and primary banking (2023)](/moves-review-1.jpg)

### Lessons Learned

- **Design for change.** Products evolve fast, and systems need to flex without constant rewrites.
- **Events are powerful but delicate.** Processing is easy; reliability lives in recovery, replay, and ordering.
- **Trust is a product feature.** Transparency in deposits, advances, and repayments built confidence and loyalty.
- **People power the system.** Strong architecture mattered, but a strong team mattered more. Even under pressure, ours stayed collaborative and consistently rated 4.8 out of 5 in feedback.

### Looking Back

Moves ultimately did not survive as a company, but the experience changed me. I got to:

- Lead a team through a company-defining pivot from cash advances to full-service banking
- Design and scale financial systems that moved millions every day
- Build products that served people overlooked by traditional banks
- Balance technical depth with business impact, and learn when to make bets that pushed us forward
- Navigate tradeoffs between moving fast in a startup environment and building systems built to last
- Balance technical depth with business impact
- Work across partnerships, compliance, and infrastructure in a complex fintech stack
- Grow from writing code to building teams, systems, and culture

I’m proud of what we built and grateful for the lessons I carry forward. It reminded me that the best systems do not just move money, they move people.

![App Store presence with screenshots (2023)](/moves-itunes.jpg)
`,I=`---
title: "Building Trust at First Touch: Inside Moves' One-Session KYC Journey"
subtitle: "Overcoming identity verification, compliance hurdles, and system integration challenges"
type: "experience"
category: "Financial Technology"
date: "2022-2023"
readTime: "8 min read"
seoTitle: "Building Trust at First Touch: Inside Moves' One-Session KYC Journey - Liam Duncan"
seoDescription: "Overcoming identity verification, compliance hurdles, and system integration challenges to reduce signup time from weeks to same-day."
url: "/experience/moves/onboarding"
backButton: '{"to": "/experience/moves", "label": "Back to My Memoir Of Moves"}'
footer: '{"backTo": "/experience/moves", "backLabel": "Back to My Memoir Of Moves"}'
---

## Coming Soon

This deep dive into Moves' onboarding transformation is currently being written.

Check back soon for the complete breakdown.
`,S=`---
title: "Beyond the Advance: Building a Bank Gig Workers Actually Use"
subtitle: "How we transformed transaction behavior and became their financial home base"
type: "experience"
category: "Financial Technology"
date: "2022-2023"
readTime: "10 min read"
seoTitle: "Beyond the Advance: Building a Bank Gig Workers Actually Use - Liam Duncan"
seoDescription: "How we transformed transaction behavior and became their financial home base with comprehensive banking features."
url: "/experience/moves/primary-bank"
backButton: '{"to": "/experience/moves", "label": "Back to My Memoir Of Moves"}'
footer: '{"backTo": "/experience/moves", "backLabel": "Back to My Memoir Of Moves"}'
---

## Coming Soon

This deep dive into how Moves became customers' primary bank is currently being written. It will cover the technical details of how we built comprehensive banking features that transformed customer behavior and engagement.

Check back soon for the complete technical breakdown.
`,j=(i,s)=>0,P=Object.assign({"../content/experience/moves/cash-advances.md":C,"../content/experience/moves/index.md":A,"../content/experience/moves/onboarding.md":I,"../content/experience/moves/primary-bank.md":S}),B=Object.entries(P).map(([i,s])=>{const r=i.split("/"),t=r.pop()||"",o=r[r.length-1]||"",n=t==="index.md"?o:b(t),a=t==="index.md"?n:`${o}/${n}`;return w(s,a)}).sort(j),E=i=>B.find(s=>s.slug===i),q=()=>{const{slug:i,subSlug:s}=m(),r=s?`${i}/${s}`:i,t=E(r||"");if(!t)return e.jsx(u,{to:"/404",replace:!0});const o={FileText:h,Building:T,CreditCard:M};return e.jsxs(e.Fragment,{children:[e.jsx(p,{title:t.seoTitle,description:t.seoDescription,image:"/og-image.jpg",url:t.url}),e.jsxs(k,{title:t.title,subtitle:t.subtitle,backButton:t.backButton,footer:t.footer,children:[e.jsx("div",{className:"prose prose-lg max-w-none",children:e.jsx(x,{components:{img:({src:n,alt:a})=>{const c=n?.startsWith("/")&&!n.startsWith("/liam-duncan-development/")?`/liam-duncan-development/${n.substring(1)}`:n;return e.jsxs("figure",{className:"my-8",children:[e.jsx("img",{src:c,alt:a||"",className:"w-full max-w-2xl mx-auto rounded-lg shadow-lg"}),a&&e.jsx("figcaption",{className:"text-center text-sm text-muted-foreground mt-4",children:a})]})},h2:({children:n})=>e.jsx("h2",{className:"text-3xl font-bold mt-12 mb-6 text-foreground leading-tight",children:n}),h3:({children:n})=>e.jsx("h3",{className:"text-2xl font-semibold mt-12 mb-5 text-foreground leading-tight",children:n}),p:({children:n})=>e.jsx("p",{className:"mb-6 text-foreground leading-relaxed text-lg font-light",children:n}),ul:({children:n})=>e.jsx("ul",{className:"mb-8 space-y-3 list-none",children:n}),li:({children:n})=>e.jsx("li",{className:"text-foreground leading-relaxed text-lg font-light relative pl-6 before:content-['—'] before:absolute before:left-0 before:text-primary before:font-normal",children:n}),strong:({children:n})=>e.jsx("strong",{className:"font-bold text-foreground",children:n}),a:({href:n,children:a})=>n?.startsWith("/")?e.jsx(l,{to:n,className:"text-primary hover:text-primary/80 transition-colors underline decoration-1 underline-offset-2",children:a}):e.jsx("a",{href:n,className:"text-primary hover:text-primary/80 transition-colors underline decoration-1 underline-offset-2",target:"_blank",rel:"noopener noreferrer",children:a})},children:t.content})}),t.relatedArticles&&t.relatedArticles.length>0&&e.jsx("section",{className:"py-16 mt-16 bg-muted/30 border-t border-border/20 relative left-1/2 right-1/2 -ml-[50vw] -mr-[50vw] w-screen",children:e.jsx("div",{className:"container mx-auto px-6",children:e.jsxs("div",{className:"max-w-6xl mx-auto",children:[e.jsxs("div",{className:"text-center mb-8",children:[e.jsx("h3",{className:"text-2xl font-semibold text-foreground mb-2",children:"The story isn't over"}),e.jsx("p",{className:"text-muted-foreground",children:"Explore the technical architecture and pivotal decisions that shaped Moves:"})]}),e.jsx("div",{className:"grid grid-cols-1 md:grid-cols-3 gap-6",children:t.relatedArticles.map(n=>{const a=o[n.icon]||h,c=t.slug==="moves"?`/experience/moves/${n.slug}`:`/experience/${n.slug}`;return e.jsx(l,{to:c,children:e.jsx(g,{className:"hover:shadow-md transition-shadow bg-background/50 border-border/50 h-full",children:e.jsxs(y,{className:"p-6",children:[e.jsxs("div",{className:"flex items-center gap-3 mb-3",children:[e.jsx(a,{className:"h-4 w-4 text-muted-foreground"}),e.jsx(v,{className:"text-lg font-medium",children:n.title})]}),e.jsx(f,{className:"text-sm leading-relaxed",children:n.description})]})})},n.slug)})})]})})})]})]})};export{q as default};
