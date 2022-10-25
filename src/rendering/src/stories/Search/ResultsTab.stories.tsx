import { ComponentMeta, ComponentStory } from '@storybook/react';
import React from 'react';

import ResultsTab from '../../components/Search/ResultsTab';
import { facetsProp, filtersProp } from '../mock-discover-data';

export default {
  title: 'Components/Search/ResultsTab',
  component: ResultsTab,
} as ComponentMeta<typeof ResultsTab>;

const Template: ComponentStory<typeof ResultsTab> = (args) => (
  <ResultsTab {...args}>My content</ResultsTab>
);

export const Default = Template.bind({});
Default.args = {
  facets: facetsProp,
  filters: filtersProp,
  currentPage: 1,
  totalItems: 77,
  productsPerPage: 10,
  onPageChange: (page) => {
    console.log(page);
  },
};
