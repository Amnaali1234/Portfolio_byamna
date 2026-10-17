import { ServiceItem } from '../types/portfolio';

export const servicesData: ServiceItem[] = [
  {
    id: "responsive-web",
    title: "Responsive Website Development",
    description: "Websites that adapt beautifully to mobile, tablet, and desktop screens with fluid layouts and optimal performance.",
    iconName: "Smartphone",
    features: [
      "Mobile-first responsive architecture",
      "Cross-browser compatibility testing",
      "Fluid typography and proportional spacing",
      "Accessible markup adhering to web standards"
    ]
  },
  {
    id: "frontend-development",
    title: "Frontend Development",
    description: "Interactive user interfaces using React.js, JavaScript, and reusable components with robust state handling.",
    iconName: "Code2",
    features: [
      "React.js component-based architecture",
      "Dynamic state management with hooks",
      "Clean, modular, and maintainable codebase",
      "Seamless integration with frontend APIs"
    ]
  },
  {
    id: "landing-page",
    title: "Landing Page Design & Development",
    description: "Modern, conversion-focused landing pages for businesses and personal brands that leave a memorable impression.",
    iconName: "Sparkles",
    features: [
      "Visual hierarchy optimized for engagement",
      "Tailwind CSS aesthetic styling",
      "Fast page load speed and smooth scrolling",
      "Clear call-to-action placement"
    ]
  },
  {
    id: "ui-improvements",
    title: "Website UI Improvements",
    description: "Layout refinements, responsive fixes, visual consistency, and frontend enhancements for existing web applications.",
    iconName: "LayoutTemplate",
    features: [
      "Bug fixes for mobile and tablet views",
      "Modernizing legacy CSS to Tailwind CSS",
      "Typography and color scheme polish",
      "Micro-interactions and subtle transitions"
    ]
  }
];
