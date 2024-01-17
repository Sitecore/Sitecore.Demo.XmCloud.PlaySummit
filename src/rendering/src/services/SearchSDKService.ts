import { Environment } from '@sitecore-search/react';
import Cookies from 'js-cookie';

export const config = {
  env: process.env.NEXT_PUBLIC_SEARCH_ENV as Environment,
  customerKey: process.env.NEXT_PUBLIC_SEARCH_CUSTOMER_KEY,
  apiKey: process.env.NEXT_PUBLIC_SEARCH_API_KEY,
  publicSuffix: true,
};

export const isSearchSDKEnabled = config.env && config.customerKey && config.apiKey ? true : false;

export const fetchUserProfileData = async () => {
  const request = {
    entities: [
      {
        entity_type: 'content',
        events: [] as unknown[],
        keyword: [] as unknown[],
        affinity: [] as unknown[],
      },
    ],
    personalization: 2,
  };
  const idType = 'uuid';
  const uuid = Cookies.get('__rutma').split('.')[0];

  const params = new URLSearchParams({
    request: JSON.stringify(request),
    id: uuid,
    id_type: idType,
  });

  const url = `https://discover.sitecorecloud.io/portal/${
    config.customerKey.split('-')[1]
  }/v4/data/user-profile?${params}`;

  const res = await fetch(url, {
    method: 'GET',
    mode: 'cors',
    headers: {
      Authorization: config.apiKey,
      Accept: 'application/json',
      'Content-Type': 'application/json',
    },
  });
  const data = await res.json();
  return data;
};
