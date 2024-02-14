import { Meta, StoryFn } from '@storybook/react';
import React from 'react';

import PersonalizedPicksWrapper, {
  PersonalizedPicksWrapperProps,
} from '../../components/ContentSearch/PersonalizedPicksWrapper';

export default {
  title: 'Components/ContentSearch/PersonalizedPicks',
  component: PersonalizedPicksWrapper,
} as Meta<typeof PersonalizedPicksWrapper>;

const Template: StoryFn<typeof PersonalizedPicksWrapper> = (args) => (
  <PersonalizedPicksWrapper {...args} />
);

export const Default = {
  render: Template,

  args: { params: { styles: 'test' } } as PersonalizedPicksWrapperProps,
};
