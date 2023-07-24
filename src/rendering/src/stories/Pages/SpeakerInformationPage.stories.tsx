import React from 'react';
import { StoryFn, Meta } from '@storybook/react';

import HeaderContent from '../../components/Navigation/HeaderContent';
import HeaderCdpMessageBar from '../../components/HeaderCdpMessageBar';
import {
  Default as SpeakerInformationPageHero,
  SpeakerInformationPageHeroProps,
} from '../../components/Speakers/SpeakerInformationPageHero';
import {
  Default as SpeakerInformation,
  SpeakerInformationProps,
} from '../../components/Speakers/SpeakerInformation';
import { Default as Footer } from '../../components/Navigation/Footer';
import { SESSIONS } from '../mock-sessions';
import { mockFooterProps, mockHeaderProps } from './PageStoriesCommon';
import { Default as SessionList, SessionListProps } from '../../components/Sessions/SessionList';

export default {
  title: 'Pages/Speaker Information Page',
} as Meta<typeof SpeakerInformationPageHero>;

const speakerInformationPageHeroProps = {
  fields: {
    Name: {
      value: 'Alex Mena',
    },
    Featured: {
      value: true,
    },
    Picture: {
      value: {
        src: 'https://playsummit.sitecoresandbox.cloud/api/public/content/8f466142f88c4d5c87e29461eddc222f?v=7a63a542',
        height: 1100,
        width: 1100,
      },
    },
    JobTitle: {
      value: 'International Sales Director',
    },
    Company: {
      value: 'Solstice',
    },
    Location: {
      value: 'Paris, France',
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
} as unknown as SpeakerInformationPageHeroProps;

const speakerInformationProps = {
  fields: {
    Description: {
      value:
        '<p>Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat, sed. Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat, sed. At vero eos et accusam et justo duo dolores et ea rebum. Stet clita kasd gubergren, no sea takimata sanctus est Lorem ipsum dolor sit amet. Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat, sed diam voluptua.&nbsp;</p><p>At vero eos et accusam et justo duo dolores et ea rebum. Stet clita kasd gubergren, no sea takimata sanctus est Lorem ipsum dolor sit amet. At vero eos et accusam et justo.</p><ul><li>Lorem ipsum dolor sit amet</li><li>consetetur sadipscing elitr</li><li>sed diam nonumy eirmod tempor</li><li>invidunt ut labore et dolore</li><li>magna aliquyam erat</li><li>sed diam voluptua</li></ul><p>ad fas dasd asasdf asd fasd fasd fas dfasd f sdfasdfda sd as sdgf sdfg sdfg sdfbghtyurty urty urtyu rtyur tasdasqwqwrt wert wert wert wert sdfg sgd. At vero eos et accusam et justo duo dolores et ea rebum. Stet clita kasd gubergren, no sea takimata sanctus est Lorem ipsum dolor sit amet. At vero eos et accusam et justo.</p>',
    },
  },
} as unknown as SpeakerInformationProps;

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

const Template: StoryFn<typeof SpeakerInformationPageHero> = () => {
  return (
    <>
      <header>
        <HeaderContent {...mockHeaderProps} />
      </header>
      <main>
        <HeaderCdpMessageBar />
        <SpeakerInformationPageHero {...speakerInformationPageHeroProps} />
        <SpeakerInformation {...speakerInformationProps}>
          <SessionList {...sessionListProps} />
        </SpeakerInformation>
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
