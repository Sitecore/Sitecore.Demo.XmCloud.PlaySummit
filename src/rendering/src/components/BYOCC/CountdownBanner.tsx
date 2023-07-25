import * as FEAAS from '@sitecore-feaas/clientside/react';

export default function CountdownBanner({ date }: { date: Date }) {
  /*your component body*/
  return <p>CountdownBanner. Date: {date.toDateString()}</p>;
}

FEAAS.registerComponent(CountdownBanner, {
  name: 'CountdownBanner',
  description: 'Description of CountdownBanner.',
  required: [
    /* any required props */
  ],
  properties: {
    /* your component props */
  },
  ui: {
    /* any ui configuration for the inputs form rendered in the builder */
  },
});
