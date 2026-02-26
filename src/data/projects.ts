export interface Project {
  id: string;
  title: string;
  tagline: string;
  period: string;
  role?: string;
  description: string;
  highlights: string[];
  whatItIsNot?: string;
  links: { label: string; href: string }[];
  skills: string[];
  imagePlaceholder?: string;
}

export const projects: Project[] = [
  {
    id: "smarttransit",
    title: "SmartTransit",
    tagline: "Reliability-First Transit Planner",
    period: "Feb 2026",
    role: "MadData25",
    description:
      "Built at #MadData25, SmartTransit is a reliability-focused bus planner for UW–Madison's Route 80. Getting to class shouldn't feel unpredictable. Instead of just showing arrival times, SmartTransit helps students answer: When should I leave? Should I walk or take the bus? How crowded will it be? Is the bus actually coming?",
    highlights: [
      "Leave-By Recommendation — uses schedule + location, live ETAs, crowd risk, ghost bus risk",
      "Walk vs Bus comparison for the full route",
      "Live map + nearest stop with Madison Metro BusTime API",
      "Schedule integration — add classes/events, dashboard stays synced",
    ],
    links: [
      { label: "Live site", href: "https://www.smarttransit.help" },
      { label: "Devpost", href: "https://devpost.com/software/smarttransit" },
    ],
    skills: [
      "Next.js",
      "React.js",
      "TypeScript",
      "Tailwind CSS",
      "Leaflet",
      "Python",
      "FastAPI",
      "GTFS",
      "BusTime API",
    ],
    imagePlaceholder: "🚍",
  },
  {
    id: "goodneighbor",
    title: "GoodNeighbor",
    tagline: "Charity Directory",
    period: "Nov 2025",
    role: "Founder",
    description:
      "GoodNeighbor is a charity directory built to make donating simpler, safer, and more transparent. When people want to help, the hardest part shouldn't be figuring out where to donate or worrying whether a link is legitimate. This site lets you discover charities by cause and location, read a clear description, and donate directly on the charity's official website.",
    highlights: [
      "Filter charities by category + country",
      "Open the charity's official donation page (we don't process donations)",
      "Provide descriptions and key details so people can make informed choices",
    ],
    whatItIsNot:
      "GoodNeighbor never takes a cut and doesn't handle payments — it's strictly a directory that links you to the right place.",
    links: [{ label: "Live site", href: "https://goodneighbor.charity" }],
    skills: ["Next.js", "React.js", "TypeScript", "Web Development"],
    imagePlaceholder: "🌿",
  },
  {
    id: "campus-navigator",
    title: "Campus Navigator",
    tagline: "Graph Algorithms Web Application",
    period: "Jun 2025 – Jul 2025",
    role: "University of Wisconsin-Madison",
    description:
      "Full-stack Java web application that computes shortest paths and furthest destinations between campus locations using real map data. Implemented Dijkstra's shortest-path algorithm on a directed weighted graph with custom hashtable-based graph storage, backend APIs for pathfinding, and an HTTP server for dynamic HTML.",
    highlights: [
      "Dijkstra's shortest-path algorithm on a directed weighted graph",
      "Custom hashtable-based graph storage",
      "Backend APIs for pathfinding and distance queries",
      "Parsed real campus map dataset (DOT format): 160+ nodes, 800+ edges",
      "End-to-end integration testing with JUnit",
    ],
    links: [
      {
        label: "Watch demo",
        href: "https://mediaspace.wisc.edu/media/Kaltura+Capture+recording+-+July+15th+2025%2C+2%3A00%3A36+pm/1_7p8ao9w1",
      },
    ],
    skills: ["Java", "Data Structures & Algorithms", "Graph Theory", "JUnit"],
    imagePlaceholder: "🗺️",
  },
];
