import { Meta } from '@storybook/react';

import {
  Default as MainNavigation,
  MainNavigationProps,
} from '../../components/Navigation/MainNavigation';
import { mockMainNavigationFields } from '../Pages/PageStoriesCommon';

export default {
  title: 'Components/Navigation/MainNavigation',
  component: MainNavigation,
} as Meta<typeof MainNavigation>;

export const Default = {
  args: {
    fields: mockMainNavigationFields,
  } as unknown as MainNavigationProps,
};
