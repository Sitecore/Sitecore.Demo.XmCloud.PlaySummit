import { ComponentMeta, ComponentStory } from '@storybook/react';
import React from 'react';

import SearchProvider from '../../components/ContentSearch/SearchProvider';
import SearchFacets from '../../components/ContentSearch/SearchFacets';
import { facetsProp, filtersProp } from '../mock-search-data';

export default {
  title: 'Components/ContentSearch/SearchFacets',
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

export const WithActiveFilters = Template.bind({});
WithActiveFilters.args = {
  facets: facetsProp,
  filters: filtersProp,
};
