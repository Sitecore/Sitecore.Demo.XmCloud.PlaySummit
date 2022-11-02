import { ComponentMeta, ComponentStory } from '@storybook/react';
import React from 'react';

import SearchProvider from '../../components/Search/SearchProvider';
import SearchFacets from '../../components/Search/SearchFacets';
import { facetsProp, filtersProp } from '../mock-search-data';

export default {
  title: 'Components/Search/SearchFacets',
  component: SearchFacets,
} as ComponentMeta<typeof SearchFacets>;

const Template: ComponentStory<typeof SearchFacets> = (args) => (
  <SearchProvider keyphrase="test">
    <SearchFacets {...args} />
  </SearchProvider>
);

export const Default = Template.bind({});
Default.args = {
  facets: facetsProp,
  filters: [],
};

export const WithFilters = Template.bind({});
WithFilters.args = {
  facets: facetsProp,
  filters: filtersProp,
};
