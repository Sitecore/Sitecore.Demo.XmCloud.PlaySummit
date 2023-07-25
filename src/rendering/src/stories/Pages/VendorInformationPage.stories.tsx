import React from 'react';
import { StoryFn, Meta } from '@storybook/react';

import HeaderContent from '../../components/Navigation/HeaderContent';
import HeaderCdpMessageBar from '../../components/HeaderCdpMessageBar';
import {
  Default as VendorInformationPageHero,
  VendorInformationPageHeroProps,
} from '../../components/Vendors/VendorInformationPageHero';
import {
  Default as VendorInformation,
  VendorInformationProps,
} from '../../components/Vendors/VendorInformation';
import { Default as Footer } from '../../components/Navigation/Footer';
import { mockFooterProps, mockHeaderProps } from './PageStoriesCommon';
import { SESSIONS } from '../mock-sessions';
import { Default as SessionList, SessionListProps } from '../../components/Sessions/SessionList';

export default {
  title: 'Pages/Vendor Information Page',
} as Meta<typeof VendorInformationPageHero>;

const vendorInformationPageHeroProps = {
  fields: {
    Name: {
      value: 'Fitbit',
    },
    Logo: {
      value: {
        src: 'https://playsummit.sitecoresandbox.cloud/api/public/content/cd9887afd5f249c2a77bc62a506ed667?v=6aea2ec4a&t=profile',
        height: 133,
        width: 600,
      },
    },
    Level: {
      value: 'premium',
    },
    FacebookProfileLink: {
      value: 'https://facebook.com/asada',
    },
    TwitterProfileLink: {
      value: 'https://twitter.com/asada',
    },
    InstagramProfileLink: {
      value: 'https://instagram.com/asada',
    },
    LinkedinProfileLink: {
      value: 'https://linkedin.com/asada',
    },
  },
  rendering: {
    componentName: 'Rendering',
    dataSource: '/AnythingForTheWithDatasourceCheckHocToDisplayTheComponent',
  },
} as unknown as VendorInformationPageHeroProps;

const sessionListProps = {
  fields: {
    data: {
      contextItem: {
        sessions: {
          targetItems: SESSIONS,
        },
      },
    },
  },
} as unknown as SessionListProps;

const vendorInformationProps = {
  fields: {
    Description: {
      value:
        '<p>Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat, sed. Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat, sed. At vero eos et accusam et justo duo dolores et ea rebum. Stet clita kasd gubergren, no sea takimata sanctus est Lorem ipsum dolor sit amet. Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat, sed diam voluptua.&nbsp;</p><p>At vero eos et accusam et justo duo dolores et ea rebum. Stet clita kasd gubergren, no sea takimata sanctus est Lorem ipsum dolor sit amet. At vero eos et accusam et justo.</p><ul><li>Lorem ipsum dolor sit amet</li><li>consetetur sadipscing elitr</li><li>sed diam nonumy eirmod tempor</li><li>invidunt ut labore et dolore</li><li>magna aliquyam erat</li><li>sed diam voluptua</li></ul><p>Ad fas dasd asasdf asd fasd fasd fas dfasd f sdfasdfda sd as sdgf sdfg sdfg sdfbghtyurty urty urtyu rtyur tasdasqwqwrt wert wert wert wert sdfg sgd. At vero eos et accusam et justo duo dolores et ea rebum. Stet clita kasd gubergren, no sea takimata sanctus est Lorem ipsum dolor sit amet. At vero eos et accusam et justo.</p>',
    },
  },
  rendering: {
    componentName: 'Rendering',
    dataSource: '/AnythingForTheWithDatasourceCheckHocToDisplayTheComponent',
  },
} as VendorInformationProps;

const Template: StoryFn<typeof VendorInformationPageHero> = () => {
  return (
    <>
      <header>
        <HeaderContent {...mockHeaderProps} />
      </header>
      <main>
        <HeaderCdpMessageBar />
        <VendorInformationPageHero {...vendorInformationPageHeroProps} />
        <VendorInformation {...vendorInformationProps}>
          <SessionList {...sessionListProps} />
        </VendorInformation>
      </main>
      <footer>
        <Footer {...mockFooterProps} />
      </footer>
    </>
  );
};

export const Default = {
  render: Template,
  args: {},
};
