import { Meta } from '@storybook/react';

import { Default as HeroSection, HeroProps } from '../../components/PageContent/HeroSection';

export default {
  title: 'Components/PageContent/HeroSection',
  component: HeroSection,
} as Meta<typeof HeroSection>;

export const Default = {
  args: {
    fields: {
      Hero: {
        value: {
          src: 'https://playsummit.sitecoresandbox.cloud/api/public/content/95619f8c034947a2aa2ce5b39146ccf5?v=c63ff08e',
        },
      },
      Slogan: {
        value: 'READY | STEADY | PLAY!',
      },
      Eyebrow: {
        value: 'Sports and Recreation Expo',
      },
      Title: {
        value: 'RAISE YOUR GAME',
      },
      Body: {
        value: 'Join us in person or online for the fifth annual PLAY! Summit.',
      },
    },
    rendering: {
      componentName: 'Rendering',
      dataSource: '/AnythingForTheWithDatasourceCheckHocToDisplayTheComponent',
    },
  } as HeroProps,
};
