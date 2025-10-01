import SEO from "@/components/SEO";
import { OG_IMAGES } from "@/lib/constants";
import { ArticleLayout } from "@/components/ui/article-layout";

const ExperienceMovesCashAdvances = () => {
  return (
    <>
      <SEO
        title="The Anti-Payday Loan: Engineering Cash Advances That Actually Work - Liam Duncan"
        description="How we built systems that understand gig income and eliminate predatory lending with proprietary adjudication and repayment engines."
        image={OG_IMAGES.resume}
        url="/experience/moves/cash-advances"
      />
      <ArticleLayout
        title="The Anti-Payday Loan: Engineering Cash Advances That Actually Work"
        subtitle="How we built systems that understand gig income and eliminate predatory lending"
        backButton={{
          to: "/experience/moves",
          label: "Back to My Memoir Of Moves"
        }}
        footer={{
          backTo: "/experience/moves",
          backLabel: "Back to My Memoir Of Moves"
        }}
      >
        <section>
          <h2 className="text-3xl font-bold mt-0 mb-6 text-foreground leading-tight">Coming Soon</h2>
          <div className="space-y-6">
            <p className="mb-6 text-foreground leading-relaxed text-lg font-light">
              This deep dive into Moves' cash advance architecture is currently being written. 
              It will cover the technical implementation of:
            </p>
            <ul className="mb-8 space-y-3 list-none">
              <li className="text-foreground leading-relaxed text-lg font-light relative pl-6 before:content-['—'] before:absolute before:left-0 before:text-primary before:font-normal">Adjudication systems based on gig deposits and work history</li>
              <li className="text-foreground leading-relaxed text-lg font-light relative pl-6 before:content-['—'] before:absolute before:left-0 before:text-primary before:font-normal">Direct disbursement into Moves Spending Accounts</li>
              <li className="text-foreground leading-relaxed text-lg font-light relative pl-6 before:content-['—'] before:absolute before:left-0 before:text-primary before:font-normal">Flexible repayment engine strategies</li>
              <li className="text-foreground leading-relaxed text-lg font-light relative pl-6 before:content-['—'] before:absolute before:left-0 before:text-primary before:font-normal">Event-driven processing with Redis Streams</li>
              <li className="text-foreground leading-relaxed text-lg font-light relative pl-6 before:content-['—'] before:absolute before:left-0 before:text-primary before:font-normal">Saga pattern for complex workflows</li>
            </ul>
            <p className="mb-6 text-foreground leading-relaxed text-lg font-light">
              Check back soon for the complete technical breakdown.
            </p>
          </div>
        </section>
      </ArticleLayout>
    </>
  );
};

export default ExperienceMovesCashAdvances;