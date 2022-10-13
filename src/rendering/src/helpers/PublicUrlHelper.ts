import { getPublicUrl } from '@sitecore-jss/sitecore-jss-nextjs';

export const getPublicImgUrl = (): string => {
  let url = getPublicUrl();
  if (url === 'http://localhost:3000') {
    url = '';
  }

  return url;
};
