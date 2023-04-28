import React from 'react';
import { StoryFn, Meta } from '@storybook/react';
import { MockSlice, MockStore } from '../mock-store';
import { loggedInAuthSlice, cartSlice } from '../Checkout/CheckoutCommon';
import { product, specs, variants } from './ProductsCommon';
import ProductDetailsContent, {
  ProductDetailsContentProps,
} from '../../components/Products/ProductDetailsContent';

export default {
  title: 'Components/Products/ProductDetailsContent',
  component: ProductDetailsContent,
} as Meta<typeof ProductDetailsContent>;

const productSlices: MockSlice[] = [cartSlice, loggedInAuthSlice];

const Template: StoryFn<typeof ProductDetailsContent> = (args) => (
  <MockStore sliceOrSlices={productSlices}>
    <ProductDetailsContent {...args} />
  </MockStore>
);

export const Default = {
  render: Template,

  args: {
    product: product,
    specs: specs,
    variants: variants,
  },
};

export const OnSale = {
  render: Template,

  args: {
    product: {
      ...product,
      PriceSchedule: {
        ...product.PriceSchedule,
        PriceBreaks: [
          {
            Quantity: 1,
            Price: 15.99,
            SalePrice: 10.99,
          },
        ],
      },
    },
    specs: specs,
    variants: variants,
  },
};

export const RedSmall = {
  render: Template,

  args: {
    product: product,
    specs: specs,
    variants: variants,
    variantID: 'PSPRFSAW-RS',
  },
};

export const GreenMedium = {
  render: Template,

  args: {
    product: product,
    specs: specs,
    variants: variants,
    variantID: 'PSPRFSAW-GM',
  },
};

export const BlueLarge = {
  render: Template,

  args: {
    product: product,
    specs: specs,
    variants: variants,
    variantID: 'PSPRFSAW-BL',
  },
};

export const NoVariants = {
  render: Template,

  args: {
    product: product,
    specs: [specs[1]],
    variants: [],
  } as ProductDetailsContentProps,
};

export const NoImages = {
  render: Template,

  args: {
    product: {
      ...product,
      xp: {
        ...product.xp,
        Images: [],
      },
    },
    specs: specs,
    variants: [],
  } as ProductDetailsContentProps,
};
