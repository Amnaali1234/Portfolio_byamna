export interface ProjectItem {
  id: string;
  title: string;
  category: 'React Apps' | 'Web Layouts' | 'Utility Apps' | 'Full Showcase';
  description: string;
  tags: string[];
  githubUrl?: string;
  liveUrl?: string;
  isAvailable?: boolean;
  featured?: boolean;
  previewTheme: {
    gradient: string;
    accentColor: string;
    icon: string;
  };
  details: {
    overview: string;
    highlights: string[];
    role: string;
  };
  interactiveType?: 'color-changer' | 'currency-converter' | 'voting-app' | 'none';
}

export interface ServiceItem {
  id: string;
  title: string;
  description: string;
  iconName: string;
  features: string[];
}

export interface EducationItem {
  id: string;
  title: string;
  institution: string;
  period?: string;
  type: 'formal' | 'specialized' | 'ongoing';
  statusBadge?: string;
  description: string;
  topics?: string[];
  isProminent?: boolean;
}

export interface CertificateItem {
  id: string;
  title: string;
  issuer: string;
  date?: string;
  credentialId?: string;
  verified: boolean;
  category: string;
  description: string;
}

export interface SkillCategory {
  title: string;
  description: string;
  skills: {
    name: string;
    levelDescription: string;
    iconName: string;
    highlight?: boolean;
  }[];
}

export interface ContactInfo {
  name: string;
  role: string;
  location: string;
  email: string;
  github: string;
  linkedin: string;
  whatsapp: string;
  twitter: string;
  availability: string;
}
