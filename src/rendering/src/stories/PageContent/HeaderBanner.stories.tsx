import React from 'react';
import { ComponentStory, ComponentMeta } from '@storybook/react';

import { Default, HeaderBannerProps } from '../../components/PageContent/HeaderBanner';

export default {
  title: 'Components/PageContent/HeaderBanner',
  component: Default,
} as ComponentMeta<typeof Default>;

const Template: ComponentStory<typeof Default> = (args: HeaderBannerProps) => <Default {...args} />;

const fieldsWithoutImage = {
  eyebrow: {
    value: 'Eyebrow text',
  },
  title: {
    value: 'Title text',
  },
  subtitle: {
    value: 'Subtitle text',
  },
  backgroundImage: {
    value: {},
  },
};

const fieldsWithImage = {
  ...fieldsWithoutImage,
  ...{
    backgroundImage: {
      value: {
        src: '/assets/img/tickets/come-play.jpg',
      },
    },
  },
};

export const WithImage = Template.bind({});
WithImage.args = {
  fields: fieldsWithImage,
  rendering: {
    componentName: 'Rendering',
    dataSource: '/sitecore',
  },
};

export const WithoutImage = Template.bind({});
WithoutImage.args = {
  fields: fieldsWithoutImage,
};
