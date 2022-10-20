import { facetsProp, filtersProp } from '../mock-discover-data';

export const defaultArgs = {
  facets: facetsProp,
  filters: filtersProp,
  sortOptions: [
    {
      name: 'featured_desc',
      label: 'Recommended',
    },
    {
      name: 'session_days_asc',
      label: 'Schedule - A to Z',
    },
    {
      name: 'session_days_desc',
      label: 'Schedule - Z to A',
    },
    {
      name: 'session_duration_asc',
      label: 'Duration - Low to High',
    },
    {
      name: 'session_duration_desc',
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
