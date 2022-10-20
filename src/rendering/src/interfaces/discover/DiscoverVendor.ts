import { DiscoverEntity } from './DiscoverEntity';

export interface DiscoverVendor extends DiscoverEntity {
  description: string;
  level: string;
  activities: string[];
  sessions: string[];
  speakers: string[];
}
