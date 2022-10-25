import React, { PropsWithChildren, useContext } from 'react';
import EntityTabs from './EntityTabs';
import Filters, { FiltersProps } from './Filters';
import SearchProvider, { SearchContext } from './SearchProvider';
import SearchTabProvider from './SearchTabProvider';

export type ResultsProps = PropsWithChildren & {
  filterOptions: FiltersProps['options'];
  onChangeFilter: FiltersProps['onChange'];
};

const tabs = [
  {
    id: 'sessions',
    name: 'Sessions',
    color: '#3d93ff',
    Component: () => <div>Sessions component</div>,
  },
  {
    id: 'speakers',
    name: 'Speakers',
    color: '#ff8d02',
    Component: () => <div>Speakers component</div>,
  },
  {
    id: 'vendors',
    name: 'Vendors',
    color: '#ff1a87',
    Component: () => <div>Vendors component</div>,
  },
  {
    id: 'sponsors',
    name: 'Sponsors',
    color: '#ffd51d',
    Component: () => <div>Sponsors component</div>,
  },
  {
    id: 'articles',
    name: 'News',
    color: '#000',
    Component: () => <div>News Articles component</div>,
  },
];

const Results = (props: ResultsProps): JSX.Element => {
  const { onChangeFilter } = useContext(SearchContext);
  return (
    <SearchProvider>
      <div className="search-results">
        <Filters
          options={props.filterOptions}
          onChange={onChangeFilter}
          className="search-results-filters"
        />
        <SearchTabProvider>
          <EntityTabs defaultSelected="sessions" tabs={tabs} className="search-results-tabs" />
        </SearchTabProvider>
      </div>
    </SearchProvider>
  );
};

export default Results;
