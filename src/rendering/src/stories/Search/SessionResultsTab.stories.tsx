import { ComponentMeta, ComponentStory } from '@storybook/react';
import React from 'react';

import SessionResultsTab from '../../components/Search/SessionResultsTab';
import { facetsProp, filtersProp } from '../mock-discover-data';
import { SESSIONS } from '../mock-sessions';

export default {
  title: 'Components/Search/SessionResultsTab',
  component: SessionResultsTab,
} as ComponentMeta<typeof SessionResultsTab>;

const Template: ComponentStory<typeof SessionResultsTab> = (args) => (
  <SessionResultsTab {...args} />
);

export const Default = Template.bind({});
Default.args = {
  facets: facetsProp,
  filters: filtersProp,
  items: [...SESSIONS, ...SESSIONS, ...SESSIONS],
};
