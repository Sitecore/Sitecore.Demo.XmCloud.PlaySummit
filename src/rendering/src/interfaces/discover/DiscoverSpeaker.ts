import { DiscoverEntity } from './DiscoverEntity';

export interface DiscoverSpeaker extends DiscoverEntity {
  description: string;
  company: string;
  job_title: string;
  location: string;
  audience: string[];
  sponsors: string[];
  sessions: string[];
  vendors: string[];
  is_featured: boolean;
}
