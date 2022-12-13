import { useQueries } from '@tanstack/react-query';
import { useMemo } from 'react';
import { SearchResultType } from '../helpers/ContentSearchHelper';
import { ContentSearchResponseBase } from '../interfaces/contentSearch/ContentSearchResponse';
import { getSearchResults, ContentSearchRequestProps } from '../services/ContentSearchService';

type QUERY_TYPES = SearchResultType | 'free';

type CustomQueries = {
  [key in QUERY_TYPES]?: unknown;
};

type UseDiscoverQueriesResult<T extends ContentSearchResponseBase[]> = {
  isLoading: boolean;
  result: T;
};

const useContentSearchQueries = <T extends ContentSearchResponseBase[]>(
  queriesFor: QUERY_TYPES[],
  props: Omit<ContentSearchRequestProps, 'entity'>,
  custom?: CustomQueries
): UseDiscoverQueriesResult<T> => {
  const results = useQueries({
    queries: queriesFor.map((entity) => ({
      queryKey: [entity, JSON.stringify(props)],
      queryFn: () =>
        getSearchResults(
          { entity: entity === 'free' ? undefined : entity, ...props },
          custom ? custom[entity] : undefined
        ),
    })),
  });

  const result = useMemo(() => results.map(({ data }) => data).flat(), [results]);

  const isLoading = !!results.find((q) => q.isFetching) && result.length === 0;

  // eslint-disable-next-line @typescript-eslint/ban-ts-comment
  // @ts-ignore This should be fixed finding a way to type dynamically useQueries.
  return { isLoading, result };
};

export default useContentSearchQueries;
