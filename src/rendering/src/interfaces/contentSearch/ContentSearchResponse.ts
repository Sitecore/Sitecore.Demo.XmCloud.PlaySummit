import { ContentSearchEntity } from './ContentSearchEntity';

type ContentSearchResponseFacet = {
  id: string;
  text: string;
  count: number;
};

export type ContentSearchResponseSortChoice = {
  name: string;
  label: string;
};

export interface ContentSearchResponseBase {
  content?: unknown[];
  total_item: number;
  limit: number;
  offset: number;
  sort?: {
    choices?: ContentSearchResponseSortChoice[];
  };
  facet?: {
    [key in string]?: {
      label?: string;
      value?: ContentSearchResponseFacet[];
    };
  };
  suggestion?: unknown[];
}

export interface ContentSearchResponse<T extends ContentSearchEntity>
  extends ContentSearchResponseBase {
  content?: T[];
}
