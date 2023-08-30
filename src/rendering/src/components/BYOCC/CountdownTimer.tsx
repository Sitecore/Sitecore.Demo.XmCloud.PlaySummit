import * as FEAAS from '@sitecore-feaas/clientside/react';
import Timer from '../NonSitecore/Timer';

export default function CountdownTimer({
  date,
  useExpirationMessage,
  expirationTitle,
  expirationBody,
}: {
  date: string;
  useExpirationMessage: boolean;
  expirationTitle: string;
  expirationBody: string;
}) {
  const dateIsPast = new Date() >= new Date(date);

  const expirationMessage = (
    <div className="countdown-timer-expired-notice">
      <h2>{expirationTitle || 'Deal Expired... But Wait!'}</h2>
      <p>{expirationBody || "You still have the oportunity to join this year's PLAY! Summit."}</p>
    </div>
  );

  return (
    <div className="coundown-timer">
      {dateIsPast && useExpirationMessage ? expirationMessage : <Timer targetDate={date} />}
    </div>
  );
}

FEAAS.registerComponent(CountdownTimer, {
  name: 'Countdown Timer',
  description: 'Shows the time remaining until a certain date.',
  required: ['date'],
  properties: {
    date: {
      type: 'string',
      title: 'Date',
    },
    useExpirationMessage: {
      type: 'boolean',
      title: 'Use expiration message',
    },
    expirationTitle: {
      type: 'string',
      title: 'Expiration Message Title',
    },
    expirationBody: {
      type: 'string',
      title: 'Expiration Message Body',
    },
  },
  ui: {
    date: {
      type: 'string',
      title: 'Date',
      'ui:options': {
        inputType: 'date',
      },
    },
    useExpirationMessage: {
      type: 'boolean',
      title: 'Use expiration message',
    },
    expirationTitle: {
      type: 'string',
      title: 'Expiration Message Title',
    },
    expirationBody: {
      type: 'string',
      title: 'Expiration Message Body',
    },
  },
});
