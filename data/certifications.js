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
  }
];

if (typeof window !== "undefined") {
  window.CERTIFICATIONS_DATA = CERTIFICATIONS_DATA;
}
if (typeof module !== "undefined" && module.exports) {
  module.exports = { CERTIFICATIONS_DATA };
}
