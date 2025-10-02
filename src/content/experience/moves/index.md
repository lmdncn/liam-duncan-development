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
relatedArticles: '[{"slug": "onboarding", "title": "The Onboarding Gauntlet", "description": "Overcoming identity verification, compliance hurdles, and system integration challenges", "icon": "FileText"}, {"slug": "primary-bank", "title": "Beyond the Advance", "description": "How we transformed transaction behavior and became their financial home base", "icon": "Building"}, {"slug": "cash-advances", "title": "The Anti-Payday Loan", "description": "How we built systems that understand gig income and eliminate predatory lending", "icon": "CreditCard"}]'
images: '{"whatIsMoves": "/src/assets/images/moves/what-is-moves-financial.jpg", "whyChooseMoves": "/src/assets/images/moves/why-choose-moves.jpg", "bcaFlow": "/src/assets/images/moves/bca-flow.jpg", "gigFlow": "/src/assets/images/moves/gig-flow.jpg", "movesReview": "/src/assets/images/moves/moves-review-1.jpg", "movesItunes": "/src/assets/images/moves/moves-itunes.jpg"}'
---

## A Better Option Than Payday Loans

When a gig worker's car broke down, their only option was often a payday loan. That meant sky-high interest, rigid repayment terms, and a cycle of debt that punished the very people keeping the modern economy moving.

At Moves, we believed there had to be a better way. Gig workers weren't irresponsible. They were delivering food, moving packages, and driving passengers every day. The problem was that banks couldn't process their irregular, instant income. That blind spot locked millions of hard-working people out of credit and basic financial services.

## Why Moves Existed

Moves set out to build financial services around how gig workers actually earn and spend. The first hypothesis was simple: cash advances could bridge the gap. If someone needed to repair their car or replace an e-bike, they should be able to access liquidity without being trapped by predatory lenders.

But for cash advances to work long-term, they couldn't just be a transaction. They had to be the beginning of an ongoing financial relationship, one built on trust, visibility, and fairness.

![Platform designed for gig workers' unique income patterns]({{images.whatIsMoves}})

## Where Things Stood When I Joined

By the time I arrived in late 2021, Moves had already proven there was demand. The first product let customers request advances through simple forms, with underwriting done manually by scraping gig data. Disbursements went straight to external bank accounts, and repayments were tracked in spreadsheets until those collapsed under the weight of transactions. The company eventually migrated to LoanPro, but servicing was still clunky and defaults were high.

Customers often took the money and disappeared. Without an ecosystem to anchor them, retention was poor and margins unsustainable.

That was when Moves made a critical decision: bring business cash advances (BCAs) in-house and stop relying on LoanPro. This pivot opened the door to integrate advances directly into a broader banking platform. It was also the moment I joined, just as the company was transforming from a scrappy loan provider into a full financial services platform.

## My Role and Growth

I came on board as a Senior Software Engineer just as the Moves Spending Account was launching. Within a few months, I stepped into the role of Technical Lead and Manager of "The Bank Job", the team responsible for banking and financial services.

For the next three years, I led the design and delivery of systems that powered Moves' pivot into a full-service banking platform. My team owned:

- KYC and identity flows
- Banking and payments
- Gig deposits
- Cash advance adjudication
- Disbursement
- Repayment and servicing

It was the most formative chapter of my career. A mix of architecture, leadership, and product strategy tied directly to the financial lives of real people.

## The Three Bets That Defined Moves

### 1. Onboarding and Time to Aha

Signing up originally took weeks. KYC could stall, gig accounts were hard to link, and customers often dropped off before seeing value.

We redefined the "aha moment" as the first gig deposit into a Moves account. Everything in onboarding was redesigned to drive toward that milestone:

- Automated KYC with Unit
- Progress tracking in-app
- Instant account creation with a virtual card
- Gig account linking through Argyle
- Gig deposits redirected to Moves

The result: onboarding time shrank from a week or more to the same day, with many users hitting their "aha" moment the first time they opened the app.

[Navigate the onboarding gauntlet →](/experience/moves/onboarding)

![Streamlined onboarding flow from signup to first gig deposit]({{images.whyChooseMoves}})

### 2. Becoming the Primary Bank

Early on, customers treated Moves as a place to grab an advance, not a daily bank. To change that, we built features that turned Moves into their financial hub:

- Enriched and labeled transactions
- Apple and Google Pay support
- Bill pay and peer transfers
- Real-time gig earnings insights
- Push-to-debit transfers via Astra

Over time, Moves became the primary spending account for many workers. This anchored customers, improved retention, and gave us richer data for smarter decisions.

[See how we went beyond the advance →](/experience/moves/primary-bank)

![Integrated platform combining banking, earnings tracking, and rewards]({{images.gigFlow}})

### 3. Cash Advance Optimization

Advances were the gateway product, but the early model was unsustainable. Defaults were high, margins were thin, and repayment was unreliable.

We built a proprietary system for cash advances:

- Adjudication based on gig deposits and work history, not credit scores
- Disbursement directly into Moves Spending Accounts
- Repayment engine with flexible strategies: deposit-based, scheduled, instant, collections

This architecture allowed rapid iteration while maintaining consistency and compliance. By 2023, collection rates climbed from 73 percent to 91 percent, gross margins reached 50 percent, and cash advances became a sustainable product instead of a loss leader.

[Discover the anti-payday loan solution →](/experience/moves/cash-advances)

![Cash advance eligibility based on gig deposit history]({{images.bcaFlow}})

## The Systems Behind It All

Under the hood, we built an event-driven microservices architecture that powered millions of dollars in daily transactions:

- Redis Streams for event processing
- MongoDB for operational data
- gRPC for interservice communication
- Kubernetes for deployment

Key patterns:

- Domain-driven design for clear service boundaries
- Saga pattern for multi-step workflows like disbursements
- Idempotency keys to prevent duplicate transactions
- Strategy and factory patterns for repayment flexibility

This infrastructure kept eligibility and repayments updated in real time and gave customers full transparency into their cash advance progress.

## The Impact

Moves was not just another fintech app. It gave gig workers:

- Access to liquidity when they needed it
- A primary bank account that reflected their work patterns
- Real-time insights into earnings and spending
- An alternative to predatory lenders

And it gave the company a path to sustainability. By Q4 2023, originations had tripled compared to the previous year, revenue from cash advances was up 900 percent, and the product had shifted from experimental to profitable.

![Customer review highlighting free transfers and primary banking potential]({{images.movesReview}})

## Lessons Learned

- **Flexibility first.** Products evolve quickly, so systems must adapt without being rewritten.
- **Events are powerful but fragile.** Recovery and replay are just as important as pub and sub.
- **Trust is a feature.** Clear visibility into deposits, advances, and repayments drove engagement.
- **Leadership is about people.** Building resilient systems mattered, but building a resilient team mattered more. Our group consistently rated 4.8 out of 5 in feedback even under pressure.

## Looking Back

Moves ultimately did not survive as a company, but the experience changed me. I got to:

- Lead a team through a company-defining pivot
- Build financial systems that served people overlooked by banks
- Learn how to balance technical depth with business impact

I am proud of what we built and grateful for the lessons I carry forward.

![App Store presence with strong user ratings]({{images.movesItunes}})
