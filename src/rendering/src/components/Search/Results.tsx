import React, { PropsWithChildren, useContext } from 'react';
import EntityTabs from './EntityTabs';
import Filters, { FiltersProps } from './Filters';
import SearchProvider, { SearchContext } from './SearchProvider';

export type ResultsProps = PropsWithChildren & {
  filterOptions: FiltersProps['options'];
  onChangeFilter: FiltersProps['onChange'];
};

const tabs = [
  {
    id: 'sessions',
    name: 'Sessions (8)',
    color: '#3d93ff',
    Component: () => <div>Sessions component</div>,
  },
  {
    id: 'speakers',
    name: 'Speakers (6)',
    color: '#ff8d02',
    Component: () => <div>Speakers component</div>,
  },
  {
    id: 'vendors',
    name: 'Vendors (3)',
    color: '#ff1a87',
    Component: () => <div>Vendors component</div>,
  },
  {
    id: 'sponsors',
    name: 'Sponsors (1)',
    color: '#ffd51d',
    Component: () => <div>Sponsors component</div>,
  },
  {
    id: 'articles',
    name: 'News (10)',
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
        <EntityTabs defaultSelected="sessions" tabs={tabs} className="search-results-tabs" />
      </div>
    </SearchProvider>
  );
};

export default Results;
