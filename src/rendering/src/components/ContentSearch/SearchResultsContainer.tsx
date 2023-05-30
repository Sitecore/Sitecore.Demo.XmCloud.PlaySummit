import { useQuery } from '@tanstack/react-query';
import React, { useMemo } from 'react';
import {
  ContentSearchWidgetResponseBase,
  ContentSearchWidgetResponseFacet,
} from '../../interfaces/contentSearch/ContentSearchWidgetResponse';
import connectResultsTab from '../../hocs/connectResultsTab';
import { isContentSearchEnabled, getSearchResults } from '../../services/ContentSearchService';
import SearchNewsResultsTab from './SearchNewsResultsTab';
import SearchSessionResultsTab from './SearchSessionResultsTab';
import SearchSpeakerResultsTab from './SearchSpeakerResultsTab';
import SearchSponsorResultsTab from './SearchSponsorResultsTab';
import SearchVendorResultsTab from './SearchVendorResultsTab';
import { SearchFiltersProps } from './SearchFilters';
import SearchProvider from './SearchProvider';
import SearchResults from './SearchResults';
import {
  ACTIVITIES_FACET_TYPE,
  AUDIENCE_FACET_TYPE,
  COMPANY_FACET_TYPE,
  CONTENT_SEARCH_RESULT_TYPE,
  IS_FEATURED_FACET_TYPE,
  IS_PREMIUM_FACET_TYPE,
  JOB_TITLE_FACET_TYPE,
  LEVEL_FACET_TYPE,
  LOCATION_FACET_TYPE,
  SESSIONS_FACET_TYPE,
  SESSION_SEARCH_RESULT_TYPE,
  SPEAKERS_FACET_TYPE,
  SPEAKER_SEARCH_RESULT_TYPE,
  SPONSORS_FACET_TYPE,
  SPONSOR_SEARCH_RESULT_TYPE,
  VENDORS_FACET_TYPE,
  VENDOR_SEARCH_RESULT_TYPE,
} from '../../helpers/ContentSearchHelper';

type SearchResultsContainerProps = {
  q: string;
  tab: string;
};

const widgetId = 'rfkid_7';

const tabs = [
  {
    id: SESSION_SEARCH_RESULT_TYPE,
    name: 'Sessions',
    color: '#3d93ff',
    Component: connectResultsTab({
      entity: SESSION_SEARCH_RESULT_TYPE,
      facetsTypes: [
        AUDIENCE_FACET_TYPE,
        IS_PREMIUM_FACET_TYPE,
        SPONSORS_FACET_TYPE,
        VENDORS_FACET_TYPE,
        SPEAKERS_FACET_TYPE,
      ],
    })(SearchSessionResultsTab),
  },
  {
    id: SPEAKER_SEARCH_RESULT_TYPE,
    name: 'Speakers',
    color: '#ff8d02',
    Component: connectResultsTab({
      entity: SPEAKER_SEARCH_RESULT_TYPE,
      facetsTypes: [
        COMPANY_FACET_TYPE,
        JOB_TITLE_FACET_TYPE,
        LOCATION_FACET_TYPE,
        SESSIONS_FACET_TYPE,
        IS_FEATURED_FACET_TYPE,
      ],
    })(SearchSpeakerResultsTab),
  },
  {
    id: VENDOR_SEARCH_RESULT_TYPE,
    name: 'Vendors',
    color: '#ff1a87',
    Component: connectResultsTab({
      entity: VENDOR_SEARCH_RESULT_TYPE,
      facetsTypes: [
        ACTIVITIES_FACET_TYPE,
        LEVEL_FACET_TYPE,
        SPEAKERS_FACET_TYPE,
        SESSIONS_FACET_TYPE,
      ],
    })(SearchVendorResultsTab),
  },
  {
    id: SPONSOR_SEARCH_RESULT_TYPE,
    name: 'Sponsors',
    color: '#ffd51d',
    Component: connectResultsTab({
      entity: SPONSOR_SEARCH_RESULT_TYPE,
      facetsTypes: [LEVEL_FACET_TYPE, SPEAKERS_FACET_TYPE, SESSIONS_FACET_TYPE],
    })(SearchSponsorResultsTab),
  },
  {
    id: CONTENT_SEARCH_RESULT_TYPE,
    name: 'News',
    color: '#000',
    Component: connectResultsTab({
      entity: CONTENT_SEARCH_RESULT_TYPE,
      hasFilters: false,
      facetsTypes: [AUDIENCE_FACET_TYPE],
    })(SearchNewsResultsTab),
  },
];

const SearchResultsContainer = (props: SearchResultsContainerProps): JSX.Element => {
  const { q: keyphrase, tab } = props;

  const searchResults = useQuery<ContentSearchWidgetResponseBase>([keyphrase, 'filters'], () =>
    getSearchResults(
      {
        entity: SESSION_SEARCH_RESULT_TYPE,
        widgetId,
        keyphrase,
        facets: ['days', 'rooms'],
      },
      {}
    )
  );

  const { data: { facet: topFilters = [] } = {} } = !!searchResults?.data
    ? searchResults
    : { data: { facet: [] } };

  const days = useMemo(
    () =>
      topFilters.find(({ name }) => name === 'days') ||
      ({ value: [] } as ContentSearchWidgetResponseFacet),
    [topFilters]
  );
  const rooms = useMemo(
    () =>
      topFilters.find(({ name }) => name === 'rooms') ||
      ({ value: [] } as ContentSearchWidgetResponseFacet),
    [topFilters]
  );

  const filterOptions = useMemo<SearchFiltersProps['options']>(() => {
    return {
      schedule: days.value?.map(({ text, id }) => ({ value: id, label: text })) || [],
      rooms: rooms.value?.map(({ text, id }) => ({ value: id, label: text })) || [],
    };
  }, [days, rooms]);

  if (!isContentSearchEnabled) {
    return (
      <div>
        The search page is currently disabled because the content search integration is not
        configured.
      </div>
    );
  }

  // using keyphrase as key allow us to re mount results, "resetting" any control in it
  return (
    <section className="section">
      <div className="container">
        <SearchProvider key={keyphrase} keyphrase={keyphrase}>
          <SearchResults filterOptions={filterOptions} tabs={tabs} selectedTab={tab} />
        </SearchProvider>
      </div>
    </section>
  );
};

export default SearchResultsContainer;
