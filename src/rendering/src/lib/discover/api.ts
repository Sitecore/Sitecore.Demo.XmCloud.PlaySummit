import { AxiosDataFetcher } from '@sitecore-jss/sitecore-jss-nextjs';
import merge from 'lodash.merge';

const domainId = process.env.NEXT_PUBLIC_DISCOVER_API_DOMAIN || '229001437';
const host = process.env.NEXT_PUBLIC_DISCOVER_API_HOST || 'api-staging.rfksrv.com';

export const doGet = async (widgetId: string, data: unknown): Promise<unknown> => {
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

export type DiscoverRequestProps = {
  widgetId: string;
  keyphrase: string;
  entity?: 'session' | 'vendor' | 'content' | 'sponsor' | 'speaker';
  filters?: { facetId: string; facetValueId: string }[];
  facets?: string[];
  limit?: number;
};

export const get = async (
  { widgetId, keyphrase, filters = [], facets = [], entity, limit }: DiscoverRequestProps,
  data: unknown = {}
): Promise<unknown> => {
  console.log(data);
  const types = facets
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
  return doGet(
    widgetId,
    merge(
      {
        // rfk_flags: ['-cache'],
        entity: entity ?? undefined,
        search: {
          query: keyphrase ? { keyphrase } : undefined,
          facet: {
            sort: { name: 'count', order: 'desc' },
            types: types.length > 0 ? types : undefined,
          },
          // suggestion: ['title_context_aware'],
          content: {},
          limit: limit ? limit : 10,
          offset: 0,
          sort: {
            choices: true,
          },
        },
        widget: { rfkids: [widgetId] },
      }
      // data
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
