/**
 * Work experience data for Shivang Gupta
 * Strictly derived from CV
 */
export const EXPERIENCE_DATA = [
  {
    id: "dataeko",
    company: "DATAEKO.AI Pvt Ltd",
    role: "DevOps Engineer",
    period: "April 2026 – Current",
    location: "Hyderabad, Telangana",
    type: "Full-time",
    summary: "Working on real-world consulting and engineering solutions focused on Data, Analytics, and AI-driven systems. Contributing to data projects, application development, and platform engineering initiatives while collaborating with industry-leading enterprise platforms.",
    highlights: [
      "Architected and implemented DATAEKO IT Service Desk featuring FastAPI, React 19, Google Gemini AI copilot, and WebSockets.",
      "Automated CI/CD pipelines with AWS CodeBuild, multi-stage Docker containerization, and Render PaaS deployment with PostgreSQL.",
      "Integrated Slack bot automation for instant incident dispatching and built background SLA monitoring schedulers.",
      "Collaborating across enterprise platforms including JFrog Artifactory, IBM watsonx, and ClickHouse for cloud data workloads."
    ],
    workingOn: {
      title: "What I'm working on",
      description: "Developing full-stack enterprise automation systems including the DATAEKO IT Service Desk with Google Gemini AI copilot, architecting cloud-native delivery pipelines for AI workloads, integrating JFrog Artifactory for binary management, and orchestrating multi-stage Docker deployments with PostgreSQL."
    },
    technologies: ["FastAPI", "React 19", "Gemini AI", "Docker", "AWS CodeBuild", "WebSockets", "Slack SDK", "PostgreSQL", "JFrog", "ClickHouse", "CI/CD"]
  },
  {
    id: "staragile",
    company: "StarAgile Technologies Pvt Ltd",
    role: "DevOps Intern",
    period: "October 2024 – February 2025",
    location: "Bengaluru, Karnataka",
    type: "Internship",
    summary: "Built and optimized CI/CD pipelines, automated cloud infrastructure provisioning on AWS, and managed resilient Kubernetes clusters with centralized observability.",
    highlights: [
      "Built and optimized CI/CD pipelines using Jenkins, Docker, and Kubernetes, boosting deployment efficiency and reducing downtime.",
      "Automated AWS infrastructure with Terraform and Ansible, improving scalability and cutting manual work by 80%.",
      "Managed Kubernetes clusters with auto-scaling and monitoring using Prometheus and Grafana, enhancing system reliability and observability.",
      "Supported cloud migration across major domains and improved Dev-Ops collaboration for faster, smoother delivery."
    ],
    impact: "80% reduction in manual infrastructure provisioning work",
    technologies: ["AWS", "Terraform", "Ansible", "Jenkins", "Docker", "Kubernetes", "Prometheus", "Grafana", "CI/CD", "Linux"]
  },
  {
    id: "expleo",
    company: "Expleo Technologies India Pvt Ltd",
    role: "Associate Software Engineer",
    period: "September 2022 – June 2024",
    location: "Bengaluru, Karnataka",
    type: "Full-time",
    summary: "Led infotainment testing and quality assurance for premium international automotive clients including BMW and Mini Cooper, developed custom test automation tools, and mentored engineering team members.",
    highlights: [
      "Reviewed software requirements and created 100+ detailed test cases aligned with business goals ensuring comprehensive functionality coverage for automotive infotainment systems.",
      "Performed manual and exploratory testing on infotainment systems for BMW and Mini Cooper conducting Vehicle Testing, NVH Testing, and Safety Validation.",
      "Led defect management and regression testing efforts during release cycles, logging and tracking defects in Jira and reducing bug resolution time by 35%.",
      "Provided technical guidance and mentorship to 5+ team members on testing methodologies, automotive protocols, and best practices, improving team productivity by 30%.",
      "Communicated effectively with international automotive clients (BMW, Mini Cooper) providing regular updates, addressing technical concerns, and maintaining strong stakeholder relationships.",
      "Conducted training and onboarding for 10+ new team members on project processes, testing frameworks, tools, and automotive domain standards."
    ],
    impact: "100+ test cases created, 35% reduction in bug resolution time, 5+ team members mentored, 10+ trained",
    technologies: ["CANoe", "Ediabas", "E-SYS", "FAT Tool", "CAN Protocol", "UDS Protocol", "DOORS", "Jira", "PuTTY", "Python", "Software Flashing", "NVH Testing"]
  }
];

if (typeof window !== "undefined") {
  (window as any).EXPERIENCE_DATA = EXPERIENCE_DATA;
}
