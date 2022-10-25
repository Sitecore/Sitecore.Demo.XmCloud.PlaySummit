import { createContext, PropsWithChildren, useMemo, useState } from 'react';

export type SearchContextType = {
  totals: {
    [key: string]: number;
  };
  onUpdate?: (id: string, total: number) => void;
};

export const SearchTabContext = createContext<SearchContextType>({
  totals: {} as SearchContextType['totals'],
});

const SearchTabProvider = (props: PropsWithChildren): JSX.Element => {
  const [totals, setTotals] = useState<SearchContextType['totals']>(
    {} as SearchContextType['totals']
  );
  const value = useMemo(() => {
    return {
      totals,
      onChangeFilter: (id: string, val: number) => {
        setTotals((prevTotals) => ({
          ...prevTotals,
          [id]: val,
        }));
      },
    };
  }, [totals]);
  return <SearchTabContext.Provider value={value}>{props.children}</SearchTabContext.Provider>;
};

export default SearchTabProvider;
