import { Meta, StoryFn } from '@storybook/react';
import React from 'react';

import SearchProvider from '../../components/ContentSearch/SearchProvider';
import SearchFacets, { SearchFacetsProps } from '../../components/ContentSearch/SearchFacets';
import { facetsProp, filtersProp } from '../mock-search-data';

export default {
  title: 'Components/ContentSearch/SearchFacets',
  component: SearchFacets,
} as Meta<typeof SearchFacets>;

const Template: StoryFn<typeof SearchFacets> = (args) => (
  <SearchProvider keyphrase="test">
    <SearchFacets {...args} />
  </SearchProvider>
);

export const Default = {
  render: Template,

  args: {
    facets: facetsProp,
    filters: [],
  } as SearchFacetsProps,
};

export const WithActiveFilters = {
  render: Template,

  args: {
    facets: facetsProp,
    filters: filtersProp,
  },
};
