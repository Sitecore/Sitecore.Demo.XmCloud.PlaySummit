import { DiscoverBase } from './DiscoverBase';

export interface DiscoverSession extends DiscoverBase {
  description: string;
  audience: string[];
  sponsors: string[];
  vendors: string[];
  speakers: string[];
  is_premium: boolean;
  duration: number;
}
