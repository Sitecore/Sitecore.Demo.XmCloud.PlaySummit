import { DiscoverEntity } from './DiscoverEntity';

export type DiscoverResponseFacet = {
  id: string;
  text: string;
  count: number;
};
export type DiscoverResponseSortChoice = {
  name: string;
  label: string;
};

export interface DiscoverResponseBase {
  content?: unknown[];
  total_item: number;
  limit: number;
  offset: number;
  sort?: {
    choices?: DiscoverResponseSortChoice[];
  };
  facet?: {
    [key in string]?: {
      label?: string;
      value?: DiscoverResponseFacet[];
    };
  };
  suggestion?: unknown[];
}
export interface DiscoverResponse<T extends DiscoverEntity> extends DiscoverResponseBase {
  content?: T[];
}
