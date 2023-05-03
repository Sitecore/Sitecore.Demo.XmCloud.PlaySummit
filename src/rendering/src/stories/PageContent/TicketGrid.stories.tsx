import React from 'react';
import { StoryFn, Meta } from '@storybook/react';

import { Default as TicketGrid } from '../../components/PageContent/TicketGrid';

export default {
  title: 'Components/PageContent/TicketGrid',
  component: TicketGrid,
} as Meta<typeof TicketGrid>;

const Template: StoryFn<typeof TicketGrid> = () => (
  <TicketGrid rendering={{ componentName: '' }} params={{}} />
);

export const Default = {
  render: Template,
  args: {},
};
