import {
  FEATURED_SORTING_OPTION,
  SESSION_DAYS_ASC_SORTING_OPTION,
  SESSION_DAYS_DESC_SORTING_OPTION,
  SESSION_DURATION_ASC_SORTING_OPTION,
  SESSION_DURATION_DESC_SORTING_OPTION,
} from '../../helpers/ContentSearchHelper';
import { facetsProp, filtersProp } from '../mock-search-data';

export const mockSearchResultsTabCommonArgs = {
  facets: facetsProp,
  filters: filtersProp,
  sortOptions: [
    {
      name: FEATURED_SORTING_OPTION,
      label: 'Recommended',
    },
    {
      name: SESSION_DAYS_ASC_SORTING_OPTION,
      label: 'Schedule - A to Z',
    },
    {
      name: SESSION_DAYS_DESC_SORTING_OPTION,
      label: 'Schedule - Z to A',
    },
    {
      name: SESSION_DURATION_ASC_SORTING_OPTION,
      label: 'Duration - Low to High',
    },
    {
      name: SESSION_DURATION_DESC_SORTING_OPTION,
      label: 'Duration - High to Low',
    },
  ],
  currentPage: 1,
  totalItems: 77,
  perPage: 10,
  onPageChange: (page: number): void => {
    console.log(page);
  },
};
