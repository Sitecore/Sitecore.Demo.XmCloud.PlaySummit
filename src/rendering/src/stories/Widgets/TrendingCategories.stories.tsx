import { Meta } from '@storybook/react';

import TrendingCategories from '../../components/Widgets/TrendingCategories';
import { mockDiscoverData } from '../mock-discover-data';

export default {
  title: 'Components/Widgets/TrendingCategories',
  component: TrendingCategories,
} as Meta<typeof TrendingCategories>;

export const Default = {
  args: mockDiscoverData.trendingCategoriesProps,
};
