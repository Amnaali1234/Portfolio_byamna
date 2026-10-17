import { EducationItem } from '../types/portfolio';

export const educationList: EducationItem[] = [
  {
    id: "smit-modern-web",
    title: "Modern Web Application Development",
    institution: "Saylani Mass IT Training (SMIT)",
    period: "Currently Active",
    type: "ongoing",
    statusBadge: "Active · Frontend Completed",
    isProminent: true,
    description: "Hands-on intensive technical program focusing on modern web standards, component-driven React architecture, responsive design, and practical industry workflows. The frontend curriculum has been completed, and the journey continues into deeper web engineering.",
    topics: [
      "HTML5 & Semantic Web",
      "CSS3 & Responsive Design",
      "JavaScript (ES6+)",
      "React.js & State Management",
      "Tailwind CSS & Bootstrap",
      "Firebase Integration",
      "Git & GitHub Collaboration"
    ]
  },
  {
    id: "giaic-governor-house",
    title: "GIAIC Specialized IT Training",
    institution: "Governor House Karachi (GIAIC)",
    period: "Learning Journey",
    type: "specialized",
    statusBadge: "Coursework & Practice",
    description: "Specialized training focused on modern programming languages and scalable web application frameworks.",
    topics: [
      "TypeScript (Static typing & interfaces)",
      "Next.js (Modern React framework concepts)",
      "Python (Programming fundamentals & logic)"
    ]
  },
  {
    id: "intermediate-commerce",
    title: "Intermediate in Commerce",
    institution: "Government Degree College for Women",
    period: "2021 – 2023",
    type: "formal",
    statusBadge: "Completed",
    description: "Completed higher secondary education in commerce, establishing strong analytical thinking, organizational discipline, and structured problem-solving skills."
  }
];

export const allTechnologiesStudied = [
  "HTML5",
  "CSS3",
  "JavaScript",
  "React.js",
  "Tailwind CSS",
  "Bootstrap",
  "Firebase",
  "Git",
  "GitHub",
  "TypeScript",
  "Next.js",
  "Python"
];
