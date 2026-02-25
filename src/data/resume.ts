export interface ExperienceEntry {
  title: string;
  org: string;
  location: string;
  period: string;
  bullets: string[];
}

export interface EducationEntry {
  degree: string;
  school: string;
  detail?: string;
  location?: string;
  period: string;
  highlights?: string[];
}

export const experience: ExperienceEntry[] = [
  {
    title: "IT Support Assistant (Institute on Aging)",
    org: "UW School of Medicine and Public Health",
    location: "Madison, WI",
    period: "February 2026 – Present · Part-time",
    bullets: [
      "Support researchers and staff at the UW–Madison Institute on Aging (SMPH) by triaging and troubleshooting Windows/macOS issues across computers and peripherals, and documenting resolutions.",
      "Contribute to ongoing website accessibility and UX improvements using web best practices (semantic HTML, alt text, metadata) and performance-minded updates.",
      "Collaborate with the team to keep day-to-day systems and workflows running smoothly.",
    ],
  },
  {
    title: "Web Developer",
    org: "Dental Aid & Relief Association",
    location: "Portland, OR",
    period: "April 2025 – November 2025",
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
    period: "October 2023 · 1 mo",
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
    bullets: [
      "Assisted with Windows endpoint security checks, vulnerability scans, and access reviews.",
      "Documented findings and troubleshooting steps to standardize repeated security tasks.",
    ],
  },
];

export const education: EducationEntry[] = [
  {
    degree: "B.S. Computer Science, B.S. Data Science",
    school: "University of Wisconsin–Madison",
    detail: "Minor: Mathematics",
    period: "May 2028",
    highlights: ["3.6 GPA", "Dean's List: Fall 2025–2026"],
  },
  {
    degree: "High School Diploma",
    school: "Jubilee Institute",
    location: "Amman, Jordan",
    period: "June 2024",
  },
];

export const skills: Record<string, string[]> = {
  "Programming": ["Python", "Java", "C++", "R"],
  "Web": ["React", "Next.js", "TypeScript", "Tailwind CSS", "HTML", "CSS"],
  "Technical": ["Data Structures", "Algorithms", "OOP", "APIs", "CLI", "Virtual Machines"],
  "Professional": ["Technical Support", "Troubleshooting", "Documentation"],
};
