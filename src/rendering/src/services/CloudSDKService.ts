import { EPResponse } from '@sitecore-cloudsdk/core';
import { IdentityEventAttributesInput } from '@sitecore-cloudsdk/events/browser';

import { context } from 'lib/context';
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
    'AUDIENCE_PREFERENCE',
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
