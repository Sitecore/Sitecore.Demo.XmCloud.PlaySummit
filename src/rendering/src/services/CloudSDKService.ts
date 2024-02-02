import { EPResponse } from '@sitecore-cloudsdk/core';
import { IdentityEventAttributesInput } from '@sitecore-cloudsdk/events/browser';

import { context } from 'lib/context';
import config from 'temp/config';

const channel = 'WEB';
const currency = 'USD';
const language = (
  typeof window !== 'undefined' ? window?.navigator?.language : config.defaultLanguage
)?.slice(0, 2);

const isDisabled = process.env.NODE_ENV === 'development';

export const identifyVisitor = async (
  email: string,
  firstName = '',
  lastName = '',
  phone = ''
): Promise<EPResponse> => {
  if (isDisabled) {
    console.warn('IDENTITY CDP event not available in development mode');
    return null;
  }

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
  return await Events.identity(eventData);
};

export const logAudiencePreferenceEvent = async (audience: string): Promise<EPResponse> => {
  if (isDisabled) {
    console.warn('AUDIENCE_PREFERENCE CDP event not available in development mode');
    return null;
  }

  const Events = await context.getSDK('Events');
  return await Events.event(
    'AUDIENCE_PREFERENCE',
    {
      channel,
      currency,
    },
    { audience }
  );
};
