import { EPResponse } from '@sitecore-cloudsdk/core';
import { IdentityEventAttributesInput } from '@sitecore-cloudsdk/events/browser';
import Cookies from 'js-cookie';

import { context } from 'lib/context';
import { CDP_CUSTOM_EVENTS } from 'src/constants/cdp-custom-events';
import { TICKETS } from 'src/models/mock-tickets';
import config from 'temp/config';

const channel = 'WEB';
const currency = 'USD';
const language = (
  typeof window !== 'undefined' ? window?.navigator?.language : config.defaultLanguage
)?.slice(0, 2);

export const identifyVisitor = async (
  email: string,
  firstName = '',
  lastName = '',
  phone = ''
): Promise<EPResponse> => {
  const eventData: IdentityEventAttributesInput = {
    email,
    channel,
    currency,
    language,
    firstName,
    lastName,
    phone,
    page: window?.location?.pathname + window?.location?.search,
    identifiers: [
      {
        id: email,
        provider: 'email',
      },
    ],
  };

  const Events = await context.getSDK('Events');
  return Events?.identity(eventData);
};

export const logAudiencePreferenceEvent = async (audience: string): Promise<EPResponse> => {
  const Events = await context.getSDK('Events');
  return Events?.event(
    CDP_CUSTOM_EVENTS.audiencePreference.type,
    {
      channel,
      currency,
    },
    { audience }
  );
};

export const logTicketPurchase = async (ticketId: number): Promise<EPResponse> => {
  const purchasedTicketItem = TICKETS[ticketId];

  const Events = await context.getSDK('Events');
  return Events?.event(
    'TICKET_PURCHASE',
    {
      channel,
      currency,
    },
    { ticketId, ticketName: purchasedTicketItem.name, pricePaid: purchasedTicketItem.price }
  );
};

export const logSearchProfileData = async (payload: {
  entities: [
    {
      affinity: { audience: [{ value: string; score: number }] };
      events: { views: [{ id: string }] };
    }
  ];
}): Promise<EPResponse> => {
  // Transform the affinity scores & page views into suitable forms for the guest data extension
  const affinities = payload?.entities?.[0].affinity?.audience?.reduce(
    (obj, item) => (
      (obj[
        item.value
          .split(' ')
          .map((x, index) => (index === 0 ? x.toLowerCase() : x))
          .join('')
      ] = Math.round((item.score + Number.EPSILON) * 100) / 100),
      obj
    ),
    {} as Record<string, number>
  );

  const pageViews = payload?.entities?.[0].events?.views
    ?.slice(0, 5)
    .reduce(
      (obj, item, index) => ((obj[`page${index + 1}`] = sessionStorage.getItem(item.id)), obj),
      {} as Record<string, string>
    );

  const extensionData = {
    uuid: Cookies.get('__rutma').split('.')[0],
    ...affinities,
    ...pageViews,
  };

  const Events = await context.getSDK('Events');
  return Events?.event(
    'SEARCH_PROFILE_DATA',
    {
      channel,
      currency,
    },
    { ...extensionData }
  );
};
