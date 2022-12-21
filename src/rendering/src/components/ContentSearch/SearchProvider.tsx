import { ContentSearchRequestFilter } from '../../services/ContentSearchService';
import { createContext, PropsWithChildren, useCallback, useMemo, useState } from 'react';
import { SearchFiltersProps } from './SearchFilters';

type SearchContextType = {
  keyphrase: string;
  totals: Record<string, number>;
  perPage: number;
  onUpdate?: (id: string, total: number) => void;
  filters: ContentSearchRequestFilter[];
  onChangeFilter?: SearchFiltersProps['onChange'];
  onPerPageChange?: (perPage: number) => void;
};

export const SearchContext = createContext<SearchContextType>({
  keyphrase: '',
  perPage: 12,
  filters: [] as ContentSearchRequestFilter[],
  totals: {} as SearchContextType['totals'],
});

type SearchProviderProps = { keyphrase: string } & PropsWithChildren;

const SearchProvider = (props: SearchProviderProps): JSX.Element => {
  const { keyphrase } = props;

  const [perPage, onPerPageChange] = useState<SearchContextType['perPage']>(12);
  const [totals, setTotals] = useState<SearchContextType['totals']>({});
  const [filters, setFilters] = useState<ContentSearchRequestFilter[]>([]);

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
      let result: ContentSearchRequestFilter[];
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
      perPage,
      onChangeFilter,
      onPerPageChange,
    }),
    [filters, onChangeFilter, onUpdate, totals, keyphrase, perPage]
  );

  return <SearchContext.Provider value={value}>{props.children}</SearchContext.Provider>;
};

export default SearchProvider;
