import React from 'react';
import { StoryFn, Meta } from '@storybook/react';

import CheckoutDetails from '../../components/Checkout/CheckoutDetails';
import { MockStore } from '../mock-store';
import { getMockExpirationDate } from '../utils';
import {
  addressBookSlice,
  addressBookState,
  anonymousAuthSlice,
  emptyAddressBookSlice,
  loggedInAuthSlice,
} from './CheckoutCommon';
import { DeliveryTypes } from '../../models/ordercloud/DOrder';

export default {
  title: 'Components/Checkout/CheckoutDetails',
  component: CheckoutDetails,
} as Meta<typeof CheckoutDetails>;

const Template: StoryFn<typeof CheckoutDetails> = () => <CheckoutDetails />;

export const NoLineItems = {
  render: Template,

  decorators: [
    (Story: StoryFn) => (
      <MockStore
        sliceOrSlices={[{ name: 'ocCurrentCart', state: noLineItemsState }, loggedInAuthSlice]}
      >
        <Story />
      </MockStore>
    ),
  ],
};

const noLineItemsState = {
  initialized: true,
  order: {
    LineItemCount: 0,
  },
};

export const Loading = {
  render: Template,

  decorators: [
    (Story: StoryFn) => (
      <MockStore
        sliceOrSlices={[{ name: 'ocCurrentCart', state: loadingState }, loggedInAuthSlice]}
      >
        <Story />
      </MockStore>
    ),
  ],
};

const loadingState = {
  initialized: false,
};

const noStepsCompleteOrderState = {
  initialized: true,
  order: {
    ID: 'mockid123',
    Subtotal: 123.45,
    ShippingCost: 0,
    Total: 123.45,
    LineItemCount: 1,
    xp: {
      DeliveryType: DeliveryTypes.Ship,
    },
  },
};

export const NoStepsCompleteAsGuest = {
  render: Template,

  decorators: [
    (Story: StoryFn) => (
      <MockStore
        sliceOrSlices={[
          { name: 'ocCurrentCart', state: noStepsCompleteOrderState },
          anonymousAuthSlice,
          emptyAddressBookSlice,
        ]}
      >
        <Story />
      </MockStore>
    ),
  ],
};

export const NoStepsCompleteWithoutSavedAddresses = {
  render: Template,

  decorators: [
    (Story: StoryFn) => (
      <MockStore
        sliceOrSlices={[
          { name: 'ocCurrentCart', state: noStepsCompleteOrderState },
          loggedInAuthSlice,
          emptyAddressBookSlice,
        ]}
      >
        <Story />
      </MockStore>
    ),
  ],
};

export const NoStepsCompleteWithSavedAddresses = {
  render: Template,

  decorators: [
    (Story: StoryFn) => (
      <MockStore
        sliceOrSlices={[
          { name: 'ocCurrentCart', state: noStepsCompleteOrderState },
          loggedInAuthSlice,
          addressBookSlice,
        ]}
      >
        <Story />
      </MockStore>
    ),
  ],
};

export const ShippingCompleteAsGuest = {
  render: Template,

  decorators: [
    (Story: StoryFn) => (
      <MockStore
        sliceOrSlices={[
          { name: 'ocCurrentCart', state: shippingCompleteAsGuestState },
          anonymousAuthSlice,
          emptyAddressBookSlice,
        ]}
      >
        <Story />
      </MockStore>
    ),
  ],
};

const shippingCompleteAsGuestState = {
  ...noStepsCompleteOrderState,
  shippingAddress: {
    ID: '',
    FirstName: 'Marty',
    LastName: 'Byrde',
    Street1: '789 another boulevard',
    City: 'Big City',
    State: 'GA',
    Zip: '30542',
    Country: 'US',
  },
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
        ShipMethods: [
          {
            ID: 'STANDARD_DELIVERY',
            Name: 'Standard Delivery',
            Cost: 0,
            EstimatedTransitDays: 3,
            xp: {
              Description: 'Receive your order at your home in 3-5 business days',
            },
          },
          {
            ID: 'EXPRESS_DELIVERY',
            Name: 'Express Delivery',
            Cost: 4.99,
            EstimatedTransitDays: 2,
            xp: {
              Description: 'Receive your order at your home in 1-2 business days',
            },
          },
          {
            ID: 'ONEDAY_DELIVERY',
            Name: 'One day delivery',
            Cost: 9.99,
            EstimatedTransitDays: 2,
            xp: {
              Description: 'Receive your order at your home the next business day',
            },
          },
        ],
      },
    ],
  },
};

export const ShippingCompleteWithoutSavedAddresses = {
  render: Template,

  decorators: [
    (Story: StoryFn) => (
      <MockStore
        sliceOrSlices={[
          { name: 'ocCurrentCart', state: shippingCompleteWithoutSavedAddressState },
          loggedInAuthSlice,
          emptyAddressBookSlice,
        ]}
      >
        <Story />
      </MockStore>
    ),
  ],
};

const shippingCompleteWithoutSavedAddressState = {
  ...noStepsCompleteOrderState,
  shippingAddress: {
    ID: '',
    FirstName: 'Marty',
    LastName: 'Byrde',
    Street1: '789 another boulevard',
    City: 'Big City',
    State: 'GA',
    Zip: '30542',
    Country: 'US',
  },
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
        ShipMethods: [
          {
            ID: 'STANDARD_DELIVERY',
            Name: 'Standard Delivery',
            Cost: 0,
            EstimatedTransitDays: 3,
            xp: {
              Description: 'Receive your order at your home in 3-5 business days',
            },
          },
          {
            ID: 'EXPRESS_DELIVERY',
            Name: 'Express Delivery',
            Cost: 4.99,
            EstimatedTransitDays: 2,
            xp: {
              Description: 'Receive your order at your home in 1-2 business days',
            },
          },
          {
            ID: 'ONEDAY_DELIVERY',
            Name: 'One day delivery',
            Cost: 9.99,
            EstimatedTransitDays: 2,
            xp: {
              Description: 'Receive your order at your home the next business day',
            },
          },
        ],
      },
    ],
  },
};

export const ShippingCompleteWithSavedAddressSelected = {
  render: Template,

  decorators: [
    (Story: StoryFn) => (
      <MockStore
        sliceOrSlices={[
          { name: 'ocCurrentCart', state: shippingCompleteWithSavedAddressSelectedState },
          loggedInAuthSlice,
          addressBookSlice,
        ]}
      >
        <Story />
      </MockStore>
    ),
  ],
};

const shippingCompleteWithSavedAddressSelectedState = {
  ...noStepsCompleteOrderState,
  shippingAddress: {
    ...addressBookState.addresses.entities['MPcTM2MNzEWi06gLhfMLvQ'],
  },
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
        ShipMethods: [
          {
            ID: 'STANDARD_DELIVERY',
            Name: 'Standard Delivery',
            Cost: 0,
            EstimatedTransitDays: 3,
            xp: {
              Description: 'Receive your order at your home in 3-5 business days',
            },
          },
          {
            ID: 'EXPRESS_DELIVERY',
            Name: 'Express Delivery',
            Cost: 4.99,
            EstimatedTransitDays: 2,
            xp: {
              Description: 'Receive your order at your home in 1-2 business days',
            },
          },
          {
            ID: 'ONEDAY_DELIVERY',
            Name: 'One day delivery',
            Cost: 9.99,
            EstimatedTransitDays: 2,
            xp: {
              Description: 'Receive your order at your home the next business day',
            },
          },
        ],
      },
    ],
  },
};

export const ShippingCompleteWithSavedAddressNewAddressSelected = {
  render: Template,

  decorators: [
    (Story: StoryFn) => (
      <MockStore
        sliceOrSlices={[
          { name: 'ocCurrentCart', state: shippingCompleteWithSavedAddressNewAddressSelectedState },
          loggedInAuthSlice,
          addressBookSlice,
        ]}
      >
        <Story />
      </MockStore>
    ),
  ],
};

const shippingCompleteWithSavedAddressNewAddressSelectedState = {
  ...noStepsCompleteOrderState,
  shippingAddress: {
    ID: '',
    FirstName: 'Marty',
    LastName: 'Byrde',
    Street1: '789 another boulevard',
    City: 'Big City',
    State: 'GA',
    Zip: '30542',
    Country: 'US',
  },
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
        ShipMethods: [
          {
            ID: 'STANDARD_DELIVERY',
            Name: 'Standard Delivery',
            Cost: 0,
            EstimatedTransitDays: 3,
            xp: {
              Description: 'Receive your order at your home in 3-5 business days',
            },
          },
          {
            ID: 'EXPRESS_DELIVERY',
            Name: 'Express Delivery',
            Cost: 4.99,
            EstimatedTransitDays: 2,
            xp: {
              Description: 'Receive your order at your home in 1-2 business days',
            },
          },
          {
            ID: 'ONEDAY_DELIVERY',
            Name: 'One day delivery',
            Cost: 9.99,
            EstimatedTransitDays: 2,
            xp: {
              Description: 'Receive your order at your home the next business day',
            },
          },
        ],
      },
    ],
  },
};

export const ShippingEstimatesComplete = {
  render: Template,

  decorators: [
    (Story: StoryFn) => (
      <MockStore
        sliceOrSlices={[
          { name: 'ocCurrentCart', state: shippingEstimatesCompleteState },
          loggedInAuthSlice,
          emptyAddressBookSlice,
        ]}
      >
        <Story />
      </MockStore>
    ),
  ],
};

const shippingEstimatesCompleteState = {
  ...shippingCompleteWithSavedAddressSelectedState,
  shipEstimateResponse: {
    ...shippingCompleteWithSavedAddressSelectedState.shipEstimateResponse,
    ShipEstimates: [
      {
        ...shippingCompleteWithSavedAddressSelectedState.shipEstimateResponse.ShipEstimates[0],
        SelectedShipMethodID: 'EXPRESS_DELIVERY',
      },
    ],
  },
  order: {
    ...shippingCompleteWithSavedAddressSelectedState.order,
    ShippingCost: 4.99,
    Total: 128.44,
  },
};

export const BillingAddressComplete = {
  render: Template,

  decorators: [
    (Story: StoryFn) => (
      <MockStore
        sliceOrSlices={[
          { name: 'ocCurrentCart', state: billingAddressCompleteState },
          loggedInAuthSlice,
          emptyAddressBookSlice,
        ]}
      >
        <Story />
      </MockStore>
    ),
  ],
};

const billingAddressCompleteState = {
  ...shippingEstimatesCompleteState,
  order: {
    ...shippingEstimatesCompleteState.order,
    BillingAddress: {
      ...addressBookState.addresses.entities['MPcTM2MNzEWi06gLhfMLvQ'],
    },
  },
};

export const PaymentComplete = {
  render: Template,

  decorators: [
    (Story: StoryFn) => (
      <MockStore
        sliceOrSlices={[
          { name: 'ocCurrentCart', state: paymentCompleteState },
          loggedInAuthSlice,
          emptyAddressBookSlice,
        ]}
      >
        <Story />
      </MockStore>
    ),
  ],
};

const paymentCompleteState = {
  ...billingAddressCompleteState,
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
  ],
};

export const PickupFromSummit = {
  render: Template,

  decorators: [
    (Story: StoryFn) => (
      <MockStore
        sliceOrSlices={[
          { name: 'ocCurrentCart', state: pickupFromSummitState },
          loggedInAuthSlice,
          emptyAddressBookSlice,
        ]}
      >
        <Story />
      </MockStore>
    ),
  ],
};

const pickupFromSummitState = {
  ...paymentCompleteState,
  shippingAddress: {
    AddressName: 'Play! Summit',
    Street1: '101 California St',
    Street2: 'St #1600',
    City: 'San Francisco',
    State: 'CA',
    Country: 'US',
    Zip: '94111',
  },
  order: {
    ...paymentCompleteState.order,
    xp: {
      DeliveryType: DeliveryTypes.PickupFromSummit,
    },
  },
};

export const PickupFromStore = {
  render: Template,

  decorators: [
    (Story: StoryFn) => (
      <MockStore
        sliceOrSlices={[
          { name: 'ocCurrentCart', state: pickupFromStoreState },
          loggedInAuthSlice,
          emptyAddressBookSlice,
        ]}
      >
        <Story />
      </MockStore>
    ),
  ],
};

const pickupFromStoreState = {
  ...paymentCompleteState,
  shippingAddress: {
    AddressName: 'Store #1234',
    Street1: '110 N. 5th St #300',
    City: 'Minneapolis',
    State: 'MN',
    Country: 'US',
    Zip: '55403',
  },
  order: {
    ...paymentCompleteState.order,
    xp: {
      DeliveryType: DeliveryTypes.PickupInStore,
    },
  },
};
