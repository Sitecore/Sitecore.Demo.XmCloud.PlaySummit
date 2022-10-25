import { createContext, PropsWithChildren, useMemo, useState } from 'react';
import { FiltersProps } from './Filters';

type SearchContextType = {
  filters: FiltersProps['options'];
  onChangeFilter?: FiltersProps['onChange'];
};

export const SearchContext = createContext<SearchContextType>({
  filters: {} as FiltersProps['options'],
});

const SearchProvider = (props: PropsWithChildren): JSX.Element => {
  const [filters, setFilters] = useState<FiltersProps['options']>({} as FiltersProps['options']);
  const value = useMemo(() => {
    return {
      filters,
      onChangeFilter: (id: string, val: string) => {
        setFilters((prevFilters) => ({
          ...prevFilters,
          [id]: val,
        }));
      },
    };
  }, [filters]);
  return <SearchContext.Provider value={value}>{props.children}</SearchContext.Provider>;
};

export default SearchProvider;
