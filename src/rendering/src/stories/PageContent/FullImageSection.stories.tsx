import { Meta } from '@storybook/react';

import { Default as FullImageSection } from '../../components/PageContent/FullImageSection';

export default {
  title: 'Components/PageContent/FullImageSection',
  component: FullImageSection,
} as Meta<typeof FullImageSection>;

export const Left = {
  args: {
    params: {
      styles: 'full-image-section-left full-image-section-offer',
    },
    fields: {
      callToActionLink: {
        value: {
          href: '/shop/product',
          text: 'Get Discount Code',
        },
      },
      content: {
        value:
          'We’re partnering with over 2000 brands to offer PLAY! Summit attendees a <b>20% discount</b> on all online and in-person purchases made during this year’s event.',
      },
      subtitle: {
        value: 'Do not miss',
      },
      title: {
        value: 'PLAY! Summit Exclusive Offer',
      },
    },
    rendering: {
      componentName: 'Rendering',
      dataSource: '/sitecore',
    },
  },
};

export const Right = {
  args: {
    params: {
      styles: 'full-image-section-right full-image-section-speaker',
    },
    fields: {
      callToActionLink: {
        value: {
          href: '/tickets',
          text: 'Book your seat',
        },
      },
      content: {
        value:
          'Join <b>Tour de France</b> champion Chris Williams for an exclusive Q & A in which he’ll discuss his professional journey and highlights from his career.',
      },
      subtitle: {
        value: 'Guest speaker',
      },
      title: {
        value: 'Chris Williams',
      },
    },
    rendering: {
      componentName: 'Rendering',
      dataSource: '/sitecore',
    },
  },
};
