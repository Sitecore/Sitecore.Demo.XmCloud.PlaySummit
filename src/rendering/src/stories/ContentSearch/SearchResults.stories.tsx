import { Meta, StoryFn } from '@storybook/react';
import React from 'react';

import SearchResults from '../../components/ContentSearch/SearchResults';
import { filterOptionsProp, tabsProp } from '../mock-search-data';

export default {
  title: 'Components/ContentSearch/SearchResults',
  component: SearchResults,
} as Meta<typeof SearchResults>;

const Template: StoryFn<typeof SearchResults> = (args) => (
  <SearchResults {...args}>My content</SearchResults>
);

export const Default = {
  render: Template,

  args: {
    filterOptions: filterOptionsProp,
    tabs: tabsProp,
  },
};
