import { ContentSearchEntity } from './ContentSearchEntity';

export interface ContentSearchSponsor extends ContentSearchEntity {
  description: string;
  level: string;
  activities: string[];
  sessions: string[];
  speakers: string[];
}
