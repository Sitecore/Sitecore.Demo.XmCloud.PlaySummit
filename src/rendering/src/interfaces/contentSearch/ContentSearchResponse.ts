import { ContentSearchEntity } from './ContentSearchEntity';
import { ContentSearchWidgetResponse } from './ContentSearchWidgetResponse';

export interface ContentSearchResponse {
  widgets: ContentSearchWidgetResponse<ContentSearchEntity>[];
}
