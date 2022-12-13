import { ContentSearchEntity } from './ContentSearchEntity';

export interface ContentSearchSpeaker extends ContentSearchEntity {
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
