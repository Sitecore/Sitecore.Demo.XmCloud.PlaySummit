import { Meta } from '@storybook/react';

import HeaderContent, { HeaderContentProps } from '../../components/Navigation/HeaderContent';
import { mockHeaderProps } from '../Pages/PageStoriesCommon';

export default {
  title: 'Components/Navigation/HeaderContent',
  component: HeaderContent,
} as Meta<typeof HeaderContent>;

export const Default = {
  args: {
    ...mockHeaderProps,
    rendering: undefined,
  } as HeaderContentProps,
};
