import { Meta } from '@storybook/react';

import ShipMethodsList from '../../components/Checkout/ShipMethodsList';
import { shipMethods } from './CheckoutCommon';

export default {
  title: 'Components/Checkout/ShipMethodsList',
  component: ShipMethodsList,
} as Meta<typeof ShipMethodsList>;

const commonProps = {
  shipMethods: shipMethods,
  shipEstimateId: 'STATIC_SINGLE_SHIPMENT',
};

export const Loading = {
  args: {
    ...commonProps,
    loading: true,
  },
};

export const WithoutSelections = {
  args: commonProps,
};

export const WithSelections = {
  args: {
    ...commonProps,
    selectedShipMethodId: 'EXPRESS_DELIVERY',
  },
};
