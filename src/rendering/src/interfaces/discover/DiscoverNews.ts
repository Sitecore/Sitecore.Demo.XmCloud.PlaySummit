import { DiscoverEntity } from './DiscoverEntity';

export interface DiscoverNews extends DiscoverEntity {
  excerpt: string;
  content: string;
  publish_date: string;
  audience: string[];
}
