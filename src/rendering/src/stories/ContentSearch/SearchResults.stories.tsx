import { Meta, StoryFn } from '@storybook/react';
import React from 'react';

import SearchProvider from '../../components/ContentSearch/SearchProvider';
import SearchResults from '../../components/ContentSearch/SearchResults';
import { filterOptionsProp, tabsProp } from '../mock-search-data';

export default {
  title: 'Components/ContentSearch/SearchResults',
  component: SearchResults,
} as Meta<typeof SearchResults>;

const Template: StoryFn<typeof SearchResults> = (args) => (
  <SearchProvider keyphrase="test">
    <SearchResults {...args}>My content</SearchResults>
  </SearchProvider>
);

export const Default = {
  render: Template,

  args: {
    filterOptions: filterOptionsProp,
    tabs: tabsProp,
  },
};
