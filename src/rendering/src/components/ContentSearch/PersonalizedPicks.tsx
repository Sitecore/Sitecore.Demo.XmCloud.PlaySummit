import type { SearchResultsInitialState, SearchResultsWidgetQuery } from '@sitecore-search/react';
import { WidgetDataType, useSearchResults, widget } from '@sitecore-search/react';
import Link from 'next/link';

import { ContentSearchSession } from '../../interfaces/contentSearch/ContentSearchSession';
import { ContentSearchSponsor } from '../../interfaces/contentSearch/ContentSearchSponsor';
import { ContentSearchVendor } from '../../interfaces/contentSearch/ContentSearchVendor';
import { getAbsoluteUrlPath } from '../../helpers/UrlHelper';

type PersonalizedPick = (ContentSearchSession | ContentSearchSponsor | ContentSearchVendor) & {
  type: string;
  source_id?: string;
};

type PersonalizedPicksProps = {
  title?: string;
  itemsToDisplay?: number;
};

type InitialState = SearchResultsInitialState<'itemsPerPage'>;

const PersonalizedPicks = ({
  title = 'Personalized Picks',
  itemsToDisplay = 3,
}: PersonalizedPicksProps) => {
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
    <div className="personalized-picks" ref={widgetRef}>
      <div className="container">
        <div>
          <h3 className="title">{title}</h3>
          <p className="subtitle">
            A handpicked selection of content recommendations based on your preferences and browsing
            history.
          </p>
        </div>
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
