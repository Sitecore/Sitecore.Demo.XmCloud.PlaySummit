import { ContentSearchEntity } from './ContentSearchEntity';

type ContentSearchWidgetResponseFacetValue = {
  id: string;
  text: string;
  count: number;
};

export type ContentSearchWidgetResponseFacet = {
  name: string;
  label: string;
  value?: ContentSearchWidgetResponseFacetValue[];
};

export type ContentSearchWidgetResponseSortChoice = {
  name: string;
  label: string;
};

export interface ContentSearchWidgetResponseBase {
  rfk_id: string;
  entity: string;
  type: string;
  content?: unknown[];
  total_item: number;
  limit: number;
  offset: number;
  sort?: {
    choices?: ContentSearchWidgetResponseSortChoice[];
  };
  facet?: ContentSearchWidgetResponseFacet[];
  suggestion?: unknown[];
}

export interface ContentSearchWidgetResponse<T extends ContentSearchEntity>
  extends ContentSearchWidgetResponseBase {
  content?: T[];
}
