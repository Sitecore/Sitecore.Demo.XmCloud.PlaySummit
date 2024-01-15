import React, { useCallback, useEffect, useMemo } from 'react';
import { SEARCH_PAGE } from '../../helpers/ContentSearchHelper';
import { isSearchSDKEnabled } from '../../services/SearchSDKService';
import {
  SearchResultsInitialState,
  SearchResultsStoreState,
  SearchResultsWidgetQuery,
  WidgetDataType,
  useSearchResults,
  useSearchResultsSelectedFilters,
  widget,
} from '@sitecore-search/react';
import { useRouter } from 'next/router';
import SearchResultsLayout from './SearchResultsLayout';
import SearchResultsListing from './SearchResultsListing';
import Link from 'next/link';

type SearchResultsProps = {
  defaultSortType?: SearchResultsStoreState['sortType'];
  defaultPage?: SearchResultsStoreState['page'];
  defaultItemsPerPage?: SearchResultsStoreState['itemsPerPage'];
};

type ContentItemModel = {
  type: string;
  name: string;
  url: string;
  image_url?: string;
  publish_date?: string;
};

type InitialState = SearchResultsInitialState<'itemsPerPage' | 'keyphrase' | 'page' | 'sortType'>;

const SearchResults = ({
  defaultSortType = 'featured_desc',
  defaultPage = 1,
  defaultItemsPerPage = 6,
}: SearchResultsProps): JSX.Element => {
  const router = useRouter();
  const q = useMemo(() => (router?.query['q'] as string) ?? '', [router?.query]);

  const {
    widgetRef,
    actions: {
      onResultsPerPageChange,
      onPageNumberChange,
      onSortChange,
      onFacetClick,
      onRemoveFilter,
      onClearFilters,
      onKeyphraseChange,
    },
    state: { sortType, page, itemsPerPage },
    queryResult: {
      isLoading,
      isFetching,
      data: {
        total_item: totalItems = 0,
        sort: { choices: sortChoices = [] } = {},
        facet: facets = [],
        content: items = [],
      } = {},
    },
  } = useSearchResults<ContentItemModel, InitialState>({
    query: (query: SearchResultsWidgetQuery) => {
      query.getRequest();
    },
    state: {
      sortType: defaultSortType,
      page: defaultPage,
      itemsPerPage: defaultItemsPerPage,
      keyphrase: q,
    },
  });
  const selectedFacetsFromApi = useSearchResultsSelectedFilters();

  const searchResultsItems = useMemo(
    () =>
      items.map((item) => (
        <Link key={item.url} href={item.url}>
          <li className={`item-${item.type}`}>
            {item.image_url && (
              <div className="item-image">
                <img src={item.image_url} alt={item.name} />
              </div>
            )}
            <div className="item-content">
              <span className="item-type-label">{item.type}</span>
              {item.publish_date && (
                <span className="item-date-label">
                  {new Date(item.publish_date).toLocaleDateString('en-US', {
                    year: 'numeric',
                    month: 'short',
                    day: 'numeric',
                  })}
                </span>
              )}
              <h3>{item.name}</h3>
            </div>
          </li>
        </Link>
      )),
    [items]
  );

  const handleKeyphraseChange = useCallback(
    (value: string) => {
      if (q !== value) {
        router.push(`${SEARCH_PAGE}?q=${value}`);
        onKeyphraseChange({ keyphrase: value });
      }
    },
    [q, router, onKeyphraseChange]
  );

  const handleKeyphraseClear = useCallback(() => {
    router.push(`${SEARCH_PAGE}?q=`);
    onKeyphraseChange({ keyphrase: '' });

    const searchInput = document.querySelector(
      'input.search-results-header-search-input'
    ) as HTMLInputElement;
    searchInput.value = '';
  }, [onKeyphraseChange, router]);

  useEffect(() => onKeyphraseChange({ keyphrase: q }), [onKeyphraseChange, q]);

  if (!isSearchSDKEnabled) {
    return (
      <div>
        The search page is currently disabled because the content search integration is not
        configured.
      </div>
    );
  }

  return (
    <section className="search-results-widget" ref={widgetRef}>
      <div>
        <SearchResultsLayout
          keyphrase={q}
          onKeyphraseChange={handleKeyphraseChange}
          onKeyphraseClear={handleKeyphraseClear}
        >
          {!items.length ? (
            <p className="search-results-widget-no-results">No results found</p>
          ) : (
            <SearchResultsListing
              loading={isLoading || isFetching}
              facets={facets}
              selectedFacets={selectedFacetsFromApi}
              perPage={itemsPerPage}
              currentPage={page}
              onResultsPerPageChange={(numItems) => onResultsPerPageChange({ numItems })}
              onSortChange={(name) => onSortChange({ name })}
              sort={sortType}
              sortOptions={sortChoices}
              onPageChange={(page) => onPageNumberChange({ page })}
              totalItems={totalItems}
              onClearFilters={onClearFilters}
              onRemoveFilter={onRemoveFilter}
              onFacetValueClick={onFacetClick}
            >
              {searchResultsItems}
            </SearchResultsListing>
          )}
        </SearchResultsLayout>
      </div>
    </section>
  );
};

const SearchResultsWidget = widget(SearchResults, WidgetDataType.SEARCH_RESULTS, 'content');

export default SearchResultsWidget;
