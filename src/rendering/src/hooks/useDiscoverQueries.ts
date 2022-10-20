import { useQueries } from '@tanstack/react-query';
import { useMemo } from 'react';
import { DiscoverResponseBase } from '../interfaces/discover/DiscoverResponse';
import * as api from '../lib/discover/api';
import { DiscoverRequestProps } from '../lib/discover/api';

export type QUERY_TYPES = 'session' | 'speaker' | 'content' | 'vendor' | 'sponsor' | 'free';
export type CustomQueries = {
  [key in QUERY_TYPES]?: unknown;
};
export type UseDiscoverQueriesResult<T extends DiscoverResponseBase[]> = {
  isLoading: boolean;
  result: T;
};

const useDiscoverQueries = <T extends DiscoverResponseBase[]>(
  queriesFor: QUERY_TYPES[],
  props: Omit<DiscoverRequestProps, 'entity'>,
  custom?: CustomQueries
): UseDiscoverQueriesResult<T> => {
  const results = useQueries({
    queries: queriesFor.map((entity) => ({
      queryKey: [entity, JSON.stringify(props)],
      queryFn: () =>
        api.get(
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

export default useDiscoverQueries;
