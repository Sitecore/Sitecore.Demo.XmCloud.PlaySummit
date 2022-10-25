import { DiscoverBase } from './DiscoverBase';

export interface DiscoverSponsor extends DiscoverBase {
  description: string;
  level: string;
  activities: string[];
  sessions: string[];
  speakers: string[];
}
