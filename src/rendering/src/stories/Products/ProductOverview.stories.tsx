import { Meta } from '@storybook/react';
import ProductOverview from '../../components/Products/ProductOverview';

export default {
  title: 'Components/Products/ProductOverview',
  component: ProductOverview,
} as Meta<typeof ProductOverview>;

const mockDescription =
  'Lorem ipsum, dolor sit amet consectetur adipisicing elit. Debitis ducimus ipsam molestiae laudantium ut iure autem asperiores cumque ad voluptatum! Perferendis, laudantium sequi? Fugiat similique laborum a at sint nostrum, explicabo totam quidem sequi delectus voluptas molestiae dolor. Rerum mollitia quisquam omnis nobis suscipit non nihil. Odio tempore ut nemo.';

const items = [
  {
    heading: 'Full Desription',
    description: mockDescription,
    disabled: false,
  },
  {
    heading: 'Product Details',
    description: mockDescription,
    disabled: false,
  },
  {
    heading: 'Delivery Info',
    description: mockDescription,
    disabled: false,
  },
  {
    heading: 'Return Policy',
    description: mockDescription,
    disabled: true,
  },
];

export const Default = {
  args: {
    items,
  },
};

export const Loading = {
  args: {
    items,
    loading: true,
  },
};
