import { Meta } from '@storybook/react';
import CountdownTimer from '../../components/BYOCC/CountdownTimer';

export default {
  title: 'Components/BYOCC/CountdownTimer',
  component: CountdownTimer,
} as Meta<typeof CountdownTimer>;

const futureDate = new Date(new Date().getTime() + 3 * 24 * 60 * 60 * 1000);
const pastDate = new Date(new Date().getTime() - 3 * 24 * 60 * 60 * 1000);

export const Default = {
  args: {
    date: futureDate,
  },
};

export const Expired = {
  args: {
    date: pastDate,
  },
};

export const ExpiredWithMessage = {
  args: {
    date: pastDate,
    useExpirationMessage: true,
  },
};
