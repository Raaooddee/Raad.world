export interface ExperienceEntry {
  title: string;
  org: string;
  location: string;
  period: string;
  bullets: string[];
  logo?: string;
}

export interface EducationEntry {
  degree: string;
  school: string;
  detail?: string;
  location?: string;
  period: string;
  highlights?: string[];
  activities?: string[];
  logo?: string;
}

export const experience: ExperienceEntry[] = [
  {
    title: "Artificial Intelligence Engineer Intern",
    org: "PwC Middle East, Digital & Cyber",
    location: "Amman, Jordan",
    period: "May 2026 – July 2026",
    logo: "/logos/pwc.png",
    bullets: [
      "Shipped backend services for an AI-driven investor-services platform for Qatar's Ministry of Commerce and Industry (MoCI), owning 10+ FastAPI endpoints and 20+ Pydantic data models end to end.",
      "Containerized services with Docker and built a 50+ request REST API test suite in Bruno, replacing manual endpoint checks and catching schema regressions pre-release.",
      "Developed 3 PyTorch model and data pipelines across Databricks and Azure, owning preprocessing and evaluation runs behind the platform's AI features.",
    ],
  },
  {
    title: "Endpoint Systems Administrator",
    org: "UW School of Medicine and Public Health",
    location: "Madison, WI",
    period: "February 2026 – Present",
    logo: "/logos/wisc.png",
    bullets: [
      "Triage and resolve ~20 Windows/macOS, network, and account tickets per week for 50+ researchers and staff; document 15+ repeat fixes in a shared knowledge base the rest of the team now works from.",
      "Image and provision endpoints, administer accounts and group access in Active Directory, configure VPN and network access, and keep machines current through patching and backups.",
      "Improve site accessibility and page performance with semantic HTML, alt text, and asset cleanup.",
    ],
  },
  {
    title: "Web Developer",
    org: "Dental Aid & Relief Association",
    location: "Portland, OR",
    period: "April 2025 – November 2025",
    logo: "/logos/dental-aid.png",
    bullets: [
      "Designed and developed organizational website pages to improve UX and online presence.",
      "Optimized assets and code, reducing load time by 25% and increasing Lighthouse performance score from 75 to 90.",
      "Implemented accessibility and SEO improvements, increasing organic traffic by 15%.",
      "Built reusable UI components, reducing new page build time by 30% across 12+ pages.",
    ],
  },
  {
    title: "Client Support Technician Intern",
    org: "The Stevie Awards",
    location: "Amman, Jordan",
    period: "December 2023 – February 2024",
    logo: "/logos/stevie.png",
    bullets: [
      "Resolved 200+ client support tickets with 95%+ SLA compliance and 70–80% first-contact resolution.",
      "Troubleshot login, access, configuration, and submission issues for 30–50 active client accounts.",
      "Reduced first-response time to under 4 hours through effective triage and escalation.",
    ],
  },
  {
    title: "Business Consultant",
    org: "NASA International Space Apps Challenge",
    location: "Amman, Jordan",
    period: "October 2023",
    logo: "/logos/nasa.png",
    bullets: [
      "Mentored teams through the global hackathon, advising on project scope, pitch structure, and technical feasibility.",
      "Provided business and product guidance to help participants refine solutions and present to judges.",
    ],
  },
  {
    title: "Software Intern",
    org: "Autographics",
    location: "Amman, Jordan",
    period: "May 2023 – July 2023",
    logo: "/logos/autographics.png",
    bullets: [
      "Developed and tested Python features using object-oriented programming to support internal workflows.",
      "Built and executed automated and manual test cases, improving reliability across frequent deployments.",
      "Debugged issues by analyzing logs, reproducing bugs in virtual machines, and validating fixes.",
    ],
  },
  {
    title: "Cyber Security Intern",
    org: "Eastnets",
    location: "Amman, Jordan",
    period: "August 2022 – September 2022",
    logo: "/logos/eastnets.png",
    bullets: [
      "Assisted with Windows endpoint security checks, vulnerability scans, and access reviews.",
      "Documented findings and troubleshooting steps to standardize repeated security tasks.",
    ],
  },
];

export const education: EducationEntry[] = [
  {
    degree: "B.S. Computer Science, B.S. Data Science, B.S. Mathematics",
    school: "University of Wisconsin–Madison",
    period: "May 2028",
    highlights: ["3.5 GPA", "Dean's List: Fall 2025–2026"],
    activities: [
      "Data Science Club",
      "Claude Builder Club",
      "Kappa Eta Kappa",
      "Alpha Lambda Mu",
      "Arab Student Association",
    ],
    logo: "/logos/wisc.png",
  },
  {
    degree: "High School Diploma",
    school: "Jubilee Institute",
    location: "Amman, Jordan",
    period: "June 2024",
    logo: "/logos/Jubilee.png",
  },
];

export const skills: Record<string, string[]> = {
  "Programming": ["Python", "Java", "C", "C++", "R"],
  "Web": ["React", "Next.js", "TypeScript", "Tailwind CSS", "HTML/CSS"],
  "AI / Data": ["PyTorch", "Pydantic", "Databricks", "Azure", "FastAPI", "REST APIs", "Docker", "Bruno"],
  "Technical": ["Data Structures", "Algorithms", "OOP", "IT Troubleshooting"],
};
