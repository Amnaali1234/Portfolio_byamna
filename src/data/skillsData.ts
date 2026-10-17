import { SkillCategory } from '../types/portfolio';

export const skillsStatement =
  "My focus is building responsive, maintainable, and user-friendly frontend experiences. I'm continuing to strengthen my JavaScript problem-solving, React fundamentals, and practical project development skills.";

export const skillsCategories: SkillCategory[] = [
  {
    title: "Core Web",
    description: "Foundational standards for accessible, performant markup and scripting.",
    skills: [
      {
        name: "HTML5",
        levelDescription: "Semantic structuring, SEO accessibility, responsive layout architecture",
        iconName: "FileCode",
        highlight: true
      },
      {
        name: "CSS3",
        levelDescription: "Modern Flexbox, CSS Grid, media queries, keyframe animations, variables",
        iconName: "Palette",
        highlight: true
      },
      {
        name: "JavaScript",
        levelDescription: "ES6+ syntax, DOM manipulation, asynchronous programming, event handling",
        iconName: "FileJson",
        highlight: true
      }
    ]
  },
  {
    title: "Frontend Framework & Styling",
    description: "Component-driven development and modern utility-first aesthetic design systems.",
    skills: [
      {
        name: "React.js",
        levelDescription: "Functional components, custom hooks, state lifecycle, component reusability",
        iconName: "Atom",
        highlight: true
      },
      {
        name: "Tailwind CSS",
        levelDescription: "Utility-first design, dark mode tokens, rapid prototyping, clean layouts",
        iconName: "Wind",
        highlight: true
      },
      {
        name: "Bootstrap",
        levelDescription: "Grid system, prebuilt UI primitives, responsive utility classes",
        iconName: "LayoutGrid"
      }
    ]
  },
  {
    title: "Tools & Workflow",
    description: "Version control, collaboration platforms, and web services.",
    skills: [
      {
        name: "Git",
        levelDescription: "Branching, commit hygiene, staging workflows, repository tracking",
        iconName: "GitBranch",
        highlight: true
      },
      {
        name: "GitHub",
        levelDescription: "Remote repository management, GitHub Pages deployment, open source collaboration",
        iconName: "Github",
        highlight: true
      },
      {
        name: "Firebase",
        levelDescription: "Hosting, Firestore database integration, web project configurations",
        iconName: "Flame"
      }
    ]
  },
  {
    title: "Additional Learning",
    description: "Expanding knowledge through GIAIC and modern web frameworks.",
    skills: [
      {
        name: "TypeScript",
        levelDescription: "Static typing, interfaces, enhanced developer tooling and type safety",
        iconName: "Code"
      },
      {
        name: "Next.js",
        levelDescription: "Server components, file-system routing, modern React application paradigms",
        iconName: "Globe"
      },
      {
        name: "Python",
        levelDescription: "Algorithmic thinking, foundational programming concepts and syntax",
        iconName: "Terminal"
      }
    ]
  }
];
