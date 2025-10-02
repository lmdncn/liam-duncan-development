import{h as c,u as m,j as e,i as g,S as p,L as l,C as u,d as y,b,e as f}from"./index-Ao54gWXh.js";import{g as v,a as w}from"./markdown-Bl-hfGLp.js";import{A as k,M as x}from"./article-layout-DdpX5WlI.js";/**
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
 */const h=c("FileText",[["path",{d:"M15 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V7Z",key:"1rqfz7"}],["path",{d:"M14 2v4a2 2 0 0 0 2 2h4",key:"tnqrlb"}],["path",{d:"M10 9H8",key:"b1mrlr"}],["path",{d:"M16 13H8",key:"t4e002"}],["path",{d:"M16 17H8",key:"z1uh3a"}]]),j=`---
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

Check back soon for the complete technical breakdown.`,B=`---
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
---

## A Better Option Than Payday Loans

When a gig worker's car broke down, their only option was often a payday loan. That meant sky-high interest, rigid repayment terms, and a cycle of debt that punished the very people keeping the modern economy moving.

At Moves, we believed there had to be a better way. Gig workers weren't irresponsible. They were delivering food, moving packages, and driving passengers every day. The problem was that banks couldn't process their irregular, instant income. That blind spot locked millions of hard-working people out of credit and basic financial services.

## Why Moves Existed

Moves set out to build financial services around how gig workers actually earn and spend. The first hypothesis was simple: cash advances could bridge the gap. If someone needed to repair their car or replace an e-bike, they should be able to access liquidity without being trapped by predatory lenders.

But for cash advances to work long-term, they couldn't just be a transaction. They had to be the beginning of an ongoing financial relationship, one built on trust, visibility, and fairness.

![Platform designed for gig workers' unique income patterns](/what-is-moves-financial.jpg)

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

![Streamlined onboarding flow from signup to first gig deposit](/why-choose-moves.jpg)

### 2. Becoming the Primary Bank

Early on, customers treated Moves as a place to grab an advance, not a daily bank. To change that, we built features that turned Moves into their financial hub:

- Enriched and labeled transactions
- Apple and Google Pay support
- Bill pay and peer transfers
- Real-time gig earnings insights
- Push-to-debit transfers via Astra

Over time, Moves became the primary spending account for many workers. This anchored customers, improved retention, and gave us richer data for smarter decisions.

[See how we went beyond the advance →](/experience/moves/primary-bank)

![Integrated platform combining banking, earnings tracking, and rewards](/gig-flow.jpg)

### 3. Cash Advance Optimization

Advances were the gateway product, but the early model was unsustainable. Defaults were high, margins were thin, and repayment was unreliable.

We built a proprietary system for cash advances:

- Adjudication based on gig deposits and work history, not credit scores
- Disbursement directly into Moves Spending Accounts
- Repayment engine with flexible strategies: deposit-based, scheduled, instant, collections

This architecture allowed rapid iteration while maintaining consistency and compliance. By 2023, collection rates climbed from 73 percent to 91 percent, gross margins reached 50 percent, and cash advances became a sustainable product instead of a loss leader.

[Discover the anti-payday loan solution →](/experience/moves/cash-advances)

![Cash advance eligibility based on gig deposit history](/bca-flow.jpg)

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

![Customer review highlighting free transfers and primary banking potential](/moves-review-1.jpg)

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

![App Store presence with strong user ratings](/moves-itunes.jpg)
`,A=`---
title: "The Onboarding Gauntlet: Making Finance Work for Gig Workers"
subtitle: "Overcoming identity verification, compliance hurdles, and system integration challenges"
type: "experience"
category: "Financial Technology"
date: "2022-2023"
readTime: "8 min read"
seoTitle: "The Onboarding Gauntlet: Making Finance Work for Gig Workers - Liam Duncan"
seoDescription: "Overcoming identity verification, compliance hurdles, and system integration challenges to reduce signup time from weeks to same-day."
url: "/experience/moves/onboarding"
backButton: '{"to": "/experience/moves", "label": "Back to My Memoir Of Moves"}'
footer: '{"backTo": "/experience/moves", "backLabel": "Back to My Memoir Of Moves"}'
---

## Coming Soon

This deep dive into Moves' onboarding transformation is currently being written. It will cover the technical details of how we:

- Implemented automated KYC with Unit
- Built progress tracking systems
- Created instant account creation with virtual cards
- Integrated gig account linking through Argyle
- Automated gig deposit redirection

Check back soon for the complete technical breakdown.`,C=`---
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

Check back soon for the complete technical breakdown.`,N=(i,o)=>0,I=Object.assign({"../content/experience/moves/cash-advances.md":j,"../content/experience/moves/index.md":B,"../content/experience/moves/onboarding.md":A,"../content/experience/moves/primary-bank.md":C}),L=Object.entries(I).map(([i,o])=>{const r=i.split("/"),t=r.pop()||"",s=r[r.length-1]||"",n=t==="index.md"?s:v(t),a=t==="index.md"?n:`${s}/${n}`;return w(o,a)}).sort(N),S=i=>L.find(o=>o.slug===i),W=()=>{const{slug:i,subSlug:o}=m(),r=o?`${i}/${o}`:i,t=S(r||"");if(!t)return e.jsx(g,{to:"/404",replace:!0});const s={FileText:h,Building:M,CreditCard:T};return e.jsxs(e.Fragment,{children:[e.jsx(p,{title:t.seoTitle,description:t.seoDescription,image:"/og-image.jpg",url:t.url}),e.jsxs(k,{title:t.title,subtitle:t.subtitle,backButton:t.backButton,footer:t.footer,children:[e.jsx("div",{className:"prose prose-lg max-w-none",children:e.jsx(x,{components:{img:({src:n,alt:a})=>{const d=n?.startsWith("/")&&!n.startsWith("/liam-duncan-development/")?`/liam-duncan-development/${n.substring(1)}`:n;return e.jsxs("figure",{className:"my-8",children:[e.jsx("img",{src:d,alt:a||"",className:"w-full max-w-2xl mx-auto rounded-lg shadow-lg"}),a&&e.jsx("figcaption",{className:"text-center text-sm text-muted-foreground mt-4",children:a})]})},h2:({children:n})=>e.jsx("h2",{className:"text-3xl font-bold mt-12 mb-6 text-foreground leading-tight",children:n}),h3:({children:n})=>e.jsx("h3",{className:"text-2xl font-semibold mt-12 mb-5 text-foreground leading-tight",children:n}),p:({children:n})=>e.jsx("p",{className:"mb-6 text-foreground leading-relaxed text-lg font-light",children:n}),ul:({children:n})=>e.jsx("ul",{className:"mb-8 space-y-3 list-none",children:n}),li:({children:n})=>e.jsx("li",{className:"text-foreground leading-relaxed text-lg font-light relative pl-6 before:content-['—'] before:absolute before:left-0 before:text-primary before:font-normal",children:n}),strong:({children:n})=>e.jsx("strong",{className:"font-bold text-foreground",children:n}),a:({href:n,children:a})=>n?.startsWith("/")?e.jsx(l,{to:n,className:"text-primary hover:text-primary/80 transition-colors underline decoration-1 underline-offset-2",children:a}):e.jsx("a",{href:n,className:"text-primary hover:text-primary/80 transition-colors underline decoration-1 underline-offset-2",target:"_blank",rel:"noopener noreferrer",children:a})},children:t.content})}),t.relatedArticles&&t.relatedArticles.length>0&&e.jsx("section",{className:"py-16 mt-16 bg-muted/30 border-t border-border/20 relative left-1/2 right-1/2 -ml-[50vw] -mr-[50vw] w-screen",children:e.jsx("div",{className:"container mx-auto px-6",children:e.jsxs("div",{className:"max-w-6xl mx-auto",children:[e.jsxs("div",{className:"text-center mb-8",children:[e.jsx("h3",{className:"text-2xl font-semibold text-foreground mb-2",children:"The story isn't over"}),e.jsx("p",{className:"text-muted-foreground",children:"Explore the technical architecture and pivotal decisions that shaped Moves:"})]}),e.jsx("div",{className:"grid grid-cols-1 md:grid-cols-3 gap-6",children:t.relatedArticles.map(n=>{const a=s[n.icon]||h,d=t.slug==="moves"?`/experience/moves/${n.slug}`:`/experience/${n.slug}`;return e.jsx(l,{to:d,children:e.jsx(u,{className:"hover:shadow-md transition-shadow bg-background/50 border-border/50 h-full",children:e.jsxs(y,{className:"p-6",children:[e.jsxs("div",{className:"flex items-center gap-3 mb-3",children:[e.jsx(a,{className:"h-4 w-4 text-muted-foreground"}),e.jsx(b,{className:"text-lg font-medium",children:n.title})]}),e.jsx(f,{className:"text-sm leading-relaxed",children:n.description})]})})},n.slug)})})]})})})]})]})};export{W as default};
