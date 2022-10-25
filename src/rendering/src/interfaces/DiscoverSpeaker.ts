import { DiscoverBase } from './DiscoverBase';

export interface DiscoverSpeaker extends DiscoverBase {
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
