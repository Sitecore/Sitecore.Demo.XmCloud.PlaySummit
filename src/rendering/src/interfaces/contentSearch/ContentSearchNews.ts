import { ContentSearchEntity } from './ContentSearchEntity';

export interface ContentSearchNews extends ContentSearchEntity {
  excerpt: string;
  content: string;
  publish_date: string;
  audience: string[];
}
