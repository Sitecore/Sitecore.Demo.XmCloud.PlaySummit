import { QueryClient } from '@tanstack/react-query';
import { ContentSearchNews } from '../interfaces/contentSearch/ContentSearchNews';
import { ContentSearchWidgetResponseSortChoice } from '../interfaces/contentSearch/ContentSearchWidgetResponse';
import { ContentSearchSession } from '../interfaces/contentSearch/ContentSearchSession';
import { ContentSearchSpeaker } from '../interfaces/contentSearch/ContentSearchSpeaker';
import { ContentSearchSponsor } from '../interfaces/contentSearch/ContentSearchSponsor';
import { ContentSearchVendor } from '../interfaces/contentSearch/ContentSearchVendor';
import { News } from '../types/news';
import { GraphQLSession } from '../types/session';
import { GraphQLSpeaker } from '../types/speaker';
import { Sponsor } from '../types/sponsor';
import { Vendor } from '../types/vendor';
import { getAbsoluteUrlPath } from './UrlHelper';

export const SEARCH_PAGE = '/search';

export const queryClient = new QueryClient({
  defaultOptions: {
    queries: {
      keepPreviousData: true,
      refetchOnWindowFocus: false,
    },
  },
});

const getUrlFromName = (type: string, name: string): string =>
  `/${type}/${name.replaceAll(' ', '-')}`;

export const SESSION_SEARCH_RESULT_TYPE = 'session';
export const VENDOR_SEARCH_RESULT_TYPE = 'vendor';
export const SPONSOR_SEARCH_RESULT_TYPE = 'sponsor';
export const SPEAKER_SEARCH_RESULT_TYPE = 'speaker';
export const CONTENT_SEARCH_RESULT_TYPE = 'content';

export type SearchResultType = 'session' | 'vendor' | 'content' | 'sponsor' | 'speaker';

export const AUDIENCE_FACET_TYPE = 'audience';
export const IS_PREMIUM_FACET_TYPE = 'is_premium';
export const SPONSORS_FACET_TYPE = 'sponsors';
export const VENDORS_FACET_TYPE = 'vendors';
export const SPEAKERS_FACET_TYPE = 'speakers';
export const COMPANY_FACET_TYPE = 'company';
export const JOB_TITLE_FACET_TYPE = 'job_title';
export const LOCATION_FACET_TYPE = 'location';
export const SESSIONS_FACET_TYPE = 'sessions';
export const IS_FEATURED_FACET_TYPE = 'is_featured';
export const ACTIVITIES_FACET_TYPE = 'activities';
export const LEVEL_FACET_TYPE = 'level';

export const FEATURED_SORTING_OPTION = 'featured_desc';
export const SESSION_DAYS_ASC_SORTING_OPTION = 'session_days_asc';
export const SESSION_DAYS_DESC_SORTING_OPTION = 'session_days_desc';
export const SESSION_DURATION_ASC_SORTING_OPTION = 'session_duration_asc';
export const SESSION_DURATION_DESC_SORTING_OPTION = 'session_duration_desc';

const SORTING_OPTIONS: Record<SearchResultType, string[]> = {
  content: [FEATURED_SORTING_OPTION],
  session: [
    FEATURED_SORTING_OPTION,
    SESSION_DAYS_ASC_SORTING_OPTION,
    SESSION_DAYS_DESC_SORTING_OPTION,
    SESSION_DURATION_ASC_SORTING_OPTION,
    SESSION_DURATION_DESC_SORTING_OPTION,
  ],
  vendor: [FEATURED_SORTING_OPTION],
  sponsor: [FEATURED_SORTING_OPTION],
  speaker: [FEATURED_SORTING_OPTION],
};

export const getSortingOptions = (
  type: SearchResultType,
  options: ContentSearchWidgetResponseSortChoice[]
): ContentSearchWidgetResponseSortChoice[] =>
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
