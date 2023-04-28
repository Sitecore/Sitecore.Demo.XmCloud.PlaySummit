import { Meta } from '@storybook/react';

import CategoriesList from '../../components/Products/CategoriesList';
import { initialize as initializeDiscover } from '../../services/DiscoverService';
import { mockDiscoverData } from '../mock-discover-data';

export default {
  title: 'Components/Products/CategoriesList',
  component: CategoriesList,
} as Meta<typeof CategoriesList>;

initializeDiscover({
  isStorybook: true,
});

export const Default = {
  args: {
    title: 'Welcome to PLAY! SHOP',
    subtitle: 'Shop by category:',
    theme: 'blue',
    trendingCategoriesProps: mockDiscoverData.trendingCategoriesProps,
  },
};
