import * as ControllableStateHook from '@radix-ui/react-use-controllable-state';
import { useEffect, useState } from 'react';

export type Page = { page: number; isCurrent: boolean };

export interface Pagination {
  totalPages: number;
  currentPage: number;
  pages: Array<Page>;
  hasPrev: boolean;
  hasNext: boolean;
  prevPage: number;
  nextPage: number;
  setPage: (page: number) => void;
}

const generatePages = (totalPages: number, currentPage: number): Array<Page> => {
  const pages: Array<Page> = [];

  for (let i = 1; i <= totalPages; i++) {
    pages.push({
      page: i,
      isCurrent: i === currentPage,
    });
  }

  return pages;
};

const usePagination = ({
  onPageChange,
  totalPages = 0,
  defaultCurrentPage,
  currentPage,
}: {
  onPageChange: (state: number) => void;
  totalPages: number;
  defaultCurrentPage: number;
  currentPage: number;
}): Pagination => {
  const [page = currentPage || defaultCurrentPage || 1, setPage] =
    ControllableStateHook.useControllableState<number>({
      prop: currentPage,
      defaultProp: defaultCurrentPage,
      onChange: onPageChange,
    });

  const [pages, setPages] = useState(() => generatePages(totalPages, page));

  useEffect(() => {
    if (page > totalPages) {
      setPage(totalPages);
    }
  }, [page, setPage, totalPages]);

  useEffect(() => {
    setPages(generatePages(totalPages, page));
  }, [totalPages, page]);

  const hasNext = page < totalPages;
  const hasPrev = page > 1;
  const prevPage = hasPrev ? page - 1 : page;
  const nextPage = hasNext ? page + 1 : page;

  return {
    currentPage: page,
    totalPages,
    pages,
    hasPrev,
    hasNext,
    setPage,
    prevPage,
    nextPage,
  };
};

export default usePagination;
