# Amna Ali — Personal Portfolio Website

A modern, high-performance personal portfolio website for **Amna Ali**, Frontend Developer based in Karachi, Pakistan. Built with **React.js**, **Vite**, and **Tailwind CSS**, designed with an agency-grade editorial aesthetic featuring dark and light mode persistence, interactive project simulators, verified credentials, and an ATS-friendly printable resume.

---

## 🌟 Key Highlights & Features

- **Visual Identity:** Refined dark theme with near-black layered surfaces and subtle cyan/violet glows, paired with an accessible, high-contrast light theme.
- **Top Bar Navigation:** Compliant 3-zone sticky navigation bar with active section tracking, theme toggle, and collapsible mobile drawer.
- **Dynamic Hero Section:** Typing animation cycling through developer specializations, framed avatar layout, technology badges, and primary action CTAs.
- **Detailed About Section:** Authentic journey narrative highlighting learning milestones at Governor House (GIAIC) and Saylani Mass IT Training (SMIT).
- **Services Showcase:** 4 tailored offerings (Responsive Websites, Frontend Development, Landing Pages, UI Improvements) with direct project discussion links.
- **Structured Education Timeline:** Prominently highlights active SMIT modern web development coursework alongside GIAIC and Government Degree College for Women.
- **Specialization Matrix:** Organized domain competencies across Core Web, Frameworks, Tools, and Additional Learning without fake progress bars.
- **Interactive Project Showcase:** Live in-app interactive simulators for React assignments (*Background Color Changer*, *Dynamic Currency Converter*, *Two-Candidate Voting App*) alongside real deployments like *Noor Collections*.
- **Verified Certificates & Lightbox:** Document previews with verification status, credential IDs, and a dedicated Lightbox Modal for detailed inspection.
- **One-Page ATS Resume (PDF Print Ready):** Interactive resume modal with optimized `@media print` styling that prints a clean, single-page ATS-friendly PDF directly through your browser.
- **Validated Contact Hub:** Complete contact form with client-side validation, pre-filled subject support from the Services section, direct `mailto:` fallback, and one-click email copying.

---

## 🛠️ Technology Stack

- **Framework:** [React 19](https://react.dev/) + [Vite](https://vitejs.dev/)
- **Styling:** [Tailwind CSS v4](https://tailwindcss.com/)
- **Icons:** [Lucide React](https://lucide.dev/)
- **Typography:** Space Grotesk (Headings) & Inter (Body) via Google Fonts
- **Language:** TypeScript

---

## 📂 Project Architecture

```
/
├── index.html                  # HTML entry point, meta tags, fonts, theme anti-flash script
├── metadata.json               # Applet metadata
├── package.json                # Project dependencies and npm scripts
├── README.md                   # Complete documentation and deployment guide
└── src/
    ├── App.tsx                 # Main application component & layout state
    ├── main.tsx                # React DOM entry point
    ├── index.css               # Tailwind CSS imports, typography rules, print styles
    ├── types/
    │   └── portfolio.ts        # TypeScript data models
    ├── data/
    │   ├── profileData.ts      # Bio, hero text, contact info, and social links
    │   ├── skillsData.ts       # Categorized skills and focus statement
    │   ├── projectsData.ts     # Project details, live links, and GitHub URLs
    │   ├── educationData.ts    # Formal education and training timeline
    │   ├── servicesData.ts     # Services offered and feature highlights
    │   └── certificatesData.ts # Verified certificates and configurable slots
    ├── hooks/
    │   ├── useTheme.ts         # Persistent dark/light mode hook
    │   └── useScrollSpy.ts     # Active section tracking for navbar
    └── components/
        ├── Navbar.tsx          # Sticky responsive header with theme toggle
        ├── Hero.tsx            # Animated hero section with photo frame
        ├── About.tsx           # Biography and visual journey milestones
        ├── Services.tsx        # 4 service cards with contact action
        ├── Education.tsx       # SMIT, GIAIC, and college timeline
        ├── Specialization.tsx  # Skill cards organized by domain
        ├── Projects.tsx        # Project gallery with filters and previews
        ├── Certificates.tsx    # Credential cards and lightbox trigger
        ├── Resume.tsx          # Resume overview and download triggers
        ├── Contact.tsx         # Contact form, mailto fallback, and profiles
        ├── Footer.tsx          # Footer with dynamic year and back-to-top
        ├── CertificateModal.tsx # Full certificate preview modal
        ├── InteractivePreviewModal.tsx # Live React simulators
        └── ResumeModal.tsx     # Clean printable ATS resume view
```

---

## 🚀 Quick Start (Local Development)

### Prerequisites

Ensure you have **Node.js** (v18 or newer) and **npm** installed on your machine.

### 1. Install Dependencies

```bash
npm install
```

### 2. Run the Development Server

```bash
npm run dev
```

Open your browser at `http://localhost:3000` (or the port specified in terminal).

### 3. Build for Production

```bash
npm run build
```

This compiles optimized production assets into the `dist/` directory.

---

## ✏️ How to Customize Your Portfolio

All personal data, links, projects, and certificates are decoupled into the `src/data/` folder so you can update your portfolio in seconds without touching layout components:

### 1. Updating Social & Contact Links (`src/data/profileData.ts`)
```typescript
export const profileData: ContactInfo = {
  name: "Amna Ali",
  role: "Frontend Developer",
  location: "Karachi, Pakistan",
  email: "amnasheikh2255@gmail.com",
  github: "https://github.com/Amnaali1234",
  linkedin: "https://www.linkedin.com/in/amna-ali-5257472ba/",
  whatsapp: "https://wa.me/923000000000", // Update with your actual WhatsApp link
  twitter: "https://twitter.com/your_handle" // Update with your actual X profile
};
```

### 2. Adding / Updating Projects (`src/data/projectsData.ts`)
To attach your GitHub repository and live demo link for any project:
```typescript
{
  id: "bg-color-changer",
  title: "Background Color Changer",
  githubUrl: "https://github.com/Amnaali1234/your-repo-name",
  liveUrl: "https://your-deployment-url.vercel.app",
  isAvailable: true,
  // ...
}
```

### 3. Adding New Certificates (`src/data/certificatesData.ts`)
Simply edit or add a new entry to the `certificatesList` array:
```typescript
{
  id: "new-certificate-id",
  title: "Your Certificate Name",
  issuer: "Issuing Organization",
  date: "2024",
  credentialId: "CERT-12345",
  verified: true,
  category: "Web Development",
  description: "Description of what you learned and accomplished."
}
```

### 4. Adding Your Own Profile Photo
In `src/components/Hero.tsx`, you can:
- Use the built-in **"Upload / Replace Photo"** button right in the browser for an instant preview.
- Or place your photo file (e.g. `amna-profile.jpg`) in `src/assets/` and reference it directly in `Hero.tsx`.

---

## 📤 How to Export to GitHub and Deploy to Vercel

### Step 1: Initialize Git and Push to GitHub

1. Open your terminal in the project root directory.
2. Initialize git and commit your files:
   ```bash
   git init
   git add .
   git commit -m "Initial commit: Amna Ali portfolio website"
   ```
3. Create a new repository on your GitHub account (`https://github.com/new`), for example named `amna-portfolio`.
4. Link your local repository to GitHub and push:
   ```bash
   git remote add origin https://github.com/Amnaali1234/amna-portfolio.git
   git branch -M main
   git push -u origin main
   ```

### Step 2: Deploy to Vercel (Free & Instant)

1. Go to [Vercel](https://vercel.com/) and sign in with your GitHub account.
2. Click **"Add New..."** > **"Project"**.
3. Select your `amna-portfolio` repository and click **Import**.
4. In the Project Configuration:
   - **Framework Preset:** Vite (detected automatically)
   - **Build Command:** `npm run build`
   - **Output Directory:** `dist`
5. Click **Deploy**.
6. Within 30 seconds, your portfolio will be live at `https://amna-portfolio.vercel.app` (or your custom domain)!

---

## 📄 License & Credits

Created for **Amna Ali**, Frontend Developer.  
Built with pride in Karachi, Pakistan.
