import { ProjectItem } from '../types/portfolio';

export const projectsData: ProjectItem[] = [
  {
    id: "noor-collections",
    title: "Noor Collections",
    category: "Web Layouts",
    description: "A collection-focused website demonstrating frontend layout, product presentation, and responsive design for an elegant fashion brand.",
    tags: ["HTML5", "CSS3", "JavaScript", "Responsive Design", "UI/UX"],
    githubUrl: "https://github.com/Amnaali1234/Noor_collections_website",
    liveUrl: "https://amnaali1234.github.io/Noor_collections_website/",
    isAvailable: true,
    featured: true,
    previewTheme: {
      gradient: "from-blue-600 via-indigo-600 to-purple-600",
      accentColor: "#3b82f6",
      icon: "ShoppingBag"
    },
    details: {
      overview: "Noor Collections is an e-commerce showcase highlighting modern apparel catalogs, product grid aesthetics, fluid responsive scaling across mobile and desktop devices, and smooth user navigation.",
      highlights: [
        "Curated visual showcase and responsive product cards",
        "Refined typographic hierarchy tailored for lifestyle retail",
        "Mobile-first navigation and cross-viewport fidelity",
        "Clean, maintainable semantic markup and styling"
      ],
      role: "Sole Frontend Designer & Developer"
    },
    interactiveType: "none"
  },
  {
    id: "bg-color-changer",
    title: "Background Color Changer",
    category: "React Apps",
    description: "An interactive React assignment demonstrating useState, event handling, dynamic UI updates, and smooth CSS transitions.",
    tags: ["React.js", "useState", "Event Handling", "Tailwind CSS"],
    // Configurable links to be filled in by Amna
    githubUrl: "", // Example: "https://github.com/Amnaali1234/color-changer-react"
    liveUrl: "",   // Example: "https://amna-color-changer.vercel.app"
    isAvailable: false, // Flag indicating whether public URL is attached
    featured: true,
    previewTheme: {
      gradient: "from-cyan-500 via-blue-500 to-indigo-600",
      accentColor: "#06b6d4",
      icon: "Palette"
    },
    details: {
      overview: "Built to solidify React fundamental concepts, this application demonstrates dynamic DOM property updates, controlled button selectors, custom hex inputs, and smooth transitions powered by React state.",
      highlights: [
        "Stateful color canvas with dynamic luminance contrast calculation",
        "Quick palette presets and custom HEX/HSL input picker",
        "Demonstrates React useState and inline reactive styling",
        "Instant live interactive preview available right inside this portfolio"
      ],
      role: "Frontend Developer"
    },
    interactiveType: "color-changer"
  },
  {
    id: "currency-converter",
    title: "Dynamic Currency Converter",
    category: "Utility Apps",
    description: "A currency conversion interface demonstrating form handling, state management, calculation logic, and dynamic UI updates.",
    tags: ["React.js", "State Management", "Form Controls", "Calculations"],
    githubUrl: "", // Configurable link
    liveUrl: "",   // Configurable link
    isAvailable: false,
    featured: true,
    previewTheme: {
      gradient: "from-emerald-500 via-teal-600 to-cyan-600",
      accentColor: "#10b981",
      icon: "Coins"
    },
    details: {
      overview: "A lightweight financial utility that allows users to instantly convert values across multiple world currencies (USD, PKR, EUR, GBP, AED, SAR) with reciprocal swapping and live calculation feedback.",
      highlights: [
        "Clean numeric input validation with formatting",
        "Two-way currency swap feature with state inversion",
        "Real-time reactive calculation without page reload",
        "Accessible, high-contrast inputs and exchange rate readout"
      ],
      role: "Frontend Developer"
    },
    interactiveType: "currency-converter"
  },
  {
    id: "voting-app",
    title: "Two-Candidate Voting App",
    category: "React Apps",
    description: "A professional voting interface with two candidate cards, voting interactions, tally logic, and a clear results display.",
    tags: ["React.js", "Component Architecture", "State Logic", "Tailwind CSS"],
    githubUrl: "", // Configurable link
    liveUrl: "",   // Configurable link
    isAvailable: false,
    featured: false,
    previewTheme: {
      gradient: "from-violet-600 via-purple-600 to-fuchsia-600",
      accentColor: "#8b5cf6",
      icon: "Vote"
    },
    details: {
      overview: "A clean democracy and polling UI that lets users cast votes between two nominees, dynamically recalculates vote percentages, displays real-time progress bars, and prevents duplicate polling clicks.",
      highlights: [
        "Balanced dual-column candidate comparison cards",
        "Reactive vote counter and proportional percentage calculation",
        "Interactive confirmation feedback and vote reset capability",
        "Tested for mobile ergonomics and single-tap responsiveness"
      ],
      role: "Frontend Developer"
    },
    interactiveType: "voting-app"
  },
  {
    id: "portfolio-website",
    title: "Amna Ali Personal Portfolio",
    category: "Full Showcase",
    description: "My personal portfolio showcasing frontend skills, projects, learning journey, and design aesthetics.",
    tags: ["React.js", "Tailwind CSS", "Motion", "Dark/Light Mode", "TypeScript"],
    githubUrl: "https://github.com/Amnaali1234",
    liveUrl: "#home",
    isAvailable: true,
    featured: false,
    previewTheme: {
      gradient: "from-blue-600 via-indigo-600 to-sky-500",
      accentColor: "#2563eb",
      icon: "Sparkles"
    },
    details: {
      overview: "The digital home and visual identity for Amna Ali. Designed with high editorial precision, dark and light mode persistence, printable ATS-friendly resume generation, and accessible components.",
      highlights: [
        "Dark & light theme toggle persisted in browser storage",
        "Custom interactive project demos directly executable in-app",
        "Zero-pill typographic hierarchy adhering to anti-slop guidelines",
        "Printable one-page ATS resume with direct browser print dialog"
      ],
      role: "Designer & Developer"
    },
    interactiveType: "none"
  },
  {
    id: "upcoming-slot",
    title: "Upcoming Project Showcase",
    category: "React Apps",
    description: "Configurable slot for upcoming web applications, React assignments, and frontend case studies.",
    tags: ["React.js", "Next.js", "In Development"],
    githubUrl: "",
    liveUrl: "",
    isAvailable: false,
    featured: false,
    previewTheme: {
      gradient: "from-slate-700 via-slate-800 to-slate-900",
      accentColor: "#64748b",
      icon: "Code2"
    },
    details: {
      overview: "This slot is prepared in src/data/projectsData.ts so Amna Ali can seamlessly drop in new projects as her portfolio continues to grow.",
      highlights: [
        "Easy configuration through JSON/TypeScript data files",
        "Seamless addition of live URL and GitHub repository",
        "Instant category tag filtering support"
      ],
      role: "Developer"
    },
    interactiveType: "none"
  }
];
