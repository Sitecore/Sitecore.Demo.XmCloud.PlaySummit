import React, { useCallback, useEffect, useMemo } from 'react';
import { ContentSearchWidgetResponseFacet } from '../../interfaces/contentSearch/ContentSearchWidgetResponse';
import SearchSessionResultsTab from './SearchSessionResultsTab';
import { SearchFiltersProps } from './SearchFilters';
import SearchResults from './SearchResults';
import {
  ACTIVITIES_FACET_TYPE,
  AUDIENCE_FACET_TYPE,
  COMPANY_FACET_TYPE,
  CONTENT_SEARCH_RESULT_TYPE,
  IS_FEATURED_FACET_TYPE,
  IS_PREMIUM_FACET_TYPE,
  JOB_TITLE_FACET_TYPE,
  LEVEL_FACET_TYPE,
  LOCATION_FACET_TYPE,
  SEARCH_PAGE,
  SESSIONS_FACET_TYPE,
  SESSION_SEARCH_RESULT_TYPE,
  SPEAKERS_FACET_TYPE,
  SPEAKER_SEARCH_RESULT_TYPE,
  SPONSORS_FACET_TYPE,
  SPONSOR_SEARCH_RESULT_TYPE,
  VENDORS_FACET_TYPE,
  VENDOR_SEARCH_RESULT_TYPE,
} from '../../helpers/ContentSearchHelper';
import { isSearchSDKEnabled } from '../../services/SearchSDKService';
import {
  SearchResultsInitialState,
  SearchResultsStoreState,
  SearchResultsWidgetQuery,
  WidgetDataType,
  useSearchResults,
  widget,
} from '@sitecore-search/react';
import { ContentSearchSession } from 'src/interfaces/contentSearch/ContentSearchSession';
import SearchSpeakerResultsTab from './SearchSpeakerResultsTab';
import { ContentSearchSpeaker } from 'src/interfaces/contentSearch/ContentSearchSpeaker';
import SearchVendorResultsTab from './SearchVendorResultsTab';
import { ContentSearchVendor } from 'src/interfaces/contentSearch/ContentSearchVendor';
import SearchSponsorResultsTab from './SearchSponsorResultsTab';
import { ContentSearchSponsor } from 'src/interfaces/contentSearch/ContentSearchSponsor';
import SearchNewsResultsTab from './SearchNewsResultsTab';
import { ContentSearchNews } from 'src/interfaces/contentSearch/ContentSearchNews';
import { useRouter } from 'next/router';

type SearchResultsContainerProps = {
  defaultSortType?: SearchResultsStoreState['sortType'];
  defaultPage?: SearchResultsStoreState['page'];
  defaultItemsPerPage?: SearchResultsStoreState['itemsPerPage'];
};

type ContentItemModel = {
  type: string;
};

type InitialState = SearchResultsInitialState<'itemsPerPage' | 'keyphrase' | 'page' | 'sortType'>;

const SearchResultsContainer = ({
  defaultSortType = 'featured_desc',
  defaultPage = 1,
  defaultItemsPerPage = 24,
}: SearchResultsContainerProps): JSX.Element => {
  const router = useRouter();
  const q = useMemo(() => (router?.query['q'] as string) ?? '', [router?.query]);
  const tab = (router?.query['tab'] as string) || 'session';

  const {
    widgetRef,
    actions: {
      onResultsPerPageChange,
      onPageNumberChange,
      // onItemClick,
      onFilterClick,
      onSortChange,
      onFacetClick,
      onClearFilters,
      onKeyphraseChange,
    },
    state: { sortType, page, itemsPerPage },
    queryResult: {
      isLoading,
      isFetching,
      data: {
        // limit = 1,
        total_item: totalItems = 0,
        sort: { choices: sortChoices = [] } = {},
        facet: facets = [],
        content: items = [],
      } = {},
    },
  } = useSearchResults<ContentItemModel, InitialState>({
    query: (query: SearchResultsWidgetQuery) => {
      query
        .getRequest()
        .setSearchQueryHighlightFragmentSize(500)
        .setSearchQueryHighlightFields(['subtitle', 'description']);
    },
    state: {
      sortType: defaultSortType,
      page: defaultPage,
      itemsPerPage: defaultItemsPerPage,
      keyphrase: q,
    },
  });

  const sessionFacets = [
    AUDIENCE_FACET_TYPE,
    IS_PREMIUM_FACET_TYPE,
    SPONSORS_FACET_TYPE,
    VENDORS_FACET_TYPE,
    SPEAKERS_FACET_TYPE,
  ];
  const speakerFacets = [
    COMPANY_FACET_TYPE,
    JOB_TITLE_FACET_TYPE,
    LOCATION_FACET_TYPE,
    SESSIONS_FACET_TYPE,
    IS_FEATURED_FACET_TYPE,
  ];
  const vendorFacets = [
    ACTIVITIES_FACET_TYPE,
    LEVEL_FACET_TYPE,
    SPEAKERS_FACET_TYPE,
    SESSIONS_FACET_TYPE,
  ];
  const sponsorFacets = [LEVEL_FACET_TYPE, SPEAKERS_FACET_TYPE, SESSIONS_FACET_TYPE];
  const newsFacets = [AUDIENCE_FACET_TYPE];

  const tabs = [
    {
      id: SESSION_SEARCH_RESULT_TYPE,
      name: 'Sessions',
      color: '#3d93ff',
      Component: () => (
        <SearchSessionResultsTab
          facets={facets.filter((facet) => sessionFacets.includes(facet.name))}
          filters={[]}
          currentPage={page}
          items={
            items.filter(
              (item) => item.type === SESSION_SEARCH_RESULT_TYPE
            ) as unknown as ContentSearchSession[]
          }
          sortOptions={sortChoices}
          totalItems={items.filter((item) => item.type === SESSION_SEARCH_RESULT_TYPE).length}
          perPage={itemsPerPage}
          loading={isLoading || isFetching}
          sort={sortType}
          onResultsPerPageChange={(numItems) => onResultsPerPageChange({ numItems })}
          onPageChange={(page) => onPageNumberChange({ page })}
          onFilterClick={onFilterClick}
          onSortChange={(name) => onSortChange({ name })}
          onFacetValueClick={onFacetClick}
          onClearFilters={onClearFilters}
        />
      ),
    },
    {
      id: SPEAKER_SEARCH_RESULT_TYPE,
      name: 'Speakers',
      color: '#ff8d02',
      Component: () => (
        <SearchSpeakerResultsTab
          facets={facets.filter((facet) => speakerFacets.includes(facet.name))}
          filters={[]}
          currentPage={page}
          items={
            items.filter(
              (item) => item.type === SPEAKER_SEARCH_RESULT_TYPE
            ) as unknown as ContentSearchSpeaker[]
          }
          sortOptions={sortChoices}
          totalItems={items.filter((item) => item.type === SPEAKER_SEARCH_RESULT_TYPE).length}
          perPage={itemsPerPage}
          loading={isLoading || isFetching}
          sort={sortType}
          onResultsPerPageChange={(numItems) => onResultsPerPageChange({ numItems })}
          onPageChange={(page) => onPageNumberChange({ page })}
          onFilterClick={onFilterClick}
          onSortChange={(name) => onSortChange({ name })}
          onFacetValueClick={onFacetClick}
          onClearFilters={onClearFilters}
        />
      ),
    },
    {
      id: VENDOR_SEARCH_RESULT_TYPE,
      name: 'Vendors',
      color: '#ff1a87',
      Component: () => (
        <SearchVendorResultsTab
          facets={facets.filter((facet) => vendorFacets.includes(facet.name))}
          filters={[]}
          currentPage={page}
          items={
            items.filter(
              (item) => item.type === VENDOR_SEARCH_RESULT_TYPE
            ) as unknown as ContentSearchVendor[]
          }
          sortOptions={sortChoices}
          totalItems={items.filter((item) => item.type === VENDOR_SEARCH_RESULT_TYPE).length}
          perPage={itemsPerPage}
          loading={isLoading || isFetching}
          sort={sortType}
          onResultsPerPageChange={(numItems) => onResultsPerPageChange({ numItems })}
          onPageChange={(page) => onPageNumberChange({ page })}
          onFilterClick={onFilterClick}
          onSortChange={(name) => onSortChange({ name })}
          onFacetValueClick={onFacetClick}
          onClearFilters={onClearFilters}
        />
      ),
    },
    {
      id: SPONSOR_SEARCH_RESULT_TYPE,
      name: 'Sponsors',
      color: '#ffd51d',
      Component: () => (
        <SearchSponsorResultsTab
          facets={facets.filter((facet) => sponsorFacets.includes(facet.name))}
          filters={[]}
          currentPage={page}
          items={
            items.filter(
              (item) => item.type === SPONSOR_SEARCH_RESULT_TYPE
            ) as unknown as ContentSearchSponsor[]
          }
          sortOptions={sortChoices}
          totalItems={items.filter((item) => item.type === SPONSOR_SEARCH_RESULT_TYPE).length}
          perPage={itemsPerPage}
          loading={isLoading || isFetching}
          sort={sortType}
          onResultsPerPageChange={(numItems) => onResultsPerPageChange({ numItems })}
          onPageChange={(page) => onPageNumberChange({ page })}
          onFilterClick={onFilterClick}
          onSortChange={(name) => onSortChange({ name })}
          onFacetValueClick={onFacetClick}
          onClearFilters={onClearFilters}
        />
      ),
    },
    {
      id: CONTENT_SEARCH_RESULT_TYPE,
      name: 'News',
      color: '#000',
      Component: () => (
        <SearchNewsResultsTab
          facets={facets.filter((facet) => newsFacets.includes(facet.name))}
          filters={[]}
          currentPage={page}
          items={
            items.filter(
              (item) => item.type === CONTENT_SEARCH_RESULT_TYPE
            ) as unknown as ContentSearchNews[]
          }
          sortOptions={sortChoices}
          totalItems={items.filter((item) => item.type === CONTENT_SEARCH_RESULT_TYPE).length}
          perPage={itemsPerPage}
          loading={isLoading || isFetching}
          sort={sortType}
          onResultsPerPageChange={(numItems) => onResultsPerPageChange({ numItems })}
          onPageChange={(page) => onPageNumberChange({ page })}
          onFilterClick={onFilterClick}
          onSortChange={(name) => onSortChange({ name })}
          onFacetValueClick={onFacetClick}
          onClearFilters={onClearFilters}
        />
      ),
    },
  ];

  const days = useMemo(
    () =>
      facets.find(({ name }) => name === 'days') ||
      ({ value: [] } as ContentSearchWidgetResponseFacet),
    [facets]
  );
  const rooms = useMemo(
    () =>
      facets.find(({ name }) => name === 'rooms') ||
      ({ value: [] } as ContentSearchWidgetResponseFacet),
    [facets]
  );

  const filterOptions = useMemo<SearchFiltersProps['options']>(() => {
    return {
      schedule: days.value?.map(({ text, id }) => ({ value: id, label: text })) || [],
      rooms: rooms.value?.map(({ text, id }) => ({ value: id, label: text })) || [],
    };
  }, [days, rooms]);

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

  // using keyphrase as key allow us to re mount results, "resetting" any control in it
  return (
    <section className="w-full">
      <div ref={widgetRef}>
        <SearchResults
          filterOptions={filterOptions}
          tabs={tabs}
          selectedTab={tab}
          keyphrase={q}
          totalItems={totalItems}
          onFilterClick={(id, value) =>
            onFilterClick({ facetId: id, facetValueId: value, type: 'text' })
          }
          onKeyphraseChange={handleKeyphraseChange}
          onKeyphraseClear={handleKeyphraseClear}
        />
      </div>
    </section>
  );
};

const SearchResultsWidget = widget(
  SearchResultsContainer,
  WidgetDataType.SEARCH_RESULTS,
  'content'
);

export default SearchResultsWidget;
