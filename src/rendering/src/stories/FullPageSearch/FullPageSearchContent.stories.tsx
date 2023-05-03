import { Meta } from '@storybook/react';

import FullPageSearchContent from '../../components/FullPageSearch/FullPageSearchContent';
import { mockDiscoverData } from '../mock-discover-data';
import { getCategoryByUrlPath } from '../../helpers/CategoriesDataHelper';

export default {
  title: 'Components/FullPageSearch/FullPageSearchContent',
  component: FullPageSearchContent,
} as Meta<typeof FullPageSearchContent>;

export const Default = {
  args: {
    ...mockDiscoverData.fullPageSearchProps,
    category: getCategoryByUrlPath('/shop/categories/PSA0/activities'),
  },
};

export const CategoryListingPageFound = {
  args: {
    ...mockDiscoverData.fullPageSearchProps,
    rfkId: 'rfkid_10',
    category: getCategoryByUrlPath('/shop/categories/PSA0/activities'),
  },
};

export const CategoryListingPageNotFound = {
  args: {
    ...mockDiscoverData.fullPageSearchProps,
    rfkId: 'rfkid_10',
    category: getCategoryByUrlPath(''),
  },
};
