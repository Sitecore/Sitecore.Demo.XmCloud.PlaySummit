import merge from 'lodash.merge';
import { dataFetcher } from '../data-fetcher';

const domainId = process.env.NEXT_PUBLIC_DISCOVER_API_DOMAIN || '229001437';
const host = process.env.NEXT_PUBLIC_DISCOVER_API_HOST || 'api-staging.rfksrv.com';

export const doGet = async (widgetId: string, data: unknown): Promise<unknown> => {
  const response = await dataFetcher(`https://${host}/${domainId}/v1/discover/search-rec`, data);
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
};

export const get = async (
  { widgetId, keyphrase, filters = [], facets = [], entity }: DiscoverRequestProps,
  data: unknown = {}
): Promise<unknown> => {
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
          query: keyphrase ?? { keyphrase },
          facet: {
            sort: { name: 'count', order: 'desc' },
            types: types.length > 0 ? types : undefined,
          },
          content: {},
          limit: 10,
          offset: 0,
          sort: {
            choices: true,
          },
        },
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
