import { ComponentMeta, ComponentStory } from '@storybook/react';
import React from 'react';

import SearchFilters from '../../components/Search/SearchFilters';
import { filterOptionsProp } from '../mock-search-data';

export default {
  title: 'Components/Search/SearchFilters',
  component: SearchFilters,
} as ComponentMeta<typeof SearchFilters>;

const Template: ComponentStory<typeof SearchFilters> = (args) => <SearchFilters {...args} />;

export const Default = Template.bind({});
Default.args = {
  options: filterOptionsProp,
};
