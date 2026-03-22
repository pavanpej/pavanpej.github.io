// Career timeline data - reverse chronological
// Education and jobs interspersed by date
export const careerData = [
  {
    id: "swe2-infoblox",
    type: "job",
    subtype: "full-time",
    title: "Software Engineer 2",
    organization: "Infoblox",
    location: "Tacoma, WA",
    dateStart: "May 2025",
    dateEnd: "Present",
    isCurrent: true,
    bullets: [
      "End-to-end design, implementation, and deployment of the sequential config and software updates feature for NIOS-X Platform, used by all 15k+ NIOS-X virtual servers currently deployed in production across all NIOS-X customers.",
      "Design and development of the NIOS-X Server auto-resizing feature for NIOS-X Virtual Servers, affecting all current NIOS-X customers and a revenue increase of about 12% due to reduction of server license over-utilization.",
      'Part of the "SRE Champions" team, building more resilient and deterministic systems for customer issue profiling, disaster recovery, as well as robust reporting of service level objectives and indicators (SLIs/SLOs).',
      "Other SaaS and On-prem stuff.",
    ],
  },
  {
    id: "gra-northeastern",
    type: "job",
    subtype: "part-time",
    title: "Graduate Research Assistant (part-time)",
    organization: "Northeastern University",
    location: "Boston, MA",
    dateStart: "Jan 2024",
    dateEnd: "Apr 2025",
    isCurrent: false,
    bullets: [
      'Assisting Prof. Shawn Bhimani, working with the Supply Chain Data Hub research group, responsible for the strategizing and delivery of migration of the supply chain web app "supplytrace.org" to the cloud (potentially used by up to ~60% of the forced labour task forces across the world).',
      "Owner of the cloud infrastructure for Supply Trace as well as responsible for maintenance of the Supply Trace backend.",
      "Tech stack - Docker, Django (Python), React, Postgres, Linux, Azure.",
    ],
  },
  {
    id: "ms-northeastern",
    type: "education",
    title: "Master of Science (MS), Computer Science",
    organization:
      "Khoury College of Computer Sciences, Northeastern University",
    location: "Boston, MA, USA",
    dateStart: "Sep 2023",
    dateEnd: "May 2025",
    isCurrent: false,
    bullets: [],
    details:
      "GPA - 4.0/4.0. Coursework - Programming Design Paradigm, Database Management Systems, Algorithms, Distributed Systems, Cloud Computing, Networking.",
  },
  {
    id: "intern-infoblox",
    type: "job",
    subtype: "internship",
    title: "Software Engineering Intern",
    organization: "Infoblox",
    location: "Tacoma, WA",
    dateStart: "May 2024",
    dateEnd: "Dec 2024",
    isCurrent: false,
    bullets: [
      "Responsible for designing and building health monitoring infrastructure for the control and network data planes on the Infoblox NIOS-X (SaaS) product as part of the BloxOne Platform team.",
      "Tech stack - Go, Kubernetes, Docker, Prometheus, and Grafana.",
    ],
  },
  {
    id: "swe1-infoblox",
    type: "job",
    subtype: "full-time",
    title: "Software Engineer 1",
    organization: "Infoblox",
    location: "Bengaluru, India",
    dateStart: "Nov 2021",
    dateEnd: "Jul 2023",
    isCurrent: false,
    bullets: [
      "Led back-end development for the new Locations feature, based on address geocoding, associating with BloxOne infrastructure, and helping customers visualize their infra deployments. Projected use by ~70% of Infoblox customers.",
      "Designed (HLD/LLD) and implemented the Data Import/Export for Infrastructure feature from scratch, based on the Kubernetes Storage API layer patterns. Used by ~50% of the BloxOne customers to migrate their infrastructure to Infoblox.",
      "Major contributor (~50% of back-end) for the Templates feature that helps customers reduce their BloxOne network services infrastructure deployment times by up to 80%.",
      "Contributor to the migration of the Host Infrastructure management feature, successfully enabled high availability (HA) for Hosts in the BloxOne Cloud platform, improving ease of network management for users.",
      "Developed an error caching and tolerance library for On-Prem platform services to reconnect to the BloxOne cloud platform during disconnections. Eliminated 100% of unwanted notifications to customers due to cloud service restarts and Ingress config reloads and significantly saving storage costs for notifications in the cloud.",
    ],
  },
  {
    id: "backend-ibm",
    type: "job",
    subtype: "full-time",
    title: "Backend Engineer (Cloud Storage)",
    organization: "IBM Cloud",
    location: "Bengaluru, India",
    dateStart: "Mar 2020",
    dateEnd: "Nov 2021",
    isCurrent: false,
    bullets: [
      "Owned 5 zonal Kubernetes control plane services (controllers) for the VPC File and Block Storage feature.",
      "Led a team of 4 to determine and resolve security vulnerabilities found in SOC2 compliance code audits. Personally handled ~40% of the issues in the IBM Cloud Storage zonal Kubernetes control plane services.",
      "Mentored and helped scale the TCS team at IBM from around 13 developers to a 100+ strong team.",
      "Developed a concurrent stress testing script in Go to detect File storage object leaks in the cluster, resulting in the detection of 10+ critical bugs within a week of deployment.",
      "Contributed to the developer reference and onboarding documentation, helping ~90% of new hires.",
      "Created tooling (shell scripts) for setup of developer environments improving setup times by ~25% for all developers.",
    ],
    note: "via Tata Consultancy Services",
  },
  {
    id: "fullstack-exelon",
    type: "job",
    subtype: "full-time",
    title: "Full Stack Developer",
    organization: "Exelon",
    location: "Bengaluru, India",
    dateStart: "Jul 2019",
    dateEnd: "Mar 2020",
    isCurrent: false,
    bullets: [
      "Owned end-to-end development of 10 user flows using Angular and Spring for an electricity outage monitoring system.",
      "Created the initial front-end UI codebase for the complete product including reusable Angular components and containers, routing, authentication, as well as various global helpers.",
      "Contributed to the optimization of existing flows by migrating from JSP to Angular, reducing load time by ~40%.",
      "Created 15+ secure REST API endpoints for existing application logic using Spring along with Swagger API documentation.",
    ],
    note: "via Tata Consultancy Services",
  },
  {
    id: "be-sjb",
    type: "education",
    title: "Bachelor of Engineering (BE), Computer Science and Engineering",
    organization: "SJB Institute of Technology (VTU)",
    location: "Bengaluru, India",
    dateStart: "Jul 2015",
    dateEnd: "Aug 2019",
    isCurrent: false,
    bullets: [],
    details:
      "CGPA - 8.26/10. Coursework - Algorithms, Data Structures, Networks, Operating Systems, Databases, Compilers, Computer Architecture.",
  },
]

// Skills - grouped by category
export const skillsData = [
  {
    category: "Languages",
    items: ["Go (Golang)", "Java", "JavaScript", "Python", "Shell (Bash)"],
  },
  {
    category: "Cloud and Databases",
    items: [
      "Kubernetes",
      "Docker",
      "PostgreSQL (Postgres)",
      "MySQL",
      "MongoDB",
    ],
  },
  {
    category: "Web",
    items: [
      "HTML",
      "CSS",
      "Tailwind CSS",
      "Figma",
      "React",
    ],
  },
  {
    category: "Technologies",
    items: ["gRPC", "Protocol Buffers (protobuf)", "Kafka", "Grafana", "Git"],
  },
]

// Certifications - separate from timeline
export const certificationsData = [
  {
    id: "ckad",
    title: "Certified Kubernetes Application Developer (CKAD)",
    organization: "The Linux Foundation / CNCF",
    dateStart: "Jan 2024",
    dateEnd: "Jan 2027",
    credentialId: "LF-lg71fpkqqb",
  },
]
