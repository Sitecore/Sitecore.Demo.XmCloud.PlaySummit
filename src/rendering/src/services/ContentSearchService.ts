import { AxiosDataFetcher } from '@sitecore-jss/sitecore-jss-nextjs';
import { merge, uniq } from 'lodash';
import { SearchResultType } from '../helpers/ContentSearchHelper';
import { ContentSearchResponseBase } from '../interfaces/contentSearch/ContentSearchResponse';

const domainId = process.env.NEXT_PUBLIC_SEARCH_API_DOMAIN || '';
const host = process.env.NEXT_PUBLIC_SEARCH_API_HOST || '';

export const isContentSearchEnabled = !!domainId && !!host;

const doGet = async <T extends ContentSearchResponseBase = ContentSearchResponseBase>(
  widgetId: string,
  data: unknown
): Promise<T> => {
  const dataFetcher = new AxiosDataFetcher({ withCredentials: false });

  const response = await dataFetcher.fetch(
    `https://${host}/${domainId}/v1/discover/search-rec`,
    data
  );

  const {
    data: {
      // eslint-disable-next-line @typescript-eslint/ban-ts-comment
      // @ts-ignore
      widgets: { [widgetId]: widgetData },
    },
  } = response;

  return widgetData;
};

export type ContentSearchRequestFilter = { facetId: string; facetValueId: string };

export type ContentSearchRequestProps = {
  widgetId: string;
  keyphrase?: string;
  entity?: SearchResultType;
  filters?: ContentSearchRequestFilter[];
  facets?: string[];
  limit?: number;
  sort?: string;
  page?: number;
};

export const getSearchResults = async <
  T extends ContentSearchResponseBase = ContentSearchResponseBase
>(
  {
    widgetId,
    keyphrase,
    filters = [],
    facets = [],
    entity,
    limit = 10,
    page = 0,
    sort,
  }: ContentSearchRequestProps,
  data: unknown = {}
): Promise<T> => {
  if (!isContentSearchEnabled) {
    return null;
  }

  const types = uniq([...filters.map(({ facetId }) => facetId), ...facets])
    .map((facet) => ({
      name: facet,
    }))
    .map((item) => {
      const values = filters
        .filter(({ facetId }) => facetId === item.name)
        .map(({ facetValueId }) => facetValueId);
      if (values.length > 0) {
        return {
          ...item,
          filter: {
            type: 'or',
            values,
          },
        };
      }
      return item;
    });

  return doGet<T>(
    widgetId,
    merge(
      {},
      {
        entity: entity ?? undefined,
        search: {
          query: keyphrase ? { keyphrase } : undefined,
          facet: {
            sort: {
              name: 'text',
              order: 'asc',
            },
            types: types.length > 0 ? types : undefined,
          },
          content: {},
          limit: limit ? limit : 10,
          offset: Math.max(0, (page - 1) * limit || 0),
          sort: {
            ...(sort ? { value: [{ name: sort }] } : {}),
            choices: true,
          },
        },
        widget: { rfkids: [widgetId] },
      },
      data
    )
  );
};
