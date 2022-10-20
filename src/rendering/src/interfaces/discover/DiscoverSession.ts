import { DiscoverEntity } from './DiscoverEntity';

export interface DiscoverSession extends DiscoverEntity {
  description: string;
  audience: string[];
  sponsors: string[];
  vendors: string[];
  speakers: string[];
  is_premium: boolean;
  duration: number;
  start_time: string;
}
