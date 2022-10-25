import { Image, Text } from '@sitecore-jss/sitecore-jss-nextjs';
import Link from 'next/link';
import { PropsWithChildren } from 'react';
import { GraphQLSpeaker } from '../../types/speaker';
import { FacetsProps } from './Facets';
import ResultsTab from './ResultsTab';

export type SpeakerResultsTabProps = PropsWithChildren &
  FacetsProps & {
    items: GraphQLSpeaker[];
  };

const SpeakerResultsTab = (props: SpeakerResultsTabProps): JSX.Element => {
  return (
    <ResultsTab facets={props.facets} filters={props.filters}>
      {props.items.map((speaker, index) => (
        <Link key={index} href={speaker.url.path} passHref>
          <a className="speakers-grid-speaker">
            <div className="speaker-image">
              <Image
                field={speaker.picture.jsonValue}
                alt={speaker.name.value}
                width={265}
                height={265}
              />
            </div>
            <Text className="speaker-name" tag="p" field={speaker.name} />
            <Text tag="p" field={speaker.jobTitle} />
          </a>
        </Link>
      ))}
    </ResultsTab>
  );
};

export default SpeakerResultsTab;
