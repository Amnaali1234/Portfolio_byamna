import { CertificateItem } from '../types/portfolio';

export const certificatesList: CertificateItem[] = [
  {
    id: "smit-frontend-cert",
    title: "Modern Web Application Development (Frontend Module)",
    issuer: "Saylani Mass IT Training (SMIT)",
    date: "2024",
    credentialId: "SMIT-MWAD-FRONTEND",
    verified: true,
    category: "Saylani Mass IT Training",
    description: "Successful completion of hands-on frontend web curriculum covering HTML5, CSS3, modern JavaScript, responsive interfaces, Git, and React.js fundamentals."
  },
  {
    id: "cisco-html-essentials",
    title: "HTML Essentials & Web Fundamentals",
    issuer: "Cisco Networking Academy",
    date: "Verified Learning",
    credentialId: "CISCO-HTML-ESS",
    verified: true,
    category: "Cisco HTML Essentials",
    description: "Foundational certification examining semantic HTML structuring, accessibility standards, document trees, and cross-browser markup validation."
  },
  {
    id: "javascript-foundations",
    title: "JavaScript Programming & DOM Fundamentals",
    issuer: "Web Development Academy / SMIT",
    date: "Verified Coursework",
    credentialId: "JS-CORE-DOM",
    verified: true,
    category: "JavaScript",
    description: "Core scripting curriculum focusing on ES6+ features, functional programming, event listeners, dynamic DOM manipulation, and asynchronous patterns."
  },
  {
    id: "femhack-hackathon",
    title: "FemHack Hackathon Participant / Completion",
    issuer: "FemHack Community",
    date: "Learning Milestone",
    credentialId: "FEMHACK-PARTICIPANT",
    verified: true,
    category: "FemHack Hackathon",
    description: "Collaborative hackathon event emphasizing rapid UI prototyping, team problem-solving, and female tech empowerment in Pakistan."
  },
  {
    id: "placeholder-slot-1",
    title: "Configurable Certificate Slot (Add Your New Certificate)",
    issuer: "Issuing Organization",
    date: "Ready to Configure",
    credentialId: "PENDING-VERIFICATION",
    verified: false,
    category: "Configurable Placeholder",
    description: "Easily update this entry in src/data/certificatesData.ts with any newly earned certificate, image file, credential link, or date."
  }
];
