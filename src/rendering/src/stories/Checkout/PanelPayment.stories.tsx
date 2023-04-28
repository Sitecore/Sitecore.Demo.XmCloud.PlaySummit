import React from 'react';
import { StoryFn, Meta } from '@storybook/react';
import PanelPayment from '../../components/Checkout/PanelPayment';
import { DPayment } from 'src/models/ordercloud/DPayment';
import { MockStore } from '../mock-store';
import { getMockExpirationDate } from '../utils';

export default {
  title: 'Components/Checkout/PanelPayment',
  component: PanelPayment,
} as Meta<typeof PanelPayment>;

const Template: StoryFn<typeof PanelPayment> = () => (
  <section className="checkout-details shop-container">
    <PanelPayment />
  </section>
);

export const WithSavedPayment = {
  render: Template,
  args: {},

  decorators: [
    (Story: StoryFn) => (
      <MockStore sliceOrSlices={{ name: 'ocCurrentCart', state: mockStateSavedPayment }}>
        <Story />
      </MockStore>
    ),
  ],
};

const mockStateSavedPayment = {
  initialized: true,
  order: {
    ID: 'mock-id',
    Total: 100,
  },
  payments: [
    {
      ID: 'mockpaymentid',
      Type: 'CreditCard',
      CreditCardID: 'mock-creditcard-id',
      Accepted: true,
      Amount: 100,
      xp: {
        CreditCard: {
          ID: 'mockcreditcardid',
          CardType: 'Visa',
          CardholderName: 'Jon Snow',
          PartialAccountNumber: '6123',
          ExpirationDate: getMockExpirationDate(),
        },
      },
    },
  ] as DPayment[],
};

export const WithoutSavedPayment = {
  render: Template,
  args: {},

  decorators: [
    (Story: StoryFn) => (
      <MockStore sliceOrSlices={{ name: 'ocCurrentCart', state: mockStateNoSavedPayment }}>
        <Story />
      </MockStore>
    ),
  ],
};

const mockStateNoSavedPayment = {
  initialized: true,
  order: {
    ID: 'mock-id',
    Total: 100,
  },
  payments: [] as DPayment[],
};
