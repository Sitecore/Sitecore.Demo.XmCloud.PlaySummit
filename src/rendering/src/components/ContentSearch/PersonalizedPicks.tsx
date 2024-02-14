import type { SearchResultsInitialState, SearchResultsWidgetQuery } from '@sitecore-search/react';
import { WidgetDataType, useSearchResults, widget } from '@sitecore-search/react';
import Link from 'next/link';

import { getAbsoluteUrlPath } from '../../helpers/UrlHelper';

type PersonalizedPick = {
  id: string;
  source_id?: string;
  type?: string;
  name?: string;
  description?: string;
  url?: string;
  image_url?: string;
};

export type PersonalizedPicksProps = {
  title?: string;
  itemsToDisplay?: number;
  sxaStyles?: string;
};

type InitialState = SearchResultsInitialState<'itemsPerPage'>;

const PersonalizedPicks = ({ itemsToDisplay = 6, sxaStyles = '' }: PersonalizedPicksProps) => {
  const {
    widgetRef,
    actions: { onItemClick },
    queryResult: { isLoading, isFetching, data: { content: items = [] } = {} },
  } = useSearchResults<PersonalizedPick, InitialState>({
    query: (query: SearchResultsWidgetQuery) => query,
    state: {
      itemsPerPage: itemsToDisplay,
    },
  });

  const fallbackImageURL = 'https://placehold.co/500x300?text=No%20Image';

  // Hide personalized picks when processing
  if (isLoading || isFetching) {
    return null;
  }

  return (
    <div className={`personalized-picks ${sxaStyles}`} ref={widgetRef}>
      <div className="container">
        {items.map((item, index) => (
          <div key={item.id}>
            <Link
              href={getAbsoluteUrlPath(item?.url)}
              className="item"
              onClick={() => onItemClick({ index, id: item.id, sourceId: item?.source_id })}
            >
              <img
                className="item-image"
                src={item?.image_url || fallbackImageURL}
                alt={item?.description || `${item?.type} image`}
              />
              <span className="item-type">{item?.type}</span>
              <span className="item-name">{item?.name}</span>
            </Link>
          </div>
        ))}
      </div>
    </div>
  );
};

export default widget(PersonalizedPicks, WidgetDataType.SEARCH_RESULTS, 'content');
