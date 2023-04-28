import React from 'react';
import { StoryFn, Meta } from '@storybook/react';

import PanelShippingEstimates from '../../components/Checkout/PanelShippingEstimates';
import { MockStore } from '../mock-store';
import { DShipEstimateResponse } from 'src/models/ordercloud/DShipEstimateResponse';
import { shipMethods } from './CheckoutCommon';

export default {
  title: 'Components/Checkout/PanelShippingEstimates',
  component: PanelShippingEstimates,
} as Meta<typeof PanelShippingEstimates>;

const Template: StoryFn<typeof PanelShippingEstimates> = () => (
  <section className="checkout-details shop-container">
    <PanelShippingEstimates />
  </section>
);

const mockState = {
  initialized: true,
  shipEstimateResponse: {
    ShipEstimates: [
      {
        ID: 'STATIC_SINGLE_SHIPMENT',
        ShipEstimateItems: [
          {
            LineItemID: 'X001',
            Quantity: 2,
          },
        ],
        ShipMethods: shipMethods,
      },
    ],
    HttpStatusCode: 200,
    UnhandledErrorBody: null,
    xp: {},
  } as DShipEstimateResponse,
};

export const WithoutSelections = {
  render: Template,

  decorators: [
    (Story: StoryFn) => (
      <MockStore sliceOrSlices={{ name: 'ocCurrentCart', state: mockState }}>
        <Story />
      </MockStore>
    ),
  ],
};

const mockStateClone = JSON.parse(JSON.stringify(mockState));
mockStateClone.shipEstimateResponse.ShipEstimates[0].SelectedShipMethodID = 'EXPRESS_DELIVERY';

export const WithSelections = {
  render: Template,

  decorators: [
    (Story: StoryFn) => (
      <MockStore sliceOrSlices={{ name: 'ocCurrentCart', state: mockStateClone }}>
        <Story />
      </MockStore>
    ),
  ],
};
