import { DiscoverRequestFilter } from 'lib/discover/api';
import { createContext, PropsWithChildren, useCallback, useMemo, useState } from 'react';
import { FiltersProps } from './SearchFilters';

type SearchContextType = {
  keyphrase: string;
  totals: {
    [key: string]: number;
  };
  onUpdate?: (id: string, total: number) => void;
  filters: DiscoverRequestFilter[];
  onChangeFilter?: FiltersProps['onChange'];
};

export const SearchContext = createContext<SearchContextType>({
  keyphrase: '',
  filters: [] as DiscoverRequestFilter[],
  totals: {} as SearchContextType['totals'],
});

export type SearchProviderProps = { keyphrase: string } & PropsWithChildren;

const SearchProvider = (props: SearchProviderProps): JSX.Element => {
  const { keyphrase } = props;

  const [totals, setTotals] = useState<SearchContextType['totals']>({});
  const [filters, setFilters] = useState<DiscoverRequestFilter[]>([]);

  const onUpdate = useCallback((id: string, val: number) => {
    setTotals((prevTotals) => {
      const { [id]: currentValue } = prevTotals;
      if (currentValue !== val) {
        return {
          ...prevTotals,
          [id]: val,
        };
      }
      return prevTotals;
    });
  }, []);
  const onChangeFilter = useCallback((facetId: string, facetValueId: string) => {
    setFilters((prevFilters) => {
      const id = facetId === 'schedule' ? 'days' : facetId;
      let result: DiscoverRequestFilter[];
      // removes previous values for current selected filter
      result = prevFilters.filter(({ facetId: currentFacetId }) => currentFacetId !== id);
      if (facetValueId !== '') {
        result = [...result, { facetId: id, facetValueId }];
      }
      return result;
    });
  }, []);

  const value = useMemo(
    () => ({
      keyphrase,
      totals,
      onUpdate,
      filters,
      onChangeFilter,
    }),
    [filters, onChangeFilter, onUpdate, totals, keyphrase]
  );
  return <SearchContext.Provider value={value}>{props.children}</SearchContext.Provider>;
};

export default SearchProvider;
