import { Meta } from '@storybook/react';

import Price from '../../components/ShopCommon/Price';

export default {
  title: 'Components/ShopCommon/Price',
  component: Price,
} as Meta<typeof Price>;

const baseArgs = {
  price: 16.99,
  finalPrice: 16.99,
};

export const Default = {
  args: {
    ...baseArgs,
  },
};

export const Loading = {
  args: {
    ...baseArgs,
    loading: true,
  },
};

export const WithDiscount = {
  args: {
    ...baseArgs,
    finalPrice: 12.99,
  },
};

export const SizeLarge = {
  args: {
    ...baseArgs,
    finalPrice: 12.99,
    sizeL: true,
  },
};

export const AlternativeTheme = {
  args: {
    ...baseArgs,
    finalPrice: 12.99,
    altTheme: true,
  },
};

export const RangePrice = {
  args: {
    ...baseArgs,
    max: 16.99,
    min: 12.99,
  },
};
