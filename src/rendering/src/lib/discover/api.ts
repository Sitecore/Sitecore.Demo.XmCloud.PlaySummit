import { AxiosDataFetcher } from '@sitecore-jss/sitecore-jss-nextjs';
import { merge, uniq } from 'lodash';
import { DiscoverResponseBase } from '../../interfaces/discover/DiscoverResponse';

const domainId = process.env.NEXT_PUBLIC_SEARCH_API_DOMAIN || '';
const host = process.env.NEXT_PUBLIC_SEARCH_API_HOST || '';

export const doGet = async <T extends DiscoverResponseBase = DiscoverResponseBase>(
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

export type DiscoverRequestFilter = { facetId: string; facetValueId: string };
export type DiscoverRequestProps = {
  widgetId: string;
  keyphrase?: string;
  entity?: 'session' | 'vendor' | 'content' | 'sponsor' | 'speaker';
  filters?: DiscoverRequestFilter[];
  facets?: string[];
  limit?: number;
  sort?: string;
  page?: number;
};

export const get = async <T extends DiscoverResponseBase = DiscoverResponseBase>(
  {
    widgetId,
    keyphrase,
    filters = [],
    facets = [],
    entity,
    limit = 10,
    page = 0,
    sort,
  }: DiscoverRequestProps,
  data: unknown = {}
): Promise<T> => {
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
        // rfk_flags: ['-cache'],
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

export const getSessions = async (
  props: Omit<DiscoverRequestProps, 'entity'>,
  data?: unknown
): Promise<unknown> => get({ ...props, entity: 'session' }, data);

export const getVendors = async (
  props: Omit<DiscoverRequestProps, 'entity'>,
  data?: unknown
): Promise<unknown> => get({ ...props, entity: 'vendor' }, data);

export const getSponsors = async (
  props: Omit<DiscoverRequestProps, 'entity'>,
  data?: unknown
): Promise<unknown> => get({ ...props, entity: 'sponsor' }, data);

export const getSpeakers = async (
  props: Omit<DiscoverRequestProps, 'entity'>,
  data?: unknown
): Promise<unknown> => get({ ...props, entity: 'speaker' }, data);

export const getNews = async (
  props: Omit<DiscoverRequestProps, 'entity'>,
  data?: unknown
): Promise<unknown> => get({ ...props, entity: 'content' }, data);
