/**
 * Projects data for Shivang Gupta
 * Strictly derived from CV
 */
export const PROJECTS_DATA = [
  {
    id: "expleo-automation",
    name: "CAN Signal Test Automation Tool",
    shortName: "Internal Automation Project",
    category: "automation",
    domain: "Automotive / Automation",
    tags: ["AUTOMATION", "PYTHON", "QA", "AUTOMOTIVE"],
    role: "Associate Software Engineer",
    period: "January 2024 – June 2024",
    company: "Expleo Technologies India Pvt Ltd",
    isFeatured: true,
    isAutomationHighlight: true,
    metrics: {
      before: "8 Hours",
      after: "1 Hour",
      reduction: "88% Time Reduction"
    },
    description: "Developed a Python-based automation tool utilizing CAN database signals and values specified in test cases to execute automotive test sequences without manual intervention.",
    responsibilities: [
      "Analyzed repetitive test execution bottlenecks in automotive validation workflows.",
      "Developed a custom automation tool in Python interfacing with CAN database signals and parameter values.",
      "Automated test data extraction, signal validation, and result reporting against test requirements.",
      "Validated tool against physical ECUs and simulated vehicle network test setups."
    ],
    impact: "Leveraging Python expertise, achieved an 88% time reduction by completing an 8-hour workload in just 1 hour.",
    tools: ["Python", "CAN Protocol", "CANoe", "Database Signals", "Automation Testing", "ECU Validation"]
  },
  {
    id: "dataeko-desk",
    name: "DATAEKO IT Service Desk & AI Copilot Platform",
    shortName: "DATAEKO IT Service Desk",
    category: "dataeko",
    domain: "Enterprise Platform / AI",
    tags: ["DEVOPS", "CLOUD", "AI", "AUTOMATION", "FULLSTACK"],
    role: "DevOps Engineer",
    period: "April 2026 – Current",
    company: "DATAEKO.AI Pvt Ltd",
    repoUrl: "https://github.com/ShivangGupta998/DATAEKO_IT_SERVICE_DESK",
    isFeatured: true,
    description: "Engineered a modern full-stack enterprise IT Service Desk application combining a Python 3.12 FastAPI backend with a React 19 & TypeScript frontend, integrated with Google Gemini AI for intelligent IT assistance, native WebSockets for real-time notification broadcasting, Slack bot event triggers, multi-stage Docker containerization, AWS CodeBuild CI/CD, and automated PaaS deployment on Render with PostgreSQL.",
    pipeline: [
      { step: "Frontend", tool: "React 19 & Tailwind v4" },
      { step: "Backend", tool: "FastAPI & Python 3.12" },
      { step: "AI Copilot", tool: "Google Gemini GenAI" },
      { step: "Alerting", tool: "Slack SDK & WebSockets" },
      { step: "CI/CD", tool: "Docker & AWS CodeBuild" },
      { step: "Cloud PaaS", tool: "Render & PostgreSQL" }
    ],
    responsibilities: [
      "Integrated Google Gemini AI (@google/genai & gemini-3.8-flash) as an intelligent Service Desk Copilot with role-aware permissions (Admin, Manager, Employee), interactive action chips, and automated troubleshooting workflows.",
      "Built bidirectional real-time push notification infrastructure using native FastAPI WebSockets (/ws/notifications/{user_id}) with connection pooling and broadcast routing.",
      "Automated ticket alerting and incident escalations through Slack Bot integration (slack_sdk) connected to dedicated IT channels.",
      "Designed background SLA monitoring scheduler and automated ticket triage engine to track resolution deadlines and prevent SLA breaches.",
      "Developed comprehensive enterprise modules: full-lifecycle ticketing with audit trails, asset inventory tracking, software/VPN access requests, employee onboarding/offboarding workflows, and SLA analytics dashboards with Recharts.",
      "Crafted multi-stage Dockerfile (node:22-alpine build + python:3.12-slim runtime) minimizing image size and optimizing production container security.",
      "Configured automated AWS CodeBuild pipeline (buildspec.yml) and codified PaaS cloud infrastructure with PostgreSQL on Render (render.yaml)."
    ],
    impact: "Production-ready full-stack enterprise IT platform with automated Slack triage, real-time WebSocket push updates, Gemini AI assistance, and containerized cloud deployment.",
    tools: ["FastAPI", "React 19", "TypeScript", "Google Gemini AI", "WebSockets", "Slack SDK", "Docker", "AWS CodeBuild", "PostgreSQL", "SQLAlchemy 2.0", "Alembic", "Tailwind CSS v4", "Render PaaS", "Recharts"]
  },
  {
    id: "garmin-infotainment",
    name: "Garmin Automotive Infotainment Testing",
    shortName: "Garmin Infotainment QA",
    category: "automotive",
    domain: "Automotive",
    tags: ["AUTOMOTIVE", "QA", "TESTING"],
    clientEcosystem: "BMW, Mini Cooper, Rolls-Royce",
    role: "Associate Software Engineer",
    period: "September 2022 – January 2024",
    company: "Expleo Technologies India Pvt Ltd",
    isFeatured: true,
    description: "End-to-end infotainment system validation, test planning, vehicle testing, and safety compliance for luxury automotive brands including BMW, Mini Cooper, and Rolls-Royce.",
    responsibilities: [
      "Performed comprehensive testing and QA including Test Planning, Requirement Extraction, Tagging, and Requirement Traceability Matrix (RTM) preparation.",
      "Executed test cases for infotainment systems conducting Vehicle Testing, Safety Testing, Noise Vibration and Harshness (NVH) Testing, and Quality Control.",
      "Performed diagnostic testing, ECU flashing, and bus communication logging using automotive protocol suites.",
      "Collaborated with international engineering teams and stakeholders to log, reproduce, and resolve defects."
    ],
    impact: "Authored 100+ comprehensive test cases, maintained RTM coverage, and validated critical safety/NVH criteria before production releases.",
    tools: ["Jira", "DOORS", "PuTTY", "Ediabas", "CANoe", "FAT Tool", "Instrument Panel Cluster (IPC)", "CAN/Ethernet", "E-SYS", "Software Flashing"]
  },
  {
    id: "banking-devops",
    name: "Banking Domain CI/CD & Orchestration",
    shortName: "Banking DevOps",
    category: "banking",
    domain: "Banking",
    tags: ["DEVOPS", "CLOUD", "BANKING"],
    role: "DevOps Engineer",
    period: "October 2024 – February 2025",
    company: "StarAgile Technologies Pvt Ltd",
    isFeatured: true,
    description: "Designed and implemented automated CI/CD pipelines and microservices orchestration on Kubernetes with centralized logging and observability for high-availability banking applications.",
    pipeline: [
      { step: "Source", tool: "Git" },
      { step: "Build & Test", tool: "Jenkins" },
      { step: "Containerize", tool: "Docker" },
      { step: "Deploy", tool: "Kubernetes" },
      { step: "Monitor", tool: "Grafana & Prometheus" }
    ],
    responsibilities: [
      "Implemented CI/CD pipeline using Jenkins and Docker to automate code deployment ensuring faster release cycles.",
      "Deployed microservices-based application on Kubernetes ensuring high availability and horizontal scalability.",
      "Set up centralized logging and monitoring system with Grafana and Prometheus tracking application health and performance."
    ],
    impact: "Accelerated release cycles, eliminated manual deployment steps, and ensured continuous health visibility across microservices.",
    tools: ["Jenkins", "Docker", "Kubernetes", "Grafana", "Prometheus", "Git", "Linux"]
  },
  {
    id: "healthcare-devops",
    name: "Healthcare Infrastructure as Code (IaC)",
    shortName: "Healthcare Cloud IaC",
    category: "healthcare",
    domain: "Healthcare",
    tags: ["DEVOPS", "CLOUD", "HEALTHCARE"],
    role: "DevOps Engineer",
    period: "October 2024 – February 2025",
    company: "StarAgile Technologies Pvt Ltd",
    isFeatured: true,
    description: "Automated AWS infrastructure provisioning using Terraform (IaC) and orchestrated containerized healthcare workloads on Kubernetes for secure, repeatable cloud deployments.",
    architecture: "Terraform → AWS Infrastructure → Docker → Kubernetes",
    pipeline: [
      { step: "Define IaC", tool: "Terraform" },
      { step: "Provision", tool: "AWS Cloud" },
      { step: "Package", tool: "Docker" },
      { step: "Orchestrate", tool: "Kubernetes" }
    ],
    responsibilities: [
      "Designed and deployed AWS-based cloud infrastructure using Terraform for Infrastructure as Code (IaC).",
      "Created modular Terraform configurations for repeatable, version-controlled cloud environments.",
      "Integrated Docker containers with Kubernetes ensuring seamless, scalable application deployment."
    ],
    impact: "Standardized cloud environment setup, eliminated configuration drift, and enabled one-command AWS infrastructure deployments.",
    tools: ["AWS", "Terraform", "Docker", "Kubernetes", "IaC", "Linux"]
  },
  {
    id: "insurance-devops",
    name: "Insurance Cloud Automation & Observability",
    shortName: "Insurance DevOps & Monitoring",
    category: "insurance",
    domain: "Insurance",
    tags: ["DEVOPS", "CLOUD", "INSURANCE"],
    role: "DevOps Engineer",
    period: "October 2024 – February 2025",
    company: "StarAgile Technologies Pvt Ltd",
    isFeatured: true,
    description: "Implemented an automated deployment pipeline combining Jenkins, Terraform, and AWS provisioning with Kubernetes container orchestration and proactive observability to slash incident resolution times.",
    architecture: "Git → Jenkins → Terraform → AWS → Docker → Kubernetes → Prometheus/Grafana",
    pipeline: [
      { step: "Commit", tool: "Git" },
      { step: "CI/CD", tool: "Jenkins" },
      { step: "IaC", tool: "Terraform" },
      { step: "Cloud", tool: "AWS" },
      { step: "Container", tool: "Docker" },
      { step: "Cluster", tool: "Kubernetes" },
      { step: "Telemetry", tool: "Prometheus & Grafana" }
    ],
    responsibilities: [
      "Built an automated deployment pipeline with Jenkins and Terraform for fast, consistent AWS provisioning.",
      "Containerized and orchestrated applications using Docker and Kubernetes for high scalability and fault tolerance.",
      "Automated infrastructure monitoring using Prometheus and Grafana, reducing incident resolution time."
    ],
    impact: "Streamlined multi-stage deployments to AWS, reduced incident resolution time via automated alerts, and ensured reliable system recovery.",
    tools: ["Jenkins", "Terraform", "AWS", "Docker", "Kubernetes", "Prometheus", "Grafana", "Git", "Linux"]
  }
];

if (typeof window !== "undefined") {
  window.PROJECTS_DATA = PROJECTS_DATA;
}
