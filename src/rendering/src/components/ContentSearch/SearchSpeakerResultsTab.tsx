import { Image, Text } from '@sitecore-jss/sitecore-jss-nextjs';
import Link from 'next/link';
import { speakerAdapter } from '../../helpers/ContentSearchHelper';
import { ContentSearchSpeaker } from '../../interfaces/contentSearch/ContentSearchSpeaker';
import SearchResultsTab, { SearchResultsTabProps } from './SearchResultsTab';

type SearchSpeakerResultsTabProps = SearchResultsTabProps & {
  items: ContentSearchSpeaker[];
};

const SearchSpeakerResultsTab = (props: SearchSpeakerResultsTabProps): JSX.Element => {
  return (
    <SearchResultsTab
      loading={props.loading}
      facets={props.facets}
      filters={props.filters}
      perPage={props.perPage}
      currentPage={props.currentPage}
      onResultsPerPageChange={props.onResultsPerPageChange}
      onSortChange={props.onSortChange}
      sort={props.sort}
      sortOptions={props.sortOptions}
      onPageChange={props.onPageChange}
      totalItems={props.totalItems}
      onClearFilters={props.onClearFilters}
      onFacetValueClick={props.onFacetValueClick}
      onFilterClick={props.onFilterClick}
    >
      <div className="speakers-grid container">
        {props.items.map(speakerAdapter).map((speaker, index) => {
          const featuredSpeakerCssClass = speaker.featured.value ? 'featured-speaker' : '';

          return (
            <Link key={index} href={speaker.url.path} passHref className="speakers-grid-speaker">
              <div className={`speaker-image ${featuredSpeakerCssClass}`}>
                <Image
                  field={speaker.picture.jsonValue}
                  alt={speaker.name.value}
                  width={265}
                  height={265}
                />
              </div>
              <Text className="speaker-name" tag="p" field={speaker.name} />
              <Text tag="p" field={speaker.jobTitle} />
            </Link>
          );
        })}
      </div>
    </SearchResultsTab>
  );
};

export default SearchSpeakerResultsTab;
