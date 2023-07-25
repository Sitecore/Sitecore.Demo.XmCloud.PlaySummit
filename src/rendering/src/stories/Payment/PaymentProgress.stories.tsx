import { Meta } from '@storybook/react';

import { Default as PaymentProgress } from '../../components/Payment/PaymentProgress';

export default {
  title: 'Components/Payment/PaymentProgress',
  component: PaymentProgress,
} as Meta<typeof PaymentProgress>;

export const Page1 = {
  args: {
    fields: {
      ActiveStep: {
        value: 1,
      },
    },
    rendering: {
      componentName: 'Rendering',
      dataSource: '/AnythingForTheWithDatasourceCheckHocToDisplayTheComponent',
    },
  },
};

export const Page2 = {
  args: {
    fields: {
      ActiveStep: {
        value: 2,
      },
    },
  },
};

export const Page3 = {
  args: {
    fields: {
      ActiveStep: {
        value: 3,
      },
    },
  },
};
