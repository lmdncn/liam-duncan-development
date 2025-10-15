import { Section } from "@/components/ui/section";
import { SectionHeader } from "@/components/ui/section-header";
import { Container } from "@/components/ui/container";
import { Timeline } from "@/components/ui/timeline";
import { LoadingState } from "@/components/ui/loading-state";
import { ErrorState } from "@/components/ui/error-state";
import { useExperiences } from "@/hooks/useExperiences";

const Experience = () => {
  const { data: experiences, isLoading, error, refetch } = useExperiences();

  return (
    <Section id="experience">
      <Container>
        <SectionHeader
          title="Professional Experience"
          subtitle="A journey through innovative companies, leading teams, and building scalable solutions"
        />

        {isLoading && <LoadingState message="Loading experience..." />}

        {error && (
          <ErrorState
            message="Failed to load experience data"
            onRetry={() => refetch()}
          />
        )}

        {experiences && <Timeline items={experiences} />}
      </Container>
    </Section>
  );
};

export default Experience;
