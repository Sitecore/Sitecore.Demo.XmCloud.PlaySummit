import { getPublicUrl } from '@sitecore-jss/sitecore-jss-nextjs/utils';

export const getPublicAssetUrl = (): string => {
  const DEFAULT_PUBLIC_URL = 'http://localhost:3000';

  let url = getPublicUrl();
  if (url === DEFAULT_PUBLIC_URL) {
    url = '';
  }

  return url;
};
