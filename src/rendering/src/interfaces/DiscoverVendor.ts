import { DiscoverBase } from './DiscoverBase';

export interface DiscoverVendor extends DiscoverBase {
  description: string;
  level: string;
  activities: string[];
  sessions: string[];
  speakers: string[];
}
