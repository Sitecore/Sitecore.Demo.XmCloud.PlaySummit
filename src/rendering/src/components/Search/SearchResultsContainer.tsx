import { useQuery } from '@tanstack/react-query';
import React, { useMemo } from 'react';
import { ContentSearchResponseBase } from '../../interfaces/contentSearch/ContentSearchResponse';
import connectResultsTab from '../../lib/contentSearch/hocs/connectResultsTab';
import * as api from '../../lib/contentSearch/api';
import SearchNewsResultsTab from './SearchNewsResultsTab';
import SearchSessionResultsTab from './SearchSessionResultsTab';
import SearchSpeakerResultsTab from './SearchSpeakerResultsTab';
import SearchSponsorResultsTab from './SearchSponsorResultsTab';
import SearchVendorResultsTab from './SearchVendorResultsTab';
import { SearchFiltersProps } from './SearchFilters';
import SearchProvider from './SearchProvider';
import SearchResults from './SearchResults';

type SearchResultsContainerProps = {
  q: string;
  tab: string;
};

const widgetId = 'rfkid_7';

const tabs = [
  {
    id: 'session',
    name: 'Sessions',
    color: '#3d93ff',
    Component: connectResultsTab({
      entity: 'session',
      facetsTypes: ['audience', 'is_premium', 'sponsors', 'vendors', 'speakers'],
    })(SearchSessionResultsTab),
  },
  {
    id: 'speaker',
    name: 'Speakers',
    color: '#ff8d02',
    Component: connectResultsTab({
      entity: 'speaker',
      facetsTypes: ['company', 'job_title', 'location', 'sessions', 'is_featured'],
    })(SearchSpeakerResultsTab),
  },
  {
    id: 'vendor',
    name: 'Vendors',
    color: '#ff1a87',
    Component: connectResultsTab({
      entity: 'vendor',
      facetsTypes: ['activities', 'level', 'speakers', 'sessions'],
    })(SearchVendorResultsTab),
  },
  {
    id: 'sponsor',
    name: 'Sponsors',
    color: '#ffd51d',
    Component: connectResultsTab({
      entity: 'sponsor',
      facetsTypes: ['level', 'speakers', 'sessions'],
    })(SearchSponsorResultsTab),
  },
  {
    id: 'content',
    name: 'News',
    color: '#000',
    Component: connectResultsTab({
      entity: 'content',
      hasFilters: false,
      facetsTypes: ['audience'],
    })(SearchNewsResultsTab),
  },
];

const SearchResultsContainer = (props: SearchResultsContainerProps): JSX.Element => {
  const { q: keyphrase, tab } = props;
  const { data: { facet: { days = {}, rooms = {} } = {} } = {} } =
    useQuery<ContentSearchResponseBase>([keyphrase, 'filters'], () =>
      api.get(
        {
          entity: 'session',
          widgetId,
          keyphrase,
          facets: [
            'days',
            // 'time_slots',
            'rooms',
          ],
        },
        {}
      )
    );
  const filterOptions = useMemo<SearchFiltersProps['options']>(() => {
    return {
      schedule: days.value?.map(({ text, id }) => ({ value: id, label: text })) || [],
      rooms: rooms.value?.map(({ text, id }) => ({ value: id, label: text })) || [],
    };
  }, [days, rooms]);

  // using keyphrase as key allow us to re mount results, "resetting" any control in it
  return (
    <SearchProvider key={keyphrase} keyphrase={keyphrase}>
      <SearchResults filterOptions={filterOptions} tabs={tabs} selectedTab={tab} />
    </SearchProvider>
  );
};

export default SearchResultsContainer;
