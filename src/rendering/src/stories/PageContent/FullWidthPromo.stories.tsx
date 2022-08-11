import React from 'react';
import { ComponentStory, ComponentMeta } from '@storybook/react';

import FullWidthPromo, { FullWidthPromoProps } from '../../components/PageContent/FullWidthPromo';

export default {
  title: 'Components/PageContent/FullWidthPromo',
  component: FullWidthPromo,
} as ComponentMeta<typeof FullWidthPromo>;

const Template: ComponentStory<typeof FullWidthPromo> = (args: FullWidthPromoProps) => (
  <FullWidthPromo {...args} />
);

export const Default = Template.bind({});
Default.args = {
  fields: {
    cssClass: {
      value: '',
    },
    position: {
      value: 'left',
    },
    title: {
      value: 'Sports and Recreation Expo',
    },
    subtitle: {
      value: 'RAISE YOUR GAME',
    },
    content: {
      value: 'Join us in person or online for the fifth annual PLAY! Summit.',
    },
    callToActionLink: {
      value: {
        href: '/tickets',
        text: 'Book Tickets',
      },
    },
  },
  rendering: {
    componentName: 'Rendering',
    dataSource: '/sitecore',
  },
} as FullWidthPromoProps;
