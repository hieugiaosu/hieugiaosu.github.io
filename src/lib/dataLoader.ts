import yaml from 'js-yaml';

// Type definitions for our data structures
export interface PersonalInfo {
  name: string;
  title: string;
  subtitle: string;
  description: string;
  avatar: string;
  contact: {
    email: string;
    github: string;
    linkedin: string;
    orcid: string;
    googleScholar?: string; // Optional field for Google Scholar link
  };
  navigation: Array<{
    name: string;
    href: string;
  }>;
}

export interface AboutData {
  about: string;
}

export interface Experience {
  title: string;
  company: string;
  period: string;
  responsibilities: string[];
  technical_skills?: string;
}

export interface ExperienceData {
  experiences: Experience[];
}

export interface ResearchPaper {
  title: string;
  authors: string;
  status: string;
  description: string;
  demo_url?: string;
  demo_text?: string;
  paper_url?: string;
  paper_text?: string;
}

export interface ResearchData {
  research: ResearchPaper[];
}

export interface Project {
  title: string;
  organization: string;
  description: string;
  project_url: string;
  link_text: string;
}

export interface ProjectData {
  projects: Project[];
}

// Data loading functions
export const loadPersonalInfo = async (): Promise<PersonalInfo> => {
  const response = await fetch('/data/personal.yaml');
  const text = await response.text();
  return yaml.load(text) as PersonalInfo;
};

export const loadAboutData = async (): Promise<AboutData> => {
  const response = await fetch('/data/about.yaml');
  const text = await response.text();
  return yaml.load(text) as AboutData;
};

export const loadExperienceData = async (): Promise<ExperienceData> => {
  const response = await fetch('/data/experience.yaml');
  const text = await response.text();
  return yaml.load(text) as ExperienceData;
};

export const loadResearchData = async (): Promise<ResearchData> => {
  const response = await fetch('/data/research.yaml');
  const text = await response.text();
  return yaml.load(text) as ResearchData;
};

export const loadProjectData = async (): Promise<ProjectData> => {
  const response = await fetch('/data/projects.yaml');
  const text = await response.text();
  return yaml.load(text) as ProjectData;
};
