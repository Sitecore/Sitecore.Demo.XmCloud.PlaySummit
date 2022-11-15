import { QueryClient } from '@tanstack/react-query';
import { ContentSearchNews } from '../interfaces/contentSearch/ContentSearchNews';
import { ContentSearchResponseSortChoice } from '../interfaces/contentSearch/ContentSearchResponse';
import { ContentSearchSession } from '../interfaces/contentSearch/ContentSearchSession';
import { ContentSearchSpeaker } from '../interfaces/contentSearch/ContentSearchSpeaker';
import { ContentSearchSponsor } from '../interfaces/contentSearch/ContentSearchSponsor';
import { ContentSearchVendor } from '../interfaces/contentSearch/ContentSearchVendor';
import { News } from '../types/news';
import { GraphQLSession } from '../types/session';
import { GraphQLSpeaker } from '../types/speaker';
import { Sponsor } from '../types/sponsor';
import { Vendor } from '../types/vendor';

export const SEARCH_PAGE = '/search';
export const isContentSearchEnabled =
  !!process.env.NEXT_PUBLIC_SEARCH_API_DOMAIN && !!process.env.NEXT_PUBLIC_SEARCH_API_HOST;

export const queryClient = new QueryClient({
  defaultOptions: {
    queries: {
      keepPreviousData: true,
      refetchOnWindowFocus: false,
    },
  },
});

export const getAbsoluteUrlPath = (url: string): string => {
  const [, path] = String(url).match(/^https?:\/\/[^/]+(.+)$/) || [];
  return path || url;
};
export const getUrlFromName = (type: string, name: string): string =>
  `/${type}/${name.replaceAll(' ', '-')}`;

const SORTING_OPTIONS: Record<'session' | 'vendor' | 'content' | 'sponsor' | 'speaker', string[]> =
  {
    content: ['featured_desc', 'featured_asc'],
    session: [
      'featured_desc',
      'featured_asc',
      'session_days_asc',
      'session_days_desc',
      'session_duration_asc',
      'session_duration_desc',
    ],
    vendor: ['featured_desc', 'featured_asc'],
    sponsor: ['featured_desc', 'featured_asc'],
    speaker: ['featured_desc', 'featured_asc'],
  };

export const getSortingOptions = (
  type: 'session' | 'vendor' | 'content' | 'sponsor' | 'speaker',
  options: ContentSearchResponseSortChoice[]
): ContentSearchResponseSortChoice[] =>
  options.filter(({ name }) => SORTING_OPTIONS[type].includes(name));

const list = <T>(l: T[]): T[] => l || [];

export const sessionAdapter = ({
  name,
  url,
  image_url,
  is_premium,
  rooms = [],
  days = [],
  speakers = [],
  time_slots = [],
}: ContentSearchSession): GraphQLSession => ({
  name: { value: name },
  premium: { value: is_premium },
  url: { path: getAbsoluteUrlPath(url) },
  image: {
    jsonValue: { value: { src: image_url } },
  },
  imageTransformation: {
    value: image_url,
  },
  speakers: {
    targetItems: list(speakers).map((value) => ({
      name: { value },
      jobTitle: { value: '' },
      url: {
        path: getUrlFromName('speaker', value),
      },
    })),
  },
  rooms: {
    targetItems: list(rooms).map((value) => ({
      name: { value },
    })),
  },
  day: {
    targetItems: list(days).map((value) => ({
      name: { value },
    })),
  },
  timeslots: {
    targetItems: list(time_slots).map((value) => ({
      name: { value },
    })),
  },
});

export const speakerAdapter = ({
  name,
  url,
  is_featured,
  image_url,
  job_title,
}: ContentSearchSpeaker): GraphQLSpeaker => ({
  name: { value: name },
  jobTitle: { value: job_title },
  featured: { value: is_featured },
  url: { path: getAbsoluteUrlPath(url) },
  picture: {
    jsonValue: { value: { src: image_url } },
  },
});

export const vendorAdapter = ({ name, url, level, image_url }: ContentSearchVendor): Vendor => ({
  url: getAbsoluteUrlPath(url),
  fields: {
    Name: { value: name },
    Level: { value: level },
    Logo: {
      value: { src: image_url },
    },
  },
});

export const sponsorAdapter = ({ name, url, image_url }: ContentSearchSponsor): Sponsor => ({
  url: getAbsoluteUrlPath(url),
  fields: {
    Name: { value: name },
    Logo: {
      value: { src: image_url },
    },
  },
});

export const newsAdapter = ({
  publish_date,
  excerpt,
  name,
  url,
  image_url,
}: ContentSearchNews): News => ({
  url: getAbsoluteUrlPath(url),
  name: { value: name },
  fields: {
    Title: { value: name },
    Excerpt: { value: excerpt },
    PublishDate: { value: publish_date },
    Image: {
      value: { src: image_url },
    },
  },
});

export type AsyncFunction<Result> = (...args: unknown[]) => Promise<Result>;

export const debounceAsync = <Result>(
  fn: AsyncFunction<Result>,
  wait: number
): AsyncFunction<Result> => {
  let timeoutId: NodeJS.Timeout | undefined;

  return function (...args: unknown[]): Promise<Result> {
    clearTimeout(timeoutId);

    return new Promise((resolve, reject) => {
      timeoutId = setTimeout(() => {
        fn(...args)
          .then(resolve)
          .catch(reject);
      }, wait);
    });
  };
};
