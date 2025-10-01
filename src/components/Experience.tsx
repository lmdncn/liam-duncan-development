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
      "Modernized a $100M+ payments API, migrating from Django DRF to Pydantic services and implementing Template Method, Strategy, and Policy design patterns to decouple domain logic and enable faster delivery of new payout workflows.",
      "Built an automated Snowflake pipeline with Claude AI integration to enrich transactions with Canadian business classification and scoring, delivering enhanced spending insights through client updates and a Retool admin interface.",
      "Improved customer satisfaction by cutting payments endpoint response times by over 50%, optimizing queries and backend logic to handle high-volume data retrieval smoothly.",
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
      "Led Moves' banking vertical team and owned the app and system that supports banking functionality.",
      "Architected and developed dozens of microservices that processed millions of dollars of members' funds leveraging distributed event streaming and Unit banking as a service.",
      "Successfully constructed cash advance products, increasing their gross margin by over 200 points.",
      "Assembled a cohesive and productive engineering team - received 4.8/5 on manager feedback reports.",
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
      "Swiftly promoted to senior by displaying knowledge, productivity and leadership.",
      "Led in the architecture and construction of a collection of applications as part of a multi-million dollar custom e-commerce solution.",
      "Worked on a set of big data microservices in the financial sector, processing millions of transactions, implementing graph theory and machine learning to determine validity and detect fraud.",
      "Consulted on the improvement of a progressive hybrid web app for the sales department of a financial client.",
      "Created and maintained CI/CD pipelines and highly scalable containerized deployment environments across multiple projects.",
      "Conducted interviews as part of the company's hiring team and mentored developers through weekly meetings, review sessions, and pair programming.",
      "Researched emerging technologies, documenting findings in a shared knowledge repository.",
      "Prepared and presented educational Power Hours to the company's development team.",
      "Collaborated with clients, developers, designers, consultants, PMs, and QAs.",
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
      "Worked with a team developing and maintaining a suite of LMS, CRM, and CMS applications used in the training of over 100k professionals.",
      "Built a videotelephony web application to host online classrooms, replacing Zoom.",
      "Developed the marketing website improving reach, lead conversion rate, and data collection.",
      "Constructed analytical tools mining data that are now part of the sales team's daily practices.",
      "Introduced new features implementing API integrations.",
      "Employed DevOps practices and Agile methodologies alongside the usage of Gitlab, Jira, Confluence, Zeplin, Figma, AWS, and Raygun to efficiently produce product value in biweekly releases.",
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
