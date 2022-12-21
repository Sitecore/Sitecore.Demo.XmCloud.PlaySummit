import { ContentSearchEntity } from './ContentSearchEntity';

export interface ContentSearchVendor extends ContentSearchEntity {
  description: string;
  level: string;
  activities: string[];
  sessions: string[];
  speakers: string[];
}
