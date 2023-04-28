import { Meta } from '@storybook/react';

import SearchFilter from '../../components/ContentSearch/SearchFilter';
import { filterOptionsProp } from '../mock-search-data';

export default {
  title: 'Components/ContentSearch/SearchFilter',
  component: SearchFilter,
} as Meta<typeof SearchFilter>;

export const Default = {
  args: {
    name: 'Schedule',
    options: filterOptionsProp.schedule,
  },
};
