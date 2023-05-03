import React from 'react';
import { StoryFn, Meta } from '@storybook/react';
import ProductImage, { ProductImageProps } from '../../components/Products/ProductImage';
import { cartState } from '../Checkout/CheckoutCommon';

export default {
  title: 'Components/Products/ProductImage',
  component: ProductImage,
} as Meta<typeof ProductImage>;

const Template: StoryFn<typeof ProductImage> = (args) => (
  <div className="product-details">
    <div className="product-details-hero">
      <ProductImage {...args} />
    </div>
  </div>
);

const image1 = cartState.lineItems[0].Product.xp.Images[0].Url;
const image2 = cartState.lineItems[1].Product.xp.Images[0].Url;
const image3 = cartState.lineItems[2].Product.xp.Images[0].Url;

export const Zero = {
  render: Template,

  args: {
    images: [],
  } as ProductImageProps,
};

export const One = {
  render: Template,

  args: {
    images: [
      {
        Url: image1,
      },
    ],
  },
};

export const Two = {
  render: Template,

  args: {
    images: [
      {
        Url: image1,
      },
      {
        Url: image2,
      },
    ],
  },
};

export const Three = {
  render: Template,

  args: {
    images: [
      {
        Url: image1,
      },
      {
        Url: image2,
      },
      {
        Url: image3,
      },
    ],
  },
};

export const Duplicates = {
  render: Template,

  args: {
    images: [
      {
        Url: image1,
      },
      {
        Url: image1,
      },
      {
        Url: image1,
      },
    ],
  },
};
