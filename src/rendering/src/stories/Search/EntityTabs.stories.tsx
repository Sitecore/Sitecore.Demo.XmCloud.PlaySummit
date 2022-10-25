import { ComponentMeta, ComponentStory } from '@storybook/react';
import React from 'react';

import EntityTabs from '../../components/Search/EntityTabs';
import SearchTabProvider from '../../components/Search/SearchTabProvider';

export default {
  title: 'Components/Search/EntityTabs',
  component: EntityTabs,
} as ComponentMeta<typeof EntityTabs>;

const Template: ComponentStory<typeof EntityTabs> = (args) => (
  <SearchTabProvider>
    <EntityTabs {...args} />
  </SearchTabProvider>
);

export const Default = Template.bind({});
Default.args = {
  defaultSelected: 'sessions',
  tabs: [
    {
      id: 'sessions',
      name: 'Sessions (8)',
      color: '#3d93ff',
      Component: () => <div>Sessions component</div>,
    },
    {
      id: 'speakers',
      name: 'Speakers (6)',
      color: '#ff8d02',
      Component: () => <div>Speakers component</div>,
    },
    {
      id: 'vendors',
      name: 'Vendors (3)',
      color: '#ff1a87',
      Component: () => <div>Vendors component</div>,
    },
    {
      id: 'sponsors',
      name: 'Sponsors (1)',
      color: '#ffd51d',
      Component: () => <div>Sponsors component</div>,
    },
    {
      id: 'articles',
      name: 'News (10)',
      color: '#000',
      Component: () => <div>News Articles component</div>,
    },
  ],
};
