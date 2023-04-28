import { Meta } from '@storybook/react';

import ProductBreadcrumb from '../../components/Navigation/ProductBreadcrumb';

export default {
  title: 'Components/Navigation/ProductBreadcrumb',
  component: ProductBreadcrumb,
} as Meta<typeof ProductBreadcrumb>;

export const RootCategoryProduct = {
  args: {
    productName: 'Activities best seller',
    productUrl: '',
    ccid: 'PSA0',
  },
};

export const FirstLevelCategoryProduct = {
  args: {
    productName: 'Running best seller',
    productUrl: '',
    ccid: 'PSAR',
  },
};

export const SecondLevelCategoryProduct = {
  args: {
    productName: 'Running Accessories best seller',
    productUrl: '',
    ccid: 'PSARA',
  },
};
