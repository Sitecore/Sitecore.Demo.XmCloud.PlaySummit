import { useQueries } from '@tanstack/react-query';
import merge from 'lodash.merge';
import * as api from '../lib/discover/api';
import { DiscoverRequestProps } from '../lib/discover/api';

export type QUERY_TYPES = 'session' | 'speaker' | 'content' | 'vendor' | 'sponsor' | 'free';
export type CustomQueries = {
  [key in QUERY_TYPES]: Omit<DiscoverRequestProps, 'entity' | 'widgetId'>;
};

const useDiscoverQueries = <T>(
  queriesFor: QUERY_TYPES[],
  props: Omit<DiscoverRequestProps, 'entity'>,
  custom?: CustomQueries
): T => {
  const result = useQueries({
    queries: queriesFor.map((entity) => ({
      queryKey: [entity, JSON.stringify(props)],
      queryFn: () =>
        api.get(
          { entity: entity === 'free' ? undefined : entity, ...props },
          custom ? merge({}, props, custom[entity]) : props
        ),
      keepPreviousData: true,
      refetchOnWindowFocus: false,
    })),
  });

  // eslint-disable-next-line @typescript-eslint/ban-ts-comment
  // @ts-ignore
  return queriesFor.map((_, index) => result[index]);
};

export default useDiscoverQueries;
