import{h as c,u as h,j as e,i as g,S as p,L as l,C as u,d as y,b as f,e as b}from"./index-DO0ow5_l.js";import{g as v,a as w}from"./markdown-xJp8CEXm.js";import{A as k,M as x}from"./article-layout-D8CTPs6Z.js";/**
 * @license lucide-react v0.462.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const M=c("Building",[["rect",{width:"16",height:"20",x:"4",y:"2",rx:"2",ry:"2",key:"76otgf"}],["path",{d:"M9 22v-4h6v4",key:"r93iot"}],["path",{d:"M8 6h.01",key:"1dz90k"}],["path",{d:"M16 6h.01",key:"1x0f13"}],["path",{d:"M12 6h.01",key:"1vi96p"}],["path",{d:"M12 10h.01",key:"1nrarc"}],["path",{d:"M12 14h.01",key:"1etili"}],["path",{d:"M16 10h.01",key:"1m94wz"}],["path",{d:"M16 14h.01",key:"1gbofw"}],["path",{d:"M8 10h.01",key:"19clt8"}],["path",{d:"M8 14h.01",key:"6423bh"}]]);/**
 * @license lucide-react v0.462.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const T=c("CreditCard",[["rect",{width:"20",height:"14",x:"2",y:"5",rx:"2",key:"ynyp8z"}],["line",{x1:"2",x2:"22",y1:"10",y2:"10",key:"1b3vmo"}]]);/**
 * @license lucide-react v0.462.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const m=c("FileText",[["path",{d:"M15 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V7Z",key:"1rqfz7"}],["path",{d:"M14 2v4a2 2 0 0 0 2 2h4",key:"tnqrlb"}],["path",{d:"M10 9H8",key:"b1mrlr"}],["path",{d:"M16 13H8",key:"t4e002"}],["path",{d:"M16 17H8",key:"z1uh3a"}]]),j=`---
title: "The Anti-Payday Loan: Engineering Cash Advances That Actually Work"
subtitle: "How we built systems that understand gig income and eliminate predatory lending"
type: "experience"
category: "Financial Technology"
date: "2022-2024"
readTime: "15 min read"
seoTitle: "The Anti-Payday Loan: Engineering Cash Advances That Actually Work - Liam Duncan"
seoDescription: "How we built systems that understand gig income and eliminate predatory lending with proprietary adjudication and repayment engines."
url: "/experience/moves/cash-advances"
backButton: '{"to": "/experience/moves", "label": "Back to My Memoir Of Moves"}'
footer: '{"backTo": "/experience/moves", "backLabel": "Back to My Memoir Of Moves"}'
---

## Coming Soon

This deep dive into Moves' cash advance architecture is currently being written. It will cover the technical details of how we built proprietary systems for adjudication, disbursement, and repayment that transformed cash advances from a loss leader into a profitable product.

Check back soon for the complete technical breakdown.
`,B=`---
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
`,A=`---
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
`,C=`---
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
`,I=(i,o)=>0,N=Object.assign({"../content/experience/moves/cash-advances.md":j,"../content/experience/moves/index.md":B,"../content/experience/moves/onboarding.md":A,"../content/experience/moves/primary-bank.md":C}),S=Object.entries(N).map(([i,o])=>{const r=i.split("/"),t=r.pop()||"",s=r[r.length-1]||"",n=t==="index.md"?s:v(t),a=t==="index.md"?n:`${s}/${n}`;return w(o,a)}).sort(I),P=i=>S.find(o=>o.slug===i),D=()=>{const{slug:i,subSlug:o}=h(),r=o?`${i}/${o}`:i,t=P(r||"");if(!t)return e.jsx(g,{to:"/404",replace:!0});const s={FileText:m,Building:M,CreditCard:T};return e.jsxs(e.Fragment,{children:[e.jsx(p,{title:t.seoTitle,description:t.seoDescription,image:"/og-image.jpg",url:t.url}),e.jsxs(k,{title:t.title,subtitle:t.subtitle,backButton:t.backButton,footer:t.footer,children:[e.jsx("div",{className:"prose prose-lg max-w-none",children:e.jsx(x,{components:{img:({src:n,alt:a})=>{const d=n?.startsWith("/")&&!n.startsWith("/liam-duncan-development/")?`/liam-duncan-development/${n.substring(1)}`:n;return e.jsxs("figure",{className:"my-8",children:[e.jsx("img",{src:d,alt:a||"",className:"w-full max-w-2xl mx-auto rounded-lg shadow-lg"}),a&&e.jsx("figcaption",{className:"text-center text-sm text-muted-foreground mt-4",children:a})]})},h2:({children:n})=>e.jsx("h2",{className:"text-3xl font-bold mt-12 mb-6 text-foreground leading-tight",children:n}),h3:({children:n})=>e.jsx("h3",{className:"text-2xl font-semibold mt-12 mb-5 text-foreground leading-tight",children:n}),p:({children:n})=>e.jsx("p",{className:"mb-6 text-foreground leading-relaxed text-lg font-light",children:n}),ul:({children:n})=>e.jsx("ul",{className:"mb-8 space-y-3 list-none",children:n}),li:({children:n})=>e.jsx("li",{className:"text-foreground leading-relaxed text-lg font-light relative pl-6 before:content-['—'] before:absolute before:left-0 before:text-primary before:font-normal",children:n}),strong:({children:n})=>e.jsx("strong",{className:"font-bold text-foreground",children:n}),a:({href:n,children:a})=>n?.startsWith("/")?e.jsx(l,{to:n,className:"text-primary hover:text-primary/80 transition-colors underline decoration-1 underline-offset-2",children:a}):e.jsx("a",{href:n,className:"text-primary hover:text-primary/80 transition-colors underline decoration-1 underline-offset-2",target:"_blank",rel:"noopener noreferrer",children:a})},children:t.content})}),t.relatedArticles&&t.relatedArticles.length>0&&e.jsx("section",{className:"py-16 mt-16 bg-muted/30 border-t border-border/20 relative left-1/2 right-1/2 -ml-[50vw] -mr-[50vw] w-screen",children:e.jsx("div",{className:"container mx-auto px-6",children:e.jsxs("div",{className:"max-w-6xl mx-auto",children:[e.jsxs("div",{className:"text-center mb-8",children:[e.jsx("h3",{className:"text-2xl font-semibold text-foreground mb-2",children:"The story isn't over"}),e.jsx("p",{className:"text-muted-foreground",children:"Explore the technical architecture and pivotal decisions that shaped Moves:"})]}),e.jsx("div",{className:"grid grid-cols-1 md:grid-cols-3 gap-6",children:t.relatedArticles.map(n=>{const a=s[n.icon]||m,d=t.slug==="moves"?`/experience/moves/${n.slug}`:`/experience/${n.slug}`;return e.jsx(l,{to:d,children:e.jsx(u,{className:"hover:shadow-md transition-shadow bg-background/50 border-border/50 h-full",children:e.jsxs(y,{className:"p-6",children:[e.jsxs("div",{className:"flex items-center gap-3 mb-3",children:[e.jsx(a,{className:"h-4 w-4 text-muted-foreground"}),e.jsx(f,{className:"text-lg font-medium",children:n.title})]}),e.jsx(b,{className:"text-sm leading-relaxed",children:n.description})]})})},n.slug)})})]})})})]})]})};export{D as default};
