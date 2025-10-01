import { Card, CardContent, CardDescription, CardTitle } from "@/components/ui/card";
import { FileText, Building, CreditCard } from "lucide-react";
import { Link } from "react-router";
import SEO from "@/components/SEO";
import { OG_IMAGES } from "@/lib/constants";
import { ArticleLayout } from "@/components/ui/article-layout";

// Import Moves images
import bcaFlowImage from "@/assets/images/moves/bca-flow.jpg";
import gigFlowImage from "@/assets/images/moves/gig-flow.jpg";
import whatIsMovesImage from "@/assets/images/moves/what-is-moves-financial.jpg";
import whyChooseMovesImage from "@/assets/images/moves/why-choose-moves.jpg";
import movesReviewImage from "@/assets/images/moves/moves-review-1.jpg";
import movesItunesImage from "@/assets/images/moves/moves-itunes.jpg";

const ExperienceMoves = () => {
  return (
    <>
      <SEO
        title="My Memoir Of Moves - Liam Duncan"
        description="My three year journey leading the team that built Moves Financial's core banking platform and transformed cash advances for gig workers."
        image={OG_IMAGES.resume}
        url="/experience/moves"
      />
      <ArticleLayout
        title="My Memoir Of Moves"
        subtitle="My three year journey leading the team that built Moves Financial's core banking platform and transformed cash advances for gig workers."
        backButton={{
          to: "/",
          label: "Back to Portfolio"
        }}
        footer={{
          backTo: "/",
          backLabel: "Back to Portfolio"
        }}
      >

            <section>
              <h2 className="text-3xl font-bold mt-0 mb-6 text-foreground leading-tight">A Better Option Than Payday Loans</h2>
              <div className="space-y-6">
                <p className="mb-6 text-foreground leading-relaxed text-lg font-light">
                  When a gig worker's car broke down, their only option was often a payday loan. That meant sky-high interest, rigid repayment terms, and a cycle of debt that punished the very people keeping the modern economy moving.
                </p>
                <p className="mb-6 text-foreground leading-relaxed text-lg font-light">
                  At Moves, we believed there had to be a better way. Gig workers weren't irresponsible. They were delivering food, moving packages, and driving passengers every day. The problem was that banks couldn't process their irregular, instant income. That blind spot locked millions of hard-working people out of credit and basic financial services.
                </p>
              </div>
            </section>

            <section>
              <h2 className="text-3xl font-bold mt-12 mb-6 text-foreground leading-tight">Why Moves Existed</h2>
              <div className="space-y-6">
                <p className="mb-6 text-foreground leading-relaxed text-lg font-light">
                  Moves set out to build financial services around how gig workers actually earn and spend. The first hypothesis was simple: cash advances could bridge the gap. If someone needed to repair their car or replace an e-bike, they should be able to access liquidity without being trapped by predatory lenders.
                </p>
                <p className="mb-6 text-foreground leading-relaxed text-lg font-light">
                  But for cash advances to work long-term, they couldn't just be a transaction. They had to be the beginning of an ongoing financial relationship, one built on trust, visibility, and fairness.
                </p>
              </div>
              
              <figure className="my-8">
                <img 
                  src={whatIsMovesImage} 
                  alt="Gig worker using phone with app screens showing $325.48 spendable balance, weekly earnings of $208, and expected payouts from DoorDash"
                  className="w-full max-w-2xl mx-auto rounded-lg shadow-lg"
                />
                <figcaption className="text-center text-sm text-muted-foreground mt-4">
                  Platform designed for gig workers' unique income patterns
                </figcaption>
              </figure>
            </section>

            <section>
              <h2 className="text-3xl font-bold mt-12 mb-6 text-foreground leading-tight">Where Things Stood When I Joined</h2>
              <div className="space-y-6">
                <p className="mb-6 text-foreground leading-relaxed text-lg font-light">
                  By the time I arrived in late 2021, Moves had already proven there was demand. The first product let customers request advances through simple forms, with underwriting done manually by scraping gig data. Disbursements went straight to external bank accounts, and repayments were tracked in spreadsheets until those collapsed under the weight of transactions. The company eventually migrated to LoanPro, but servicing was still clunky and defaults were high.
                </p>
                <p className="mb-6 text-foreground leading-relaxed text-lg font-light">
                  Customers often took the money and disappeared. Without an ecosystem to anchor them, retention was poor and margins unsustainable.
                </p>
                <p className="mb-6 text-foreground leading-relaxed text-lg font-light">
                  That was when Moves made a critical decision: bring business cash advances (BCAs) in-house and stop relying on LoanPro. This pivot opened the door to integrate advances directly into a broader banking platform. It was also the moment I joined, just as the company was transforming from a scrappy loan provider into a full financial services platform.
                </p>
              </div>
            </section>

            <section>
              <h2 className="text-3xl font-bold mt-12 mb-6 text-foreground leading-tight">My Role and Growth</h2>
              <div className="space-y-6">
                <p className="mb-6 text-foreground leading-relaxed text-lg font-light">
                  I came on board as a Senior Software Engineer just as the Moves Spending Account was launching. Within a few months, I stepped into the role of Technical Lead and Manager of "The Bank Job", the team responsible for banking and financial services.
                </p>
                <p className="mb-6 text-foreground leading-relaxed text-lg font-light">
                  For the next three years, I led the design and delivery of systems that powered Moves' pivot into a full-service banking platform. My team owned:
                </p>
                <ul className="mb-8 space-y-3 list-none">
                  <li className="text-foreground leading-relaxed text-lg font-light relative pl-6 before:content-['—'] before:absolute before:left-0 before:text-primary before:font-normal">KYC and identity flows</li>
                  <li className="text-foreground leading-relaxed text-lg font-light relative pl-6 before:content-['—'] before:absolute before:left-0 before:text-primary before:font-normal">Banking and payments</li>
                  <li className="text-foreground leading-relaxed text-lg font-light relative pl-6 before:content-['—'] before:absolute before:left-0 before:text-primary before:font-normal">Gig deposits</li>
                  <li className="text-foreground leading-relaxed text-lg font-light relative pl-6 before:content-['—'] before:absolute before:left-0 before:text-primary before:font-normal">Cash advance adjudication</li>
                  <li className="text-foreground leading-relaxed text-lg font-light relative pl-6 before:content-['—'] before:absolute before:left-0 before:text-primary before:font-normal">Disbursement</li>
                  <li className="text-foreground leading-relaxed text-lg font-light relative pl-6 before:content-['—'] before:absolute before:left-0 before:text-primary before:font-normal">Repayment and servicing</li>
                </ul>
                <p className="mb-6 text-foreground leading-relaxed text-lg font-light">
                  It was the most formative chapter of my career. A mix of architecture, leadership, and product strategy tied directly to the financial lives of real people.
                </p>
              </div>
            </section>

            <section>
              <h2 className="text-3xl font-bold mt-12 mb-6 text-foreground leading-tight">The Three Bets That Defined Moves</h2>
              <div className="space-y-8">
                  <div>
                    <h3 className="text-2xl font-semibold mt-0 mb-5 text-foreground leading-tight">1. Onboarding and Time to Aha</h3>
                    <div className="space-y-6">
                      <p className="mb-6 text-foreground leading-relaxed text-lg font-light">Signing up originally took weeks. KYC could stall, gig accounts were hard to link, and customers often dropped off before seeing value.</p>
                      <p className="mb-6 text-foreground leading-relaxed text-lg font-light">We redefined the "aha moment" as the first gig deposit into a Moves account. Everything in onboarding was redesigned to drive toward that milestone:</p>
                      <ul className="mb-8 space-y-3 list-none">
                        <li className="text-foreground leading-relaxed text-lg font-light relative pl-6 before:content-['—'] before:absolute before:left-0 before:text-primary before:font-normal">Automated KYC with Unit</li>
                        <li className="text-foreground leading-relaxed text-lg font-light relative pl-6 before:content-['—'] before:absolute before:left-0 before:text-primary before:font-normal">Progress tracking in-app</li>
                        <li className="text-foreground leading-relaxed text-lg font-light relative pl-6 before:content-['—'] before:absolute before:left-0 before:text-primary before:font-normal">Instant account creation with a virtual card</li>
                        <li className="text-foreground leading-relaxed text-lg font-light relative pl-6 before:content-['—'] before:absolute before:left-0 before:text-primary before:font-normal">Gig account linking through Argyle</li>
                        <li className="text-foreground leading-relaxed text-lg font-light relative pl-6 before:content-['—'] before:absolute before:left-0 before:text-primary before:font-normal">Gig deposits redirected to Moves</li>
                      </ul>
                      <p className="mb-6 text-foreground leading-relaxed text-lg font-light">The result: onboarding time shrank from a week or more to the same day, with many users hitting their "aha" moment the first time they opened the app.</p>
                      
                      <figure className="my-8">
                        <img 
                          src={whyChooseMovesImage} 
                          alt="Four-step process: connect gig accounts, set up spending account, start depositing income, access cash advances"
                          className="w-full max-w-3xl mx-auto rounded-lg shadow-lg"
                        />
                        <figcaption className="text-center text-sm text-muted-foreground mt-4">
                          Streamlined onboarding flow from signup to first gig deposit
                        </figcaption>
                      </figure>
                      
                    </div>
                  </div>

                  <div>
                    <h3 className="text-2xl font-semibold mt-12 mb-5 text-foreground leading-tight">2. Becoming the Primary Bank</h3>
                    <div className="space-y-6">
                      <p className="mb-6 text-foreground leading-relaxed text-lg font-light">Early on, customers treated Moves as a place to grab an advance, not a daily bank. To change that, we built features that turned Moves into their financial hub:</p>
                      <ul className="mb-8 space-y-3 list-none">
                        <li className="text-foreground leading-relaxed text-lg font-light relative pl-6 before:content-['—'] before:absolute before:left-0 before:text-primary before:font-normal">Enriched and labeled transactions</li>
                        <li className="text-foreground leading-relaxed text-lg font-light relative pl-6 before:content-['—'] before:absolute before:left-0 before:text-primary before:font-normal">Apple and Google Pay support</li>
                        <li className="text-foreground leading-relaxed text-lg font-light relative pl-6 before:content-['—'] before:absolute before:left-0 before:text-primary before:font-normal">Bill pay and peer transfers</li>
                        <li className="text-foreground leading-relaxed text-lg font-light relative pl-6 before:content-['—'] before:absolute before:left-0 before:text-primary before:font-normal">Real-time gig earnings insights</li>
                        <li className="text-foreground leading-relaxed text-lg font-light relative pl-6 before:content-['—'] before:absolute before:left-0 before:text-primary before:font-normal">Push-to-debit transfers via Astra</li>
                      </ul>
                      <p className="mb-6 text-foreground leading-relaxed text-lg font-light">Over time, Moves became the primary spending account for many workers. This anchored customers, improved retention, and gave us richer data for smarter decisions.</p>
                      
                      <figure className="my-8">
                        <img 
                          src={gigFlowImage} 
                          alt="App screens showing $54.60 balance, $25 cash advance, gig earnings dashboard, stock rewards, and profile with linked platforms"
                          className="w-full max-w-4xl mx-auto rounded-lg shadow-lg"
                        />
                        <figcaption className="text-center text-sm text-muted-foreground mt-4">
                          Integrated platform combining banking, earnings tracking, and rewards
                        </figcaption>
                      </figure>
                    </div>
                  </div>

                  <div>
                    <h3 className="text-2xl font-semibold mt-12 mb-5 text-foreground leading-tight">3. Cash Advance Optimization</h3>
                    <div className="space-y-6">
                      <p className="mb-6 text-foreground leading-relaxed text-lg font-light">Advances were the gateway product, but the early model was unsustainable. Defaults were high, margins were thin, and repayment was unreliable.</p>
                      <p className="mb-6 text-foreground leading-relaxed text-lg font-light">We built a proprietary system for cash advances:</p>
                      <ul className="mb-8 space-y-3 list-none">
                        <li className="text-foreground leading-relaxed text-lg font-light relative pl-6 before:content-['—'] before:absolute before:left-0 before:text-primary before:font-normal">Adjudication based on gig deposits and work history, not credit scores</li>
                        <li className="text-foreground leading-relaxed text-lg font-light relative pl-6 before:content-['—'] before:absolute before:left-0 before:text-primary before:font-normal">Disbursement directly into Moves Spending Accounts</li>
                        <li className="text-foreground leading-relaxed text-lg font-light relative pl-6 before:content-['—'] before:absolute before:left-0 before:text-primary before:font-normal">Repayment engine with flexible strategies: deposit-based, scheduled, instant, collections</li>
                      </ul>
                      <p className="mb-6 text-foreground leading-relaxed text-lg font-light">This architecture allowed rapid iteration while maintaining consistency and compliance. By 2023, collection rates climbed from 73 percent to 91 percent, gross margins reached 50 percent, and cash advances became a sustainable product instead of a loss leader.</p>
                      
                      <figure className="my-8">
                        <img 
                          src={bcaFlowImage} 
                          alt="Three phone screens showing cash advance progression: $0 available with gig deposit setup, $250 available for request, $250 advanced confirmation"
                          className="w-full max-w-4xl mx-auto rounded-lg shadow-lg"
                        />
                        <figcaption className="text-center text-sm text-muted-foreground mt-4">
                          Cash advance eligibility based on gig deposit history
                        </figcaption>
                      </figure>
                    </div>
                  </div>
              </div>
            </section>

            <section>
              <h2 className="text-3xl font-bold mt-12 mb-6 text-foreground leading-tight">The Systems Behind It All</h2>
              <div className="space-y-6">
                <p className="mb-6 text-foreground leading-relaxed text-lg font-light">Under the hood, we built an event-driven microservices architecture that powered millions of dollars in daily transactions:</p>
                <ul className="mb-8 space-y-3 list-none">
                  <li className="text-foreground leading-relaxed text-lg font-light relative pl-6 before:content-['—'] before:absolute before:left-0 before:text-primary before:font-normal">Redis Streams for event processing</li>
                  <li className="text-foreground leading-relaxed text-lg font-light relative pl-6 before:content-['—'] before:absolute before:left-0 before:text-primary before:font-normal">MongoDB for operational data</li>
                  <li className="text-foreground leading-relaxed text-lg font-light relative pl-6 before:content-['—'] before:absolute before:left-0 before:text-primary before:font-normal">gRPC for interservice communication</li>
                  <li className="text-foreground leading-relaxed text-lg font-light relative pl-6 before:content-['—'] before:absolute before:left-0 before:text-primary before:font-normal">Kubernetes for deployment</li>
                </ul>
                <p className="mb-6 text-foreground leading-relaxed text-lg font-light">Key patterns:</p>
                <ul className="mb-8 space-y-3 list-none">
                  <li className="text-foreground leading-relaxed text-lg font-light relative pl-6 before:content-['—'] before:absolute before:left-0 before:text-primary before:font-normal">Domain-driven design for clear service boundaries</li>
                  <li className="text-foreground leading-relaxed text-lg font-light relative pl-6 before:content-['—'] before:absolute before:left-0 before:text-primary before:font-normal">Saga pattern for multi-step workflows like disbursements</li>
                  <li className="text-foreground leading-relaxed text-lg font-light relative pl-6 before:content-['—'] before:absolute before:left-0 before:text-primary before:font-normal">Idempotency keys to prevent duplicate transactions</li>
                  <li className="text-foreground leading-relaxed text-lg font-light relative pl-6 before:content-['—'] before:absolute before:left-0 before:text-primary before:font-normal">Strategy and factory patterns for repayment flexibility</li>
                </ul>
                <p className="mb-6 text-foreground leading-relaxed text-lg font-light">
                  This infrastructure kept eligibility and repayments updated in real time and gave customers full transparency into their cash advance progress.
                </p>
              </div>
            </section>

            <section>
              <h2 className="text-3xl font-bold mt-12 mb-6 text-foreground leading-tight">The Impact</h2>
              <div className="space-y-6">
                <p className="mb-6 text-foreground leading-relaxed text-lg font-light">Moves was not just another fintech app. It gave gig workers:</p>
                <ul className="mb-8 space-y-3 list-none">
                  <li className="text-foreground leading-relaxed text-lg font-light relative pl-6 before:content-['—'] before:absolute before:left-0 before:text-primary before:font-normal">Access to liquidity when they needed it</li>
                  <li className="text-foreground leading-relaxed text-lg font-light relative pl-6 before:content-['—'] before:absolute before:left-0 before:text-primary before:font-normal">A primary bank account that reflected their work patterns</li>
                  <li className="text-foreground leading-relaxed text-lg font-light relative pl-6 before:content-['—'] before:absolute before:left-0 before:text-primary before:font-normal">Real-time insights into earnings and spending</li>
                  <li className="text-foreground leading-relaxed text-lg font-light relative pl-6 before:content-['—'] before:absolute before:left-0 before:text-primary before:font-normal">An alternative to predatory lenders</li>
                </ul>
                <p className="mb-6 text-foreground leading-relaxed text-lg font-light">
                  And it gave the company a path to sustainability. By Q4 2023, originations had tripled compared to the previous year, revenue from cash advances was up 900 percent, and the product had shifted from experimental to profitable.
                </p>
                
                <figure className="my-8">
                  <img 
                    src={movesReviewImage} 
                    alt="Five-star App Store review from Moshi Kiernan praising free transfers and calling Moves almost good enough to become primary bank"
                    className="w-full max-w-2xl mx-auto rounded-lg shadow-lg"
                  />
                  <figcaption className="text-center text-sm text-muted-foreground mt-4">
                    Customer review highlighting free transfers and primary banking potential
                  </figcaption>
                </figure>
              </div>
            </section>

            <section>
              <h2 className="text-3xl font-bold mt-12 mb-6 text-foreground leading-tight">Lessons Learned</h2>
              <div className="space-y-6">
                <ul className="mb-8 space-y-3 list-none">
                  <li className="text-foreground leading-relaxed text-lg font-light relative pl-6 before:content-['—'] before:absolute before:left-0 before:text-primary before:font-normal"><strong className="font-bold text-foreground">Flexibility first.</strong> Products evolve quickly, so systems must adapt without being rewritten.</li>
                  <li className="text-foreground leading-relaxed text-lg font-light relative pl-6 before:content-['—'] before:absolute before:left-0 before:text-primary before:font-normal"><strong className="font-bold text-foreground">Events are powerful but fragile.</strong> Recovery and replay are just as important as pub and sub.</li>
                  <li className="text-foreground leading-relaxed text-lg font-light relative pl-6 before:content-['—'] before:absolute before:left-0 before:text-primary before:font-normal"><strong className="font-bold text-foreground">Trust is a feature.</strong> Clear visibility into deposits, advances, and repayments drove engagement.</li>
                  <li className="text-foreground leading-relaxed text-lg font-light relative pl-6 before:content-['—'] before:absolute before:left-0 before:text-primary before:font-normal"><strong className="font-bold text-foreground">Leadership is about people.</strong> Building resilient systems mattered, but building a resilient team mattered more. Our group consistently rated 4.8 out of 5 in feedback even under pressure.</li>
                </ul>
              </div>
            </section>

            <section>
              <h2 className="text-3xl font-bold mt-12 mb-6 text-foreground leading-tight">Looking Back</h2>
              <div className="space-y-6">
                <p className="mb-6 text-foreground leading-relaxed text-lg font-light">Moves ultimately did not survive as a company, but the experience changed me. I got to:</p>
                <ul className="mb-8 space-y-3 list-none">
                  <li className="text-foreground leading-relaxed text-lg font-light relative pl-6 before:content-['—'] before:absolute before:left-0 before:text-primary before:font-normal">Lead a team through a company-defining pivot</li>
                  <li className="text-foreground leading-relaxed text-lg font-light relative pl-6 before:content-['—'] before:absolute before:left-0 before:text-primary before:font-normal">Build financial systems that served people overlooked by banks</li>
                  <li className="text-foreground leading-relaxed text-lg font-light relative pl-6 before:content-['—'] before:absolute before:left-0 before:text-primary before:font-normal">Learn how to balance technical depth with business impact</li>
                </ul>
                <p className="mb-6 text-foreground leading-relaxed text-lg font-light">I am proud of what we built and grateful for the lessons I carry forward.</p>
                
                <figure className="my-8 mb-12">
                  <img 
                    src={movesItunesImage} 
                    alt="Mac App Store listing for Moves showing 4.3-star rating, 360 reviews, and iPhone screenshots of banking features"
                    className="w-full max-w-2xl mx-auto rounded-lg shadow-lg"
                  />
                  <figcaption className="text-center text-sm text-muted-foreground mt-4">
                    App Store presence with strong user ratings
                  </figcaption>
                </figure>
                
              </div>
            </section>

        
        {/* Technical Deep Dives Footer Section */}
        <section className="py-16 mt-16 bg-muted/30 border-t border-border/20 relative left-1/2 right-1/2 -ml-[50vw] -mr-[50vw] w-screen">
          <div className="container mx-auto px-6">
            <div className="max-w-6xl mx-auto">
              <div className="text-center mb-8">
                <h3 className="text-2xl font-semibold text-foreground mb-2">The story isn't over</h3>
                <p className="text-muted-foreground">Explore the technical architecture and pivotal decisions that shaped Moves:</p>
              </div>
              
              <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                <Link to="/experience/moves/onboarding">
                  <Card className="hover:shadow-md transition-shadow bg-background/50 border-border/50 h-full">
                    <CardContent className="p-6">
                      <div className="flex items-center gap-3 mb-3">
                        <FileText className="h-4 w-4 text-muted-foreground" />
                        <CardTitle className="text-lg font-medium">Onboarding</CardTitle>
                      </div>
                      <CardDescription className="text-sm leading-relaxed">
                        How we reduced signup time from weeks to same-day with automated KYC and instant account creation
                      </CardDescription>
                    </CardContent>
                  </Card>
                </Link>
                
                <Link to="/experience/moves/primary-bank">
                  <Card className="hover:shadow-md transition-shadow bg-background/50 border-border/50 h-full">
                    <CardContent className="p-6">
                      <div className="flex items-center gap-3 mb-3">
                        <Building className="h-4 w-4 text-muted-foreground" />
                        <CardTitle className="text-lg font-medium">Primary Bank</CardTitle>
                      </div>
                      <CardDescription className="text-sm leading-relaxed">
                        Building comprehensive banking features that transformed customer behavior and improved retention
                      </CardDescription>
                    </CardContent>
                  </Card>
                </Link>
                
                <Link to="/experience/moves/cash-advances">
                  <Card className="hover:shadow-md transition-shadow bg-background/50 border-border/50 h-full">
                    <CardContent className="p-6">
                      <div className="flex items-center gap-3 mb-3">
                        <CreditCard className="h-4 w-4 text-muted-foreground" />
                        <CardTitle className="text-lg font-medium">Cash Advances</CardTitle>
                      </div>
                      <CardDescription className="text-sm leading-relaxed">
                        How we architected and built proprietary cash advance systems tailored to gig workers' irregular income patterns
                      </CardDescription>
                    </CardContent>
                  </Card>
                </Link>
              </div>
            </div>
          </div>
        </section>
      </ArticleLayout>
    </>
  );
};

export default ExperienceMoves;