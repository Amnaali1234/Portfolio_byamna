import React, { useState } from 'react';
import { useTheme } from './hooks/useTheme';
import { useScrollSpy } from './hooks/useScrollSpy';
import { Navbar } from './components/Navbar';
import { Hero } from './components/Hero';
import { About } from './components/About';
import { Services } from './components/Services';
import { Education } from './components/Education';
import { Specialization } from './components/Specialization';
import { Projects } from './components/Projects';
import { Certificates } from './components/Certificates';
import { Resume } from './components/Resume';
import { Contact } from './components/Contact';
import { Footer } from './components/Footer';
import { ResumeModal } from './components/ResumeModal';
import { CertificateModal } from './components/CertificateModal';
import { InteractivePreviewModal } from './components/InteractivePreviewModal';
import { CustomCursor } from './components/CustomCursor';
import { ProjectItem, CertificateItem } from './types/portfolio';

export default function App() {
  const { isDark, toggleTheme } = useTheme();

  const sectionIds = [
    'home',
    'about',
    'services',
    'education',
    'specialization',
    'projects',
    'certificates',
    'resume',
    'contact'
  ];

  const activeSection = useScrollSpy(sectionIds, 120);

  // Modals state
  const [isResumeModalOpen, setIsResumeModalOpen] = useState(false);
  const [selectedCertificate, setSelectedCertificate] = useState<CertificateItem | null>(null);
  const [selectedProject, setSelectedProject] = useState<ProjectItem | null>(null);
  const [contactSubject, setContactSubject] = useState('');

  const handleSelectService = (serviceTitle: string) => {
    setContactSubject(serviceTitle);
  };

  return (
    <div className="min-h-screen bg-slate-50 dark:bg-[#080d1a] text-slate-900 dark:text-slate-100 transition-colors duration-300 relative selection:bg-cyan-500/20 selection:text-cyan-700 dark:selection:bg-cyan-500/30 dark:selection:text-cyan-300">
      
      {/* Custom Fluid Cursor for Fine Pointer Devices */}
      <CustomCursor />

      {/* Navigation Bar */}
      <Navbar
        isDark={isDark}
        toggleTheme={toggleTheme}
        activeSection={activeSection}
      />

      {/* Main Content Sections */}
      <main>
        <Hero onOpenResume={() => setIsResumeModalOpen(true)} />
        <About />
        <Services onSelectServiceForContact={handleSelectService} />
        <Education />
        <Specialization />
        <Projects onOpenProjectModal={(project) => setSelectedProject(project)} />
        <Certificates onOpenCertificateModal={(cert) => setSelectedCertificate(cert)} />
        <Resume onOpenResumeModal={() => setIsResumeModalOpen(true)} />
        <Contact prefilledSubject={contactSubject} />
      </main>

      {/* Footer */}
      <Footer />

      {/* Lightbox / Interactive Modals */}
      <ResumeModal
        isOpen={isResumeModalOpen}
        onClose={() => setIsResumeModalOpen(false)}
      />

      <CertificateModal
        certificate={selectedCertificate}
        onClose={() => setSelectedCertificate(null)}
      />

      <InteractivePreviewModal
        project={selectedProject}
        onClose={() => setSelectedProject(null)}
      />
    </div>
  );
}
