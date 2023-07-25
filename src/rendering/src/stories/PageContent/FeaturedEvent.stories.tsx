import { Meta } from '@storybook/react';

import { Default as FeaturedEvent } from '../../components/PageContent/FeaturedEvent';

export default {
  title: 'Components/PageContent/FeaturedEvent',
  component: FeaturedEvent,
} as Meta<typeof FeaturedEvent>;

export const Default = {
  args: {
    fields: {
      Name: {
        value: '7 Mindset STRATEGIES to raise your game',
      },
      Image: {
        value: {
          src: '/assets/img/shop/man-biker.jpg',
        },
      },
      Premium: false,
      Speakers: [
        {
          fields: {
            Name: {
              value: 'John Doe',
            },
            JobTitle: {
              value: 'Marketing Specialist',
            },
          },
        },
        {
          fields: {
            Name: {
              value: 'Jane Doe',
            },
            JobTitle: {
              value: 'Recruitment Specialist',
            },
          },
        },
      ],
    },
    rendering: {
      componentName: 'Rendering',
      dataSource: '/AnythingForTheWithDatasourceCheckHocToDisplayTheComponent',
    },
  },
};
