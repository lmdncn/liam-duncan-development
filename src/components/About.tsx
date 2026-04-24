import { Section } from "@/components/ui/section";
import { Container } from "@/components/ui/container";

const About = () => {
  return (
    <Section variant="alternate" size="compact">
      <Container>
        <div className="border-l-2 border-primary/30 pl-8">
          <p className="font-display text-xl md:text-2xl leading-snug text-foreground font-semibold mb-5">
            Software engineer leveraging AI agents to build scalable full-stack
            applications and microservices — faster and more deliberately than
            before.
          </p>
          <p className="text-base leading-relaxed text-muted-foreground">
            Experienced in domain-driven design, event-driven architecture, and
            clean code practices, recognized for leading teams and mentoring
            developers to deliver high-quality, maintainable systems.
          </p>
        </div>
      </Container>
    </Section>
  );
};

export default About;
