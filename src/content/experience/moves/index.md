---
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
relatedArticles: '[{"slug": "cash-advances", "title": "Moves Cash Advances: Building Cash Flow That Worked for Gig Workers", "description": "A technical deep dive into the design of a resilient, event-driven credit system for irregular income.", "icon": "CreditCard"}]'
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

[Moves Cash Advances: Building Cash Flow That Worked for Gig Workers →](/experience/moves/cash-advances)

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
