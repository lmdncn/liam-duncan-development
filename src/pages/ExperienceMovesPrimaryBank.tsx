import SEO from "@/components/SEO";
import { OG_IMAGES } from "@/lib/constants";
import { ArticleLayout } from "@/components/ui/article-layout";

const ExperienceMovesPrimaryBank = () => {
  return (
    <>
      <SEO
        title="Moves Primary Bank Deep Dive - Liam Duncan"
        description="Building comprehensive banking features that transformed customer behavior and improved retention at Moves Financial."
        image={OG_IMAGES.resume}
        url="/experience/moves/primary-bank"
      />
      <ArticleLayout
        title="Primary Bank Deep Dive"
        subtitle="Building comprehensive banking features that transformed customer behavior and improved retention"
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
              This deep dive into how Moves became customers' primary bank is currently being written. 
              It will cover the technical implementation of:
            </p>
            <ul className="mb-8 space-y-3 list-none">
              <li className="text-foreground leading-relaxed text-lg font-light relative pl-6 before:content-['—'] before:absolute before:left-0 before:text-primary before:font-normal">Transaction enrichment and labeling systems</li>
              <li className="text-foreground leading-relaxed text-lg font-light relative pl-6 before:content-['—'] before:absolute before:left-0 before:text-primary before:font-normal">Apple and Google Pay integration</li>
              <li className="text-foreground leading-relaxed text-lg font-light relative pl-6 before:content-['—'] before:absolute before:left-0 before:text-primary before:font-normal">Bill pay and peer transfer functionality</li>
              <li className="text-foreground leading-relaxed text-lg font-light relative pl-6 before:content-['—'] before:absolute before:left-0 before:text-primary before:font-normal">Real-time gig earnings insights dashboard</li>
              <li className="text-foreground leading-relaxed text-lg font-light relative pl-6 before:content-['—'] before:absolute before:left-0 before:text-primary before:font-normal">Push-to-debit transfers via Astra</li>
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

export default ExperienceMovesPrimaryBank;