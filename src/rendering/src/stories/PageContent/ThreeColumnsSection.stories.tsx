import { Meta } from '@storybook/react';

import {
  Default as ThreeColumnsSection,
  ThreeColumnsSectionProps,
} from '../../components/PageContent/ThreeColumnsSection';

export default {
  title: 'Components/PageContent/ThreeColumnsSection',
  component: ThreeColumnsSection,
} as Meta<typeof ThreeColumnsSection>;

export const Default = {
  args: {
    fields: {
      Title: {
        value: 'GO THE DISTANCE',
      },
      Subtitle: {
        value:
          'Whether you’re joining us in person or online, this year’s PLAY! Summit is set to be our biggest and best event yet. Look forward to an action-packed line-up featuring keynotes, Q&As, demos, and workshops across a mix of live and virtual stages.',
      },
      LeftLogo: {
        value: {
          src: '/assets/img/headline-icon-schedule.svg',
        },
      },
      LeftTitle: {
        value: '48 Talks and Workshops',
      },
      LeftLink: {
        value: {
          href: '/sessions',
          text: 'View Sessions',
        },
      },
      MiddleLogo: {
        value: {
          src: '/assets/img/headline-icon-speakers.svg',
        },
      },
      MiddleTitle: {
        value: '32 Speakers and Guest Speakers',
      },
      MiddleLink: {
        value: {
          href: '/speakers',
          text: 'View Speakers',
        },
      },
      RightLogo: {
        value: {
          src: '/assets/img/headline-icon-vendors.svg',
        },
      },
      RightTitle: {
        value: '60 Vendors with VIP Products',
      },
      RightLink: {
        value: {
          href: '/vendors',
          text: 'View Vendors',
        },
      },
    },
    rendering: {
      componentName: 'Rendering',
      dataSource: '/AnythingForTheWithDatasourceCheckHocToDisplayTheComponent',
    },
  } as ThreeColumnsSectionProps,
};
