import { Meta } from '@storybook/react';

import UserProfileContent from '../../components/Account/UserProfileContent';

export default {
  title: 'Components/Account/UserProfileContent',
  component: UserProfileContent,
} as Meta<typeof UserProfileContent>;

export const NoUser = {
  args: {},
};

export const Default = {
  args: {
    user: {
      FirstName: 'John',
      LastName: 'Smith',
    },
  },
};
