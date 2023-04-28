import React from 'react';
import { StoryFn, Meta } from '@storybook/react';

import { Default as SummitFeatures } from '../../components/PageContent/SummitFeatures';
import {
  Default as SummitFeature,
  SummitFeatureProps,
} from '../../components/PageContent/SummitFeature';
import { ComponentWithChildrenProps } from 'lib/component-props';

export default {
  title: 'Components/PageContent/SummitFeatures',
  component: SummitFeatures,
} as Meta<typeof SummitFeatures>;

const featureArgs = {
  fields: {
    Title: {
      value: 'Sports and Recreation Expo',
    },
    Description: {
      value:
        'This year’s theme is ‘Raise Your Game’ –join us over two days for a global gathering of brands, sports professionals,and innovators.',
    },
    Link: {
      value: {
        href: '/tickets',
        text: 'Book Tickets',
      },
    },
    Logo: {
      value: {
        src: '/assets/img/categories/hiking.jpg',
      },
    },
  },
} as SummitFeatureProps;

const Template: StoryFn<typeof SummitFeatures> = (args: ComponentWithChildrenProps) => (
  <SummitFeatures {...args}>
    <SummitFeature {...featureArgs} />
  </SummitFeatures>
);

export const Default = {
  render: Template,

  args: {
    params: {},
  },
};
