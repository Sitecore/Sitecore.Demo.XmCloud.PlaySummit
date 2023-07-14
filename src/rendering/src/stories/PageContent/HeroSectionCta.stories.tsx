import { Meta } from '@storybook/react';
import {
  Default as HeroSectionCta,
  HeroSectionCtaProps,
} from '../../components/PageContent/HeroSectionCta';

export default {
  title: 'Components/PageContent/HeroSectionCta',
  component: HeroSectionCta,
} as Meta<typeof HeroSectionCta>;

export const Default = {
  args: {
    fields: {
      Link: {
        value: {
          href: '/tickets',
          text: 'Book Tickets',
        },
      },
    },
    rendering: {
      componentName: 'Rendering',
      dataSource: '/AnythingForTheWithDatasourceCheckHocToDisplayTheComponent',
    },
  } as HeroSectionCtaProps,
};
