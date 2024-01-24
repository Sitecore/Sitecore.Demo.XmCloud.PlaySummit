import { getPublicUrl } from '@sitecore-jss/sitecore-jss-nextjs/utils';

export const getAbsoluteUrlPath = (url: string): string => {
  const [, path] = String(url).match(/^https?:\/\/[^/]+(.+)$/) || [];
  return path || url;
};

export const getMediaSitePublicUrl = (): string => {
  const websiteUrl = getPublicUrl();

  return websiteUrl.includes('website') ? websiteUrl.replace('website', 'media') : websiteUrl;
};

export const getSearchItemHref = (type: string, url: string): string =>
  type === 'event' || type === 'athlete'
    ? `${getMediaSitePublicUrl()}${getAbsoluteUrlPath(url)}`
    : getAbsoluteUrlPath(url);
