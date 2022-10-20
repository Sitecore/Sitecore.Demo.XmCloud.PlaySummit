import { useQuery } from '@tanstack/react-query';
import React, { PropsWithChildren, useContext, useMemo } from 'react';
import { DiscoverResponseBase } from '../../interfaces/discover/DiscoverResponse';
import connectResultsTab from '../../lib/discover/hocs/connectResultsTab';
import * as api from '../../lib/discover/api';
import SearchNewsResultsTab from './SearchNewsResultsTab';
import SearchSessionResultsTab from './SearchSessionResultsTab';
import SearchSpeakerResultsTab from './SearchSpeakerResultsTab';
import SearchSponsorResultsTab from './SearchSponsorResultsTab';
import SearchVendorResultsTab from './SearchVendorResultsTab';
import SearchEntityTabs, { Tab } from './SearchEntityTabs';
import Filters, { FiltersProps } from './SearchFilters';
import SearchProvider, { SearchContext } from './SearchProvider';

export type ResultsProps = PropsWithChildren & {
  selectedTab: string;
  filterOptions: FiltersProps['options'];
  tabs: Tab[];
};

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

const SearchResults = (props: ResultsProps): JSX.Element => {
  const { keyphrase, onChangeFilter } = useContext(SearchContext);
  return (
    <div className="search-results">
      {keyphrase && (
        <div className="search-results-header">Results for: &quot;{keyphrase}&quot;</div>
      )}
      <Filters
        options={props.filterOptions}
        onChange={onChangeFilter}
        className="search-results-filters"
      />
      <SearchEntityTabs
        selected={props.selectedTab || 'session'}
        tabs={props.tabs}
        className="search-results-tabs"
      />
    </div>
  );
};

const widgetId = 'rfkid_7';
type ResultsContainerProps = { q: string; tab: string };

export const ResultsContainer = (props: ResultsContainerProps): JSX.Element => {
  const { q: keyphrase, tab } = props;
  const { data: { facet: { days = {}, rooms = {} } = {} } = {} } = useQuery<DiscoverResponseBase>(
    [keyphrase, 'filters'],
    () =>
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
  const filterOptions = useMemo<FiltersProps['options']>(() => {
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

export default SearchResults;
