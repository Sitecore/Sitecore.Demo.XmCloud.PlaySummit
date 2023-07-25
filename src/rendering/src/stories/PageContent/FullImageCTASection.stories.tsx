import { Meta } from '@storybook/react';

import { Default as FullImageCTASection } from '../../components/PageContent/FullImageCTASection';

export default {
  title: 'Components/PageContent/FullImageCTASection',
  component: FullImageCTASection,
} as Meta<typeof FullImageCTASection>;

export const Default = {
  args: {
    params: {
      name: 'FullImageCTASection',
    },
    fields: {
      callToActionLink: {
        value: {
          href: '/map',
          text: 'View map',
        },
      },
      backgroundImage: {
        value: {
          src: '/assets/img/page-content/play-venue-map.webp',
        },
      },
    },
    rendering: {
      componentName: 'Rendering',
      dataSource: '/AnythingForTheWithDatasourceCheckHocToDisplayTheComponent',
    },
  },
};
