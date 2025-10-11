import { Section } from "@/components/ui/section";
import { SectionHeader } from "@/components/ui/section-header";
import { Container } from "@/components/ui/container";
import { Timeline } from "@/components/ui/timeline";

const experiences = [
  {
    company: "Float",
    position: "Software Developer",
    duration: "Feb 2025 – Jul 2025",
    location: "Remote (Canada)",
    description: [
      "Modernized a $100M+ payments API, enabling faster rollout of payout workflows, by migrating from Django DRF to Pydantic and applying Template Method, Strategy, and Policy patterns to decouple domain logic and improve extensibility.",
      "Built an automated data pipeline with Claude AI integration to enrich transactions with Canadian business classification and scoring, delivering enhanced spending insights through client updates and a Retool admin interface.",
      "Cut endpoint response times 50%, improving customer satisfaction, by optimizing queries and backend logic for high-volume retrieval.",
    ],
    skills: [
      "Python",
      "Django",
      "React",
      "TypeScript",
      "Snowflake",
      "Anthropic API",
    ],
  },
  {
    company: "Career Break",
    position: "",
    duration: "2024",
    location: "Global",
    description: [
      "I took a year-long career break to achieve a long-planned goal, travelling around the world. During this time, I visited four continents and over 15 countries. This experience provided valuable global insights and renewed energy.",
    ],
    skills: [],
  },
  {
    company: "Moves",
    position: "Engineering Technical Lead & Manager",
    duration: "Jul 2021 – Jan 2024",
    location: "Remote (Canada)",
    prevPosition: "Senior Software Developer (Jul 2021 – Nov 2021)",
    description: [
      "Led the banking vertical team, coding and shipping core features while managing engineers and product delivery.",
      "Developed distributed event-streaming microservices, processing millions in member funds reliably, integrating with Unit BaaS.",
      "Built proprietary adjudication and repayment services, improving cash advance margins by 200+ points.",
      "Mentored and grew a high-performing team, earning 4.8/5 manager feedback.",
    ],
    skills: [
      "React Native",
      "Node.js",
      "Express.js",
      "Redis",
      "MongoDB",
      "Redis Streams",
      "Event Driven Architecture",
    ],
    link: "/experience/moves",
  },
  {
    company: "Konrad",
    position: "Senior Software Developer",
    duration: "May 2017 – Jul 2021",
    location: "Toronto, Canada",
    prevPosition: [
      "Software Developer (Jul 2018 – Oct 2020)",
      "Software Developer Intern (May 2017 – Sep 2017)",
    ],
    description: [
      "Promoted to Senior ahead of schedule for technical leadership and delivery on key client projects.",
      "Delivered a large scale e-commerce platform, by leading the architecture and development of multiple full-stack applications.",
      "Reduced fraud risk on millions of financial transactions by developing big data microservices with graph theory and machine learning models.",
      "Improved sales team productivity for a financial client, by enhancing a hybrid web app and advising on development practices.",
      "Accelerated deployments across multiple projects, by building CI/CD pipelines and scalable Kubernetes container environments.",
      "Drove developer learning culture, by creating and delivering Power Hours on new technologies.",
      "Strengthened team capability by mentoring junior developers and conducting candidate interviews during the hiring process.",
    ],
    skills: [
      "React",
      "Apollo",
      "NestJs",
      "GraphQL",
      "PostgreSQL",
      "Jest",
      "Puppeteer",
      "Node.js",
      "Express",
      "FlywayDB",
      "Mocha",
      "Chai",
      "Webpack",
      "Cordova",
      "GitLab CI/CD",
      "Kubernetes",
      "Openshift",
      "Docker",
    ],
  },
  {
    company: "BrainStation",
    position: "Software Developer",
    duration: "Sep 2018 – Oct 2019",
    location: "Toronto, Canada",
    description: [
      "Delivered and maintained LMS, CRM, and CMS platforms serving 100k+ professionals.",
      "Built a custom videotelephony platform for hosting online classrooms.",
      "Enhanced marketing and sales effectiveness by developing websites, analytics tools, and API integrations.",
      "Applied DevOps and Agile practices, shipping biweekly releases.",
    ],
    skills: [
      "React",
      "Redux",
      "C#",
      ".NET",
      "SQL",
      "Amazon Chime SDK",
      "SendGrid",
      "Salesforce",
      "Intercom",
      "Google APIs",
      "AWS",
    ],
  },
];

const Experience = () => {
  return (
    <Section id="experience">
      <Container>
        <SectionHeader
          title="Professional Experience"
          subtitle="A journey through innovative companies, leading teams, and building scalable solutions"
        />
        <Timeline items={experiences} />
      </Container>
    </Section>
  );
};

export default Experience;
