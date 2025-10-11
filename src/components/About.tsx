import { Section } from "@/components/ui/section";
import { Container } from "@/components/ui/container";

const About = () => {
  return (
    <Section variant="alternate" size="default">
      <Container size="narrow">
        <div className="text-center">
          <p className="text-lg md:text-xl leading-relaxed text-foreground/90">
            I am a Software Engineer with proven processes leveraging AI agents to
            supercharge the development of scalable full-stack applications and
            microservices.
          </p>
          <p className="text-lg md:text-xl leading-relaxed text-foreground/90">
            Experienced in domain-driven design, event-driven
            architecture, and clean code practices, and recognized for leading
            teams and mentoring developers to deliver high-quality, maintainable
            systems.
          </p>
        </div>
      </Container>
    </Section>
  );
};

export default About;
