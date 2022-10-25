import { Image, Text } from '@sitecore-jss/sitecore-jss-nextjs';
import { PaginationProps } from 'components/Search/Pagination';
import Link from 'next/link';
import { PropsWithChildren } from 'react';
import { GraphQLSpeaker } from '../../types/speaker';
import { FacetsProps } from './Facets';
import ResultsTab from './ResultsTab';

export type SpeakerResultsTabProps = PropsWithChildren &
  PaginationProps &
  FacetsProps & {
    items: GraphQLSpeaker[];
  };

const SpeakerResultsTab = (props: SpeakerResultsTabProps): JSX.Element => {
  return (
    <ResultsTab
      facets={props.facets}
      filters={props.filters}
      productsPerPage={props.productsPerPage}
      currentPage={props.currentPage}
      onPageChange={props.onPageChange}
      totalItems={props.totalItems}
      onClearFilters={props.onClearFilters}
      onFacetValueClick={props.onFacetValueClick}
      onFilterClick={props.onFilterClick}
    >
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
