import { ComponentMeta, ComponentStory } from '@storybook/react';
import React from 'react';

import SearchProvider from '../../components/Search/SearchProvider';
import SearchResults from '../../components/Search/SearchResults';
import { filterOptionsProp } from '../mock-discover-data';

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
  tabs: [
    {
      id: 'session',
      name: 'Sessions',
      color: '#3d93ff',
      Component: () => <div>My sessions content</div>,
    },
    {
      id: 'speaker',
      name: 'Speakers',
      color: '#ff8d02',
      Component: () => <div>My speakers content</div>,
    },
    {
      id: 'vendor',
      name: 'Vendors',
      color: '#ff1a87',
      Component: () => <div>My vendors content</div>,
    },
    {
      id: 'sponsor',
      name: 'Sponsors',
      color: '#ffd51d',
      Component: () => <div>My sponsors content</div>,
    },
    {
      id: 'content',
      name: 'News',
      color: '#000',
      Component: () => <div>My news content</div>,
    },
  ],
};
