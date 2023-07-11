import { Meta } from '@storybook/react';

import { Default as SessionList } from '../../components/Sessions/SessionList';
import { SESSIONS } from '../mock-sessions';

export default {
  title: 'Components/Sessions/SessionList',
  component: SessionList,
} as Meta<typeof SessionList>;

export const Default = {
  args: {
    fields: {
      data: {
        contextItem: {
          sessions: {
            targetItems: SESSIONS,
          },
        },
      },
    },
  },
};
