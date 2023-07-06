import { useQuery } from '@tanstack/react-query';
import { FEATURED_SORTING_OPTION, getSortingOptions } from '../helpers/ContentSearchHelper';
import { debounceAsync } from '../helpers/Debounce';
import { FC, useCallback, useContext, useEffect, useState } from 'react';
import SearchResultsTab from '../components/ContentSearch/SearchResultsTab';
import { SearchContext } from '../components/ContentSearch/SearchProvider';
import { FacetValueClickedActionPayload } from '../interfaces/contentSearch/FacetValueClickedActionPayload';
import {
  getSearchResults,
  ContentSearchRequestFilter,
  ContentSearchRequestProps,
} from '../services/ContentSearchService';

type SearchProps = {
  entity: ContentSearchRequestProps['entity'];
  hasFilters?: boolean;
  facetsTypes: string[];
  keyphrase: string;
  topFilters: ContentSearchRequestFilter[];
  tabFilters: ContentSearchRequestFilter[];
  perPage: number;
  sort: string;
  page: number;
};

const connectResultsTab = ({
  entity,
  facetsTypes,
  hasFilters = true,
  defaultSort = FEATURED_SORTING_OPTION,
}: {
  entity: ContentSearchRequestProps['entity'];
  hasFilters?: boolean;
  facetsTypes: string[];
  defaultPerPage?: number;
  defaultSort?: string;
}): (<T extends typeof SearchResultsTab>(WrappedComponent: T) => FC) => {
  // Since some of the state needs to be reset when top filters change, we want to debounce the actual request
  // to use the latest state
  const search = debounceAsync(
    ({
      entity,
      keyphrase,
      hasFilters,
      topFilters,
      tabFilters,
      facetsTypes,
      perPage,
      sort,
      page,
    }: SearchProps) =>
      getSearchResults({
        widgetId: 'rfkid_7',
        entity,
        keyphrase,
        filters: [...(hasFilters ? topFilters : []), ...tabFilters],
        facets: facetsTypes,
        limit: perPage,
        sort,
        page,
      }).then((response) => {
        if (!response.facet) {
          return response;
        }
        // omits top filters
        return {
          ...response,
          facet: response.facet.filter(
            ({ name }) => !topFilters.map(({ facetId }) => facetId).includes(name)
          ),
        };
      }),
    50
  );

  return <T extends typeof SearchResultsTab>(WrappedComponent: T): FC => {
    const Component: FC = () => {
      const {
        keyphrase,
        filters: topFilters,
        onUpdate,
        perPage,
        onPerPageChange,
      } = useContext(SearchContext);

      const [tabFilters, setTabFilters] = useState<ContentSearchRequestFilter[]>([]);
      const [sort, setSort] = useState(defaultSort);
      const [page, setPage] = useState(1);

      // reset pagination and filters when top filters change
      useEffect(() => {
        setPage(1);
      }, [topFilters, perPage]);

      const onPageNumberChange = useCallback((page: number) => {
        setPage(page);
      }, []);

      const onClearFilters = useCallback(() => {
        setTabFilters([]);
        setPage(1);
      }, []);

      const onSortChange = useCallback((sortType: string) => {
        setSort(sortType);
        setPage(1);
      }, []);

      const onFacetClick = useCallback(
        ({ facetId, facetValueId, checked }: FacetValueClickedActionPayload) => {
          if (checked) {
            setTabFilters((filters) => [...filters, { facetId, facetValueId }]);
          } else {
            setTabFilters((filters) =>
              filters.filter(
                ({ facetId: currentFacetId, facetValueId: currentFacetValueId }) =>
                  currentFacetId !== facetId || currentFacetValueId !== facetValueId
              )
            );
          }
          setPage(1);
        },
        []
      );

      const onFilterClick = onFacetClick;

      const {
        isLoading,
        isFetching,
        data: {
          facet: facets = [],
          total_item: totalItems = 0,
          sort: { choices: sortChoices = [] } = {},
          content: items = [],
        } = {},
      } = useQuery([entity, keyphrase, topFilters, tabFilters, page, sort, perPage], () =>
        search({
          entity,
          keyphrase,
          hasFilters,
          topFilters,
          tabFilters,
          facetsTypes,
          perPage,
          sort,
          page,
        })
      );

      useEffect(() => {
        !isLoading && onUpdate(entity, totalItems);
      }, [onUpdate, totalItems, isLoading]);

      const sortOptions = getSortingOptions(entity, sortChoices);

      if (!isLoading && items.length === 0) {
        return (
          <div className="search-results-tab-no-results">
            <div>No results found</div>
          </div>
        );
      }

      return (
        // eslint-disable-next-line @typescript-eslint/ban-ts-comment
        // @ts-ignore not sure to resolve this one
        <WrappedComponent
          facets={facets}
          loading={isFetching}
          filters={tabFilters}
          onFacetValueClick={onFacetClick}
          currentPage={page}
          totalItems={totalItems}
          sortOptions={sortOptions}
          perPage={perPage}
          onPageChange={onPageNumberChange}
          onFilterClick={onFilterClick}
          onClearFilters={onClearFilters}
          onSortChange={onSortChange}
          onResultsPerPageChange={onPerPageChange}
          sort={sort}
          items={items}
        />
      );
    };

    Component.displayName = `connectResultsTab(${
      WrappedComponent.displayName || WrappedComponent.name || 'Component'
    })`;

    return Component;
  };
};

export default connectResultsTab;
