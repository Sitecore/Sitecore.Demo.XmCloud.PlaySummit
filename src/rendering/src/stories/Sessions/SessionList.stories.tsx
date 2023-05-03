import { Meta } from '@storybook/react';

import { Default as SessionList } from '../../components/Sessions/SessionList';
import { SESSIONS } from '../mock-sessions';

export default {
  title: 'Components/Sessions/SessionList',
  component: SessionList,
} as Meta<typeof SessionList>;

export const WithoutSpeakers = {
  args: {
    sessions: SESSIONS,
    showSpeakers: false,
  },
};

export const WithSpeakers = {
  args: {
    sessions: SESSIONS,
    showSpeakers: true,
  },
};
