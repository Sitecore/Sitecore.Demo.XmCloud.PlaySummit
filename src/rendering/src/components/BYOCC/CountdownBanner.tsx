import * as FEAAS from '@sitecore-feaas/clientside/react';

export default function CountdownBanner({ date }: { date: Date }) {
  return <p>CountdownBanner. Date: {date?.toDateString()}</p>;
}

FEAAS.registerComponent(CountdownBanner, {
  name: 'CountdownBanner',
  description: 'Description of CountdownBanner.',
  required: ['date'],
  properties: {
    date: {
      type: 'Date',
      title: 'Date',
    },
  },
  ui: {
    date: {
      type: 'Date',
      title: 'Date',
      'ui:options': {
        inputType: 'date',
      },
    },
  },
});
