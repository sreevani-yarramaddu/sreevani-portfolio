export interface Experience {
  company: string;
  logo: string;
  role: string;
  period: string;
  location: string;
  highlights: string[];
  technologies: string[];
}

export interface ProjectSlide {
  src: string;
  alt: string;
  caption: string;
  orientation?: 'portrait' | 'landscape';
}

export interface Project {
  title: string;
  category: string;
  description: string;
  highlights: string[];
  technologies: string[];
  repository: string;
  slides: [ProjectSlide, ...ProjectSlide[]];
}

export interface Education {
  degree: string;
  institution: string;
  period: string;
  grade: string;
}
