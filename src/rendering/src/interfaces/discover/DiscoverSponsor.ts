import { DiscoverEntity } from './DiscoverEntity';

export interface DiscoverSponsor extends DiscoverEntity {
  description: string;
  level: string;
  activities: string[];
  sessions: string[];
  speakers: string[];
}
