import SEO from "@/components/SEO";
import { OG_IMAGES } from "@/lib/constants";
import { ArticleLayout } from "@/components/ui/article-layout";

const ExperienceMovesOnboarding = () => {
  return (
    <>
      <SEO
        title="The Onboarding Gauntlet: Making Finance Work for Gig Workers - Liam Duncan"
        description="Overcoming identity verification, compliance hurdles, and system integration challenges to reduce signup time from weeks to same-day."
        image={OG_IMAGES.resume}
        url="/experience/moves/onboarding"
      />
      <ArticleLayout
        title="The Onboarding Gauntlet: Making Finance Work for Gig Workers"
        subtitle="Overcoming identity verification, compliance hurdles, and system integration challenges"
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
              This deep dive into Moves' onboarding transformation is currently being written. 
              It will cover the technical details of how we:
            </p>
            <ul className="mb-8 space-y-3 list-none">
              <li className="text-foreground leading-relaxed text-lg font-light relative pl-6 before:content-['—'] before:absolute before:left-0 before:text-primary before:font-normal">Implemented automated KYC with Unit</li>
              <li className="text-foreground leading-relaxed text-lg font-light relative pl-6 before:content-['—'] before:absolute before:left-0 before:text-primary before:font-normal">Built progress tracking systems</li>
              <li className="text-foreground leading-relaxed text-lg font-light relative pl-6 before:content-['—'] before:absolute before:left-0 before:text-primary before:font-normal">Created instant account creation with virtual cards</li>
              <li className="text-foreground leading-relaxed text-lg font-light relative pl-6 before:content-['—'] before:absolute before:left-0 before:text-primary before:font-normal">Integrated gig account linking through Argyle</li>
              <li className="text-foreground leading-relaxed text-lg font-light relative pl-6 before:content-['—'] before:absolute before:left-0 before:text-primary before:font-normal">Automated gig deposit redirection</li>
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

export default ExperienceMovesOnboarding;