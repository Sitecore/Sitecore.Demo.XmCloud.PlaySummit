import { ComponentMeta, ComponentStory } from '@storybook/react';
import React from 'react';

import SearchFilter from '../../components/ContentSearch/SearchFilter';
import { filterOptionsProp } from '../mock-search-data';

export default {
  title: 'Components/ContentSearch/SearchFilter',
  component: SearchFilter,
} as ComponentMeta<typeof SearchFilter>;

const Template: ComponentStory<typeof SearchFilter> = (args) => <SearchFilter {...args} />;

export const Default = Template.bind({});
Default.args = {
  name: 'Schedule',
  options: filterOptionsProp.schedule,
};
