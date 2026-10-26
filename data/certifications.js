/**
 * Professional Certifications & Standards for Shivang Gupta
 * Sourced directly from CV
 */

const CERTIFICATIONS_DATA = [
  {
    id: "aws-devops",
    name: "DevOps Engineer AWS",
    issuer: "Amazon Web Services",
    category: "Cloud & DevOps",
    filterCategory: "cloud",
    badgeIcon: "☁️",
    skills: ["AWS", "EC2", "S3", "VPC", "IAM", "Cloud Architecture"],
    description: "Cloud architecture, continuous delivery pipelines, automated infrastructure provisioning, and secure deployments on AWS."
  },
  {
    id: "itil-4",
    name: "ITIL-4 Foundation Certification",
    issuer: "IT Service Management Best Practices",
    category: "Service Management",
    filterCategory: "governance",
    badgeIcon: "📋",
    skills: ["ITIL 4", "Service Value System", "Incident Management", "Change Control", "Governance"],
    description: "ITIL 4 guiding principles, service value system (SVS), continual improvement, and modern IT service delivery governance."
  },
  {
    id: "istqb",
    name: "ISTQB Foundation Level Certification",
    issuer: "Software Testing Standards",
    category: "Testing & QA",
    filterCategory: "testing",
    badgeIcon: "🔍",
    skills: ["Manual Testing", "Test Design", "STLC", "Defect Management", "Regression Testing"],
    description: "Internationally standardized software testing fundamentals, test design techniques, defect management, and static/dynamic testing."
  },
  {
    id: "devops-fundamentals",
    name: "DevOps Fundamentals",
    issuer: "DevOps Principles and Practices",
    category: "DevOps",
    filterCategory: "cloud",
    badgeIcon: "⚙️",
    skills: ["CI/CD", "DevOps Culture", "Automation", "Continuous Testing", "Deployment"],
    description: "Core DevOps cultural principles, continuous collaboration, automated release engineering, and continuous feedback loops."
  },
  {
    id: "ibm-docker",
    name: "Docker Essentials: A Developer Introduction",
    issuer: "IBM",
    category: "Containers",
    filterCategory: "containers",
    badgeIcon: "🐳",
    skills: ["Docker", "Containers", "Dockerfile", "Image Optimization", "Networking"],
    description: "Container fundamentals, Dockerfile authoring, multi-stage image builds, container networking, and volume persistence."
  },
  {
    id: "ibm-k8s",
    name: "Scalable Web Applications on Kubernetes",
    issuer: "IBM",
    category: "Orchestration",
    filterCategory: "containers",
    badgeIcon: "☸️",
    skills: ["Kubernetes", "Pod Scaling", "Deployments", "Services", "High Availability"],
    description: "Deploying, scaling, and managing containerized applications on Kubernetes clusters with high availability and load balancing."
  },
  {
    id: "staragile-devops",
    name: "StarAgile DevOps Internship Completion Certificate",
    issuer: "StarAgile Technologies",
    category: "DevOps",
    filterCategory: "cloud",
    badgeIcon: "🚀",
    skills: ["Jenkins", "Terraform", "Ansible", "Kubernetes", "Prometheus", "AWS"],
    description: "Hands-on engineering mastery across Jenkins, Docker, Kubernetes, Terraform, Ansible, AWS, and Prometheus/Grafana."
  },
  {
    id: "iso-26262",
    name: "Functional Safety ISO 26262",
    issuer: "Automotive Safety Standards",
    category: "Automotive & Safety",
    filterCategory: "testing",
    badgeIcon: "🚗",
    skills: ["ISO 26262", "ASIL Levels", "Hazard Analysis (HARA)", "Safety Validation", "Automotive QA"],
    description: "Automotive safety lifecycle, Automotive Safety Integrity Levels (ASIL), hazard analysis and risk assessment (HARA), and verification standards."
  },
  {
    id: "python-cert",
    name: "Python Programming Certification",
    issuer: "Software Engineering",
    category: "Programming",
    filterCategory: "testing",
    badgeIcon: "🐍",
    skills: ["Python", "Scripting", "Test Automation", "CAN Signal Parsing", "Automation Tooling"],
    description: "Core Python programming, data structures, scripting, file parsing, and test automation tool development."
  },
  {
    id: "csi-cert",
    name: "Computer Society India",
    issuer: "Computer Society of India",
    category: "Leadership & Community",
    filterCategory: "governance",
    badgeIcon: "🤝",
    skills: ["Executive Management", "Leadership", "Technical Workshops", "Student Governance"],
    description: "Recognized for technical leadership, community service, and organizing academic engineering workshops and student initiatives."
  },
  {
    id: "uiux-cert",
    name: "UI/UX Designer Certification",
    issuer: "Design & User Experience",
    category: "Design",
    filterCategory: "governance",
    badgeIcon: "🎨",
    skills: ["User Centered Design", "Wireframing", "Prototyping", "Design Systems", "Accessibility"],
    description: "User-centered design principles, wireframing, interface prototyping, accessibility standards, and intuitive workflow architecture."
  },
  {
    id: "infosec-cert",
    name: "Information Security Certification",
    issuer: "Cybersecurity & InfoSec",
    category: "Security",
    filterCategory: "governance",
    badgeIcon: "🛡️",
    skills: ["InfoSec", "Vulnerability Management", "Access Control", "Data Security", "Risk Mitigation"],
    description: "Information security governance, vulnerability management, secure software practices, data protection, and risk mitigation."
  },
  {
    id: "innovation-jam",
    name: "Innovation Jam Series 9",
    issuer: "Engineering Innovation",
    category: "Innovation",
    filterCategory: "governance",
    badgeIcon: "💡",
    skills: ["Innovation", "Rapid Prototyping", "Collaborative Problem Solving", "Agile Ideation"],
    description: "Honored for collaborative problem solving, rapid engineering ideation, and delivering innovative technology solutions under pressure."
  },
  {
    id: "ibm-verify-sales",
    name: "Verify Sales Foundation",
    issuer: "IBM",
    category: "Security & Identity",
    filterCategory: "governance",
    badgeIcon: "🔐",
    skills: ["IBM Verify", "Identity & Access Management", "IAM", "Cloud Security", "SaaS Security", "Trusted Advisor"],
    description: "IBM verified certification covering identity and access security market dynamics, cloud IAM architecture, single sign-on (SSO), multi-factor authentication (MFA), and zero-trust security advisory.",
    credentialUrl: "https://www.credly.com/badges/9d544585-bee2-43a2-b8f4-925aa75b5ea8",
    pdfUrl: "assets/credentials/ibm-verify-sales-foundation-certificate.pdf"
  },
  {
    id: "ibm-guardium-security",
    name: "Guardium Data Security Center Sales Foundation",
    issuer: "IBM",
    category: "Data Security & Compliance",
    filterCategory: "governance",
    badgeIcon: "🛡️",
    skills: ["IBM Guardium", "Data Security", "Compliance & Auditing", "Data Protection", "DSPM", "Risk Mitigation"],
    description: "IBM verified certification in enterprise data security posture management (DSPM), compliance auditing, centralized hybrid-cloud data protection, and risk governance with IBM Guardium.",
    credentialUrl: "https://www.credly.com/badges/58d40841-8b81-41b2-a74a-5e80e7c7ff31",
    pdfUrl: "assets/credentials/ibm-guardium-sales-foundation-certificate.pdf"
  },
  {
    id: "ibm-terraform-practitioner",
    name: "Terraform Practitioner Advanced",
    issuer: "IBM",
    category: "Cloud & Infrastructure as Code",
    filterCategory: "cloud",
    badgeIcon: "🏗️",
    skills: ["Terraform", "Infrastructure as Code", "Multi-Cloud", "Terraform CLI", "Terraform State", "Cloud Automation"],
    description: "Advanced engineering competency in HashiCorp Terraform deployment, multi-cloud infrastructure provisioning, state management, and enterprise architecture.",
    credentialUrl: "https://www.credly.com/badges/0961b0c3-cf85-494f-8187-0c5f4ec34ae3",
    localImage: "assets/credentials/ibm-terraform-practitioner-advanced-badge.png"
  },
  {
    id: "ibm-vault-practitioner",
    name: "Vault Practitioner Advanced",
    issuer: "IBM",
    category: "Cloud Security & Secrets Management",
    filterCategory: "governance",
    badgeIcon: "🔒",
    skills: ["HashiCorp Vault", "Secrets Management", "Encryption as a Service", "Security Automation", "Access Control"],
    description: "Advanced practitioner mastery in enterprise HashiCorp Vault architecture, automated secret leasing, dynamic credentials, and encryption-as-a-service.",
    credentialUrl: "https://www.credly.com/badges/27a65e03-e4e1-4b42-992a-9934747dbca1",
    localImage: "assets/credentials/ibm-vault-practitioner-advanced-badge.png"
  },
  {
    id: "ibm-verify-practitioner",
    name: "Verify Practitioner Advanced",
    issuer: "IBM",
    category: "Identity & Access Management",
    filterCategory: "governance",
    badgeIcon: "🔑",
    skills: ["IBM Verify", "IAM", "SSO", "MFA", "Application Modernization", "Zero Trust"],
    description: "Advanced technical deployment and architecture of enterprise identity and access management (IAM), adaptive authentication, SSO, and secure workload migration.",
    credentialUrl: "https://www.credly.com/badges/37832f4f-183d-4e36-a122-cf7f9b57a221",
    localImage: "assets/credentials/ibm-verify-practitioner-advanced-badge.png"
  },
  {
    id: "ibm-api-connect",
    name: "API Connect Sales Foundation",
    issuer: "IBM",
    category: "API & Cloud Integration",
    filterCategory: "cloud",
    badgeIcon: "🔌",
    skills: ["API Connect", "API Lifecycle Management", "Hybrid Cloud Integration", "Cloud Pak for Integration"],
    description: "Comprehensive certification in full lifecycle API management, secure gateway architecture, application integration, and hybrid-cloud connectivity.",
    credentialUrl: "https://www.credly.com/badges/d19c70c3-3123-4fe9-ac01-9fe66c631135",
    localImage: "assets/credentials/ibm-api-connect-sales-foundation-badge.png"
  },
  {
    id: "clickhouse-db-pro",
    name: "ClickHouse Database Professional",
    issuer: "ClickHouse",
    category: "Database & Analytics",
    filterCategory: "cloud",
    badgeIcon: "⚡",
    skills: ["ClickHouse", "ClickHouse DBMS", "Real-Time Analytics", "Columnar Database", "Query Optimization"],
    description: "Verified professional certification in high-performance columnar data storage, real-time SQL analytical queries, table engine optimization, and distributed scaling.",
    credentialUrl: "https://www.credly.com/badges/a48abb44-fc46-466c-9a65-4882b17ebdd8"
  },
  {
    id: "clickhouse-dw-pro",
    name: "ClickHouse Data Warehousing Professional",
    issuer: "ClickHouse",
    category: "Data Warehousing & Architecture",
    filterCategory: "cloud",
    badgeIcon: "🏢",
    skills: ["ClickHouse DWH", "Batch & Continuous Ingestion", "Medallion Architecture", "Data Governance", "RBAC", "Data Quality"],
    description: "Advanced mastery in ingesting, structuring, and managing enterprise data warehouses with ClickHouse, continuous ingestion pipelines, data quality assurance, and RBAC governance.",
    credentialUrl: "https://www.credly.com/badges/5f373364-39df-493d-9119-e0d0e2ac1b45"
  },
  {
    id: "clickhouse-dw-assoc",
    name: "ClickHouse Data Warehousing Associate",
    issuer: "ClickHouse",
    category: "Data Warehousing & Querying",
    filterCategory: "cloud",
    badgeIcon: "📦",
    skills: ["ClickHouse Cloud", "ClickHouse DWH", "Primary Keys & Indexing", "Granules & Parts", "Ad-hoc Analytics"],
    description: "Foundational mastery in ClickHouse architecture, primary keys, granules, parts, external data source querying, and ad-hoc analytical workloads.",
    credentialUrl: "https://www.credly.com/badges/7fad4ef9-e881-4c96-8d28-47b38f341773"
  },
  {
    id: "clickhouse-observability-pro",
    name: "ClickHouse Observability Professional",
    issuer: "ClickHouse",
    category: "Observability & Monitoring",
    filterCategory: "cloud",
    badgeIcon: "📊",
    skills: ["Observability", "ClickHouse DBMS", "OpenTelemetry", "Log Analytics", "Metrics & Traces", "Materialized Views"],
    description: "Advanced observability engineering utilizing ClickHouse and OpenTelemetry for hyper-scale log ingestion, distributed tracing, metric aggregation, and alerting.",
    credentialUrl: "https://www.credly.com/badges/2afacd95-bcf6-48e5-be3a-1f0befe0288b"
  },
  {
    id: "clickhouse-obs-assoc",
    name: "ClickHouse Observability Associate",
    issuer: "ClickHouse",
    category: "Observability & OpenTelemetry",
    filterCategory: "cloud",
    badgeIcon: "🔍",
    skills: ["Observability", "ClickHouse", "OpenTelemetry", "HyperDX", "Log Ingestion", "SQL & Lucene Querying"],
    description: "Foundational understanding of observability architecture, ingesting logs, metrics, and application traces using ClickHouse, OpenTelemetry, and HyperDX.",
    credentialUrl: "https://www.credly.com/badges/97008efb-a0cd-4142-80fc-52eae1247773"
  },
  {
    id: "ibm-concert-sales",
    name: "Concert Sales Foundation",
    issuer: "IBM",
    category: "AI-Driven Application Management",
    filterCategory: "cloud",
    badgeIcon: "🤖",
    skills: ["IBM Concert", "AI-Driven Operations", "Application Management", "Cloud Architecture", "Trusted Advisor"],
    description: "Certified foundation in IBM Concert for AI-driven application management, full-lifecycle visibility, operational risk mitigation, and automated cloud advisory.",
    credentialUrl: "https://www.credly.com/badges/e22b7726-2976-445b-8b77-18b161bc20a8"
  },
  {
    id: "ibm-instana-intermediate",
    name: "Instana Intermediate",
    issuer: "IBM",
    category: "AIOps & Observability",
    filterCategory: "cloud",
    badgeIcon: "📈",
    skills: ["IBM Instana", "APM", "Observability", "AIOps", "Microservices Monitoring", "Full-Stack Tracing"],
    description: "Hands-on technical implementation of IBM Instana for automated full-stack application performance monitoring (APM), microservices discovery, and incident resolution.",
    credentialUrl: "https://www.credly.com/badges/63141d46-594b-4a03-ac8b-75ee17790408"
  },
  {
    id: "ibm-instana-sales",
    name: "Instana Sales Foundation",
    issuer: "IBM",
    category: "AIOps & APM Foundation",
    filterCategory: "cloud",
    badgeIcon: "🎯",
    skills: ["IBM Instana", "APM", "Observability", "Microservices", "Cloud Monitoring", "Enterprise Architecture"],
    description: "Foundational expertise in enterprise Application Performance Monitoring (APM), microservices observability, automated dependency mapping, and business impact analytics with IBM Instana.",
    credentialUrl: "https://www.credly.com/badges/6d50126a-657c-4a3f-8af0-79f0951e8c76"
  },
  {
    id: "clickhouse-db-assoc",
    name: "ClickHouse Database Associate",
    issuer: "ClickHouse",
    category: "Database & Cloud Pipelines",
    filterCategory: "cloud",
    badgeIcon: "💾",
    skills: ["ClickHouse", "ClickHouse Cloud", "ClickPipes", "Data Ingestion", "Real-time SQL Queries"],
    description: "Foundational competency in ClickHouse DBMS architecture, table functions, automated ingestion via ClickPipes, and real-time analytical SQL query execution.",
    credentialUrl: "https://www.credly.com/badges/592feed4-8fa6-4bac-ac8e-eaa59b56dc62"
  },
  {
    id: "clickhouse-partner-sales",
    name: "ClickHouse Partner Sales Professional",
    issuer: "ClickHouse",
    category: "Database Solutions & Strategy",
    filterCategory: "governance",
    badgeIcon: "🤝",
    skills: ["ClickHouse Cloud", "Real-Time Analytics Architecture", "Use Cases Evaluation", "Enterprise Advisory"],
    description: "Professional accreditation in evaluating real-time analytics architectures, ClickHouse positioning, solution differentiators, and enterprise cloud advisory.",
    credentialUrl: "https://www.credly.com/badges/c7aa072e-c78b-48a0-9277-73effbef4da4"
  }
];

if (typeof window !== "undefined") {
  window.CERTIFICATIONS_DATA = CERTIFICATIONS_DATA;
}
if (typeof module !== "undefined" && module.exports) {
  module.exports = { CERTIFICATIONS_DATA };
}

