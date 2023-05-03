import React from 'react';
import { StoryFn, Meta } from '@storybook/react';

import { Default as FeaturedEvent } from '../../components/PageContent/FeaturedEvent';

export default {
  title: 'Components/PageContent/FeaturedEvent',
  component: FeaturedEvent,
} as Meta<typeof FeaturedEvent>;

const Template: StoryFn<typeof FeaturedEvent> = () => (
  <FeaturedEvent rendering={{ componentName: '' }} params={{}} />
);

export const Default = {
  render: Template,
  args: {},
};
