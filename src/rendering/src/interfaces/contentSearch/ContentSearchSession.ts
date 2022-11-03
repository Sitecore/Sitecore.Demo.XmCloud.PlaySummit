import { ContentSearchEntity } from './ContentSearchEntity';

export interface ContentSearchSession extends ContentSearchEntity {
  description: string;
  audience: string[];
  sponsors: string[];
  vendors: string[];
  speakers: string[];
  is_premium: boolean;
  duration: number;
  start_time: string;
}
