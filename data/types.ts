// Data type definitions for the portfolio

export type Region = 'US_LOCAL' | 'SOUTH_CAUCASUS' | 'US_MX_BORDER' | 'MIDDLE_EAST' | 'GLOBAL';
export type WorkFormat = 'Feature' | 'Explainer' | 'Analysis' | 'Column';
export type MultimediaKind = 'audio' | 'video';
export type MultimediaPlatform = 'YouTube' | 'SoundCloud' | 'Other' | 'None';

export interface WorkItem {
  id: string;
  title: string;
  dek?: string;
  outlet: string;
  year: number;
  region: Region;
  topics: string[];
  format: WorkFormat;
  url: string;
  imageUrl?: string;
  award?: string;
}

export interface MultimediaItem {
  id: string;
  title: string;
  kind: MultimediaKind;
  platform: MultimediaPlatform;
  duration: string;
  description: string;
  url: string;
  topics: string[];
  year: number;
}

export interface PhotoImage {
  src: string;
  caption: string;
  location: string;
  year: number;
}

export interface PhotoProject {
  id: string;
  title: string;
  slug: string;
  description: string;
  coverImageUrl: string;
  images: PhotoImage[];
}

export interface ResearchItem {
  id: string;
  title: string;
  abstract: string;
  institution: string;
  year: number;
  url: string;
  tags: string[];
}

export interface TimelineItem {
  year: string;
  title: string;
  description: string;
}

export interface Award {
  name: string;
  year: number;
  description: string;
}
