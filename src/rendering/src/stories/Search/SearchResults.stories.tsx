import { ComponentMeta, ComponentStory } from '@storybook/react';
import React from 'react';

import SearchProvider from '../../components/Search/SearchProvider';
import SearchResults from '../../components/Search/SearchResults';
import { filterOptionsProp, tabsProp } from '../mock-search-data';

export default {
  title: 'Components/Search/SearchResults',
  component: SearchResults,
} as ComponentMeta<typeof SearchResults>;

const Template: ComponentStory<typeof SearchResults> = (args) => (
  <SearchProvider keyphrase="test">
    <SearchResults {...args}>My content</SearchResults>
  </SearchProvider>
);

export const Default = Template.bind({});
Default.args = {
  filterOptions: filterOptionsProp,
  tabs: tabsProp,
};
