import { Meta } from '@storybook/react';

import SearchFilters from '../../components/ContentSearch/SearchFilters';
import { filterOptionsProp } from '../mock-search-data';

export default {
  title: 'Components/ContentSearch/SearchFilters',
  component: SearchFilters,
} as Meta<typeof SearchFilters>;

export const Default = {
  args: {
    options: filterOptionsProp,
  },
};
