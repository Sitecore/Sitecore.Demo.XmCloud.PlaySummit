import { DiscoverBase } from './DiscoverBase';

export interface DiscoverNews extends DiscoverBase {
  excerpt: string;
  content: string;
  publish_date: string;
  audience: string[];
}
