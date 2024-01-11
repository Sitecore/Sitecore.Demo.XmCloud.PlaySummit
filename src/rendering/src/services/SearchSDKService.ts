import { Environment } from '@sitecore-search/react';

export const config = {
  env: process.env.NEXT_PUBLIC_SEARCH_ENV as Environment,
  customerKey: process.env.NEXT_PUBLIC_SEARCH_CUSTOMER_KEY,
  apiKey: process.env.NEXT_PUBLIC_SEARCH_API_KEY,
  publicSuffix: true,
};

export const isSearchSDKEnabled = config.env && config.customerKey && config.apiKey ? true : false;
