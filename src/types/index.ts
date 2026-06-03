export interface Project {
  id: number;
  title: string;
  description: string;
  techStack: string[];
  image: string;
  github: string;
  liveDemo: string;
}

export interface Skill {
  name: string;
  icon?: string;
}

export interface Achievement {
  id: number;
  title: string;
  value: string;
  icon?: string;
}

export interface Certification {
  id: number;
  title: string;
  provider: string;
  year: string;
}

export interface Education {
  id: number;
  institution: string;
  degree: string;
  period: string;
  score: string;
  location?: string;
}