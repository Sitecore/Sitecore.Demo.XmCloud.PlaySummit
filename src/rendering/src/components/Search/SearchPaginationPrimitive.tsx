import * as RadixContext from '@radix-ui/react-context';
import * as Radix from '@radix-ui/react-primitive';
import React, { useCallback } from 'react';

import type { Pagination as UsePagination } from '../../hooks/usePagination';
import usePagination from '../../hooks/usePagination';

/* -------------------------------------------------------------------------------------------------
 * Pagination
 * ----------------------------------------------------------------------------------------------- */
type PrimitiveLinkElement = React.ElementRef<typeof Radix.Primitive.a>;
type PrimitiveLinkProps = Radix.ComponentPropsWithoutRef<typeof Radix.Primitive.a>;
type PrimitiveDivProps = Radix.ComponentPropsWithoutRef<typeof Radix.Primitive.div>;

const dataCurrentProp = (page: number, current: number) => ({
  'data-current': page === current,
});

const PAGINATION_NAME = 'Pagination';
type PaginationElement = React.ElementRef<typeof Radix.Primitive.nav>;

type PaginationProps = PrimitiveDivProps & {
  /**
   * Total number of available pages.
   */
  totalPages: number;
  /**
   * The current page number.
   */
  currentPage?: number;
  /**
   * The current default page number.
   */
  defaultCurrentPage?: number;
  onPageChange: (page: number) => void;
  href?: (page: number) => string;
};

type PaginationContextValue = UsePagination & {
  hrefFunc: (page: number) => string;
};

type ScopedProps<P> = P & { __scopePagination?: RadixContext.Scope };
const [createPaginationContext, createPaginationScope] =
  RadixContext.createContextScope(PAGINATION_NAME);

const [PaginationProvider, usePaginationContext] =
  createPaginationContext<PaginationContextValue>(PAGINATION_NAME);
const defaultHrefFunc = (page: number) => `#${page}`;

const Pagination: React.FC<PaginationProps> = React.forwardRef<PaginationElement, PaginationProps>(
  (props: ScopedProps<PaginationProps>, forwardedRef) => {
    const {
      __scopePagination,
      totalPages,
      currentPage,
      defaultCurrentPage,
      onPageChange,
      href = defaultHrefFunc,
      ...paginationProps
    } = props;

    const pagination = usePagination({
      totalPages,
      currentPage,
      defaultCurrentPage,
      onPageChange,
    });

    return (
      <PaginationProvider scope={__scopePagination} {...pagination} hrefFunc={href}>
        <Radix.Primitive.nav aria-label="pagination" {...paginationProps} ref={forwardedRef} />
      </PaginationProvider>
    );
  }
);

Pagination.displayName = PAGINATION_NAME;

/* -------------------------------------------------------------------------------------------------
 * PaginationFirstPage
 * ----------------------------------------------------------------------------------------------- */
const PAGINATION_FIRST_PAGE = 'PaginationFirstPage';

type PaginationFirstPageProps = PrimitiveLinkProps & {
  children: React.ReactNode | ((page: number) => React.ReactNode);
};

const PaginationFirstPage = React.forwardRef<PrimitiveLinkElement, PaginationFirstPageProps>(
  (props: ScopedProps<PaginationFirstPageProps>, forwardedRef) => {
    const { __scopePagination, children, ...paginationFirstProps } = props;
    const { onClick: onClickHandler } = paginationFirstProps;
    const { hrefFunc, currentPage, setPage } = usePaginationContext(
      PAGINATION_FIRST_PAGE,
      __scopePagination
    );
    const onClick = useCallback(
      (event: React.MouseEvent<HTMLAnchorElement, MouseEvent>) => {
        onClickHandler?.(event);
        setPage(1);
      },
      [setPage, onClickHandler]
    );

    return (
      <Radix.Primitive.a
        ref={forwardedRef}
        aria-disabled={currentPage === 1}
        {...dataCurrentProp(1, currentPage)}
        data-page={1}
        href={hrefFunc(1)}
        {...paginationFirstProps}
        onClick={onClick}
      >
        {
          // eslint-disable-next-line @typescript-eslint/ban-ts-comment
          // @ts-ignore
          (typeof children === 'function' ? children(1) : children) as React.ReactNode
        }
      </Radix.Primitive.a>
    );
  }
);

PaginationFirstPage.displayName = PAGINATION_FIRST_PAGE;

/* -------------------------------------------------------------------------------------------------
 * PaginationLastPage
 * ----------------------------------------------------------------------------------------------- */
const PAGINATION_LAST_PAGE = 'PaginationLastPage';

type PaginationLastPageProps = PrimitiveLinkProps & {
  children: React.ReactNode | ((page: number) => React.ReactNode);
};

const PaginationLastPage = React.forwardRef<PrimitiveLinkElement, PaginationLastPageProps>(
  (props: ScopedProps<PaginationLastPageProps>, forwardedRef) => {
    const { __scopePagination, children, ...paginationLastProps } = props;
    const { onClick: onClickHandler } = paginationLastProps;
    const { hrefFunc, totalPages, currentPage, setPage } = usePaginationContext(
      PAGINATION_LAST_PAGE,
      __scopePagination
    );
    const onClick = useCallback(
      (event: React.MouseEvent<HTMLAnchorElement, MouseEvent>) => {
        onClickHandler?.(event);
        setPage(totalPages);
      },
      [setPage, totalPages, onClickHandler]
    );

    return (
      <Radix.Primitive.a
        ref={forwardedRef}
        aria-disabled={totalPages === currentPage}
        {...dataCurrentProp(totalPages, currentPage)}
        data-page={totalPages}
        href={hrefFunc(totalPages)}
        {...paginationLastProps}
        onClick={onClick}
      >
        {
          // eslint-disable-next-line @typescript-eslint/ban-ts-comment
          // @ts-ignore
          (typeof children === 'function' ? children(totalPages) : children) as React.ReactNode
        }
      </Radix.Primitive.a>
    );
  }
);

PaginationLastPage.displayName = PAGINATION_LAST_PAGE;

/* -------------------------------------------------------------------------------------------------
 * PaginationPrevPage
 * ----------------------------------------------------------------------------------------------- */
const PAGINATION_PREV_PAGE = 'PaginationPrevPage';

type PaginationPrevPageProps = PrimitiveLinkProps & {
  children: React.ReactNode | ((page: number) => React.ReactNode);
};

const PaginationPrevPage = React.forwardRef<PrimitiveLinkElement, PaginationPrevPageProps>(
  (props: ScopedProps<PaginationPrevPageProps>, forwardedRef) => {
    const { __scopePagination, children, ...paginationPrevProps } = props;
    const { onClick: onClickHandler } = paginationPrevProps;
    const { currentPage, prevPage, hrefFunc, setPage } = usePaginationContext(
      PAGINATION_PREV_PAGE,
      __scopePagination
    );
    const onClick = useCallback(
      (event: React.MouseEvent<HTMLAnchorElement, MouseEvent>) => {
        onClickHandler?.(event);
        setPage(prevPage);
      },
      [onClickHandler, setPage, prevPage]
    );

    return (
      <Radix.Primitive.a
        ref={forwardedRef}
        aria-disabled={prevPage === currentPage}
        {...dataCurrentProp(prevPage, currentPage)}
        data-page={prevPage}
        href={hrefFunc(prevPage)}
        {...paginationPrevProps}
        onClick={onClick}
      >
        {
          // eslint-disable-next-line @typescript-eslint/ban-ts-comment
          // @ts-ignore
          (typeof children === 'function' ? children(prevPage) : children) as React.ReactNode
        }
      </Radix.Primitive.a>
    );
  }
);

PaginationPrevPage.displayName = PAGINATION_PREV_PAGE;

/* -------------------------------------------------------------------------------------------------
 * PaginationNextPage
 * ----------------------------------------------------------------------------------------------- */
const PAGINATION_NEXT_PAGE = 'PaginationNextPage';

type PaginationNextProps = PrimitiveLinkProps & {
  children: React.ReactNode | ((page: number) => React.ReactNode);
};

const PaginationNextPage = React.forwardRef<PrimitiveLinkElement, PaginationNextProps>(
  (props: ScopedProps<PaginationNextProps>, forwardedRef) => {
    const { __scopePagination, children, ...paginationNextProps } = props;
    const { onClick: onClickHandler } = paginationNextProps;
    const { currentPage, nextPage, hrefFunc, setPage } = usePaginationContext(
      PAGINATION_NEXT_PAGE,
      __scopePagination
    );
    const onClick = useCallback(
      (event: React.MouseEvent<HTMLAnchorElement, MouseEvent>) => {
        onClickHandler?.(event);
        setPage(nextPage);
      },
      [onClickHandler, setPage, nextPage]
    );

    return (
      <Radix.Primitive.a
        ref={forwardedRef}
        aria-disabled={nextPage === currentPage}
        {...dataCurrentProp(nextPage, currentPage)}
        data-page={nextPage}
        href={hrefFunc(nextPage)}
        {...paginationNextProps}
        onClick={onClick}
      >
        {
          // eslint-disable-next-line @typescript-eslint/ban-ts-comment
          // @ts-ignore
          (typeof children === 'function' ? children(nextPage) : children) as React.ReactNode
        }
      </Radix.Primitive.a>
    );
  }
);

PaginationNextPage.displayName = PAGINATION_NEXT_PAGE;

/* -------------------------------------------------------------------------------------------------
 * PaginationPages
 * ----------------------------------------------------------------------------------------------- */
const PAGINATION_PAGES = 'PaginationPages';

type PaginationPagesElement = React.ElementRef<typeof Radix.Primitive.div>;
type PaginationPagesProps = PrimitiveDivProps & {
  children: React.ReactNode | ((props: UsePagination) => React.ReactNode);
};

const PaginationPages = React.forwardRef<PaginationPagesElement, PaginationPagesProps>(
  (props: ScopedProps<PaginationPagesProps>, forwardedRef) => {
    const { __scopePagination, children, ...paginationPageProps } = props;
    const pagination = usePaginationContext(PAGINATION_PAGES, __scopePagination);

    return (
      <Radix.Primitive.div ref={forwardedRef} {...paginationPageProps}>
        {
          // eslint-disable-next-line @typescript-eslint/ban-ts-comment
          // @ts-ignore
          (typeof children === 'function' ? children(pagination) : children) as React.ReactNode
        }
      </Radix.Primitive.div>
    );
  }
);

PaginationPages.displayName = PAGINATION_PAGES;

/* -------------------------------------------------------------------------------------------------
 * PaginationPage
 * ----------------------------------------------------------------------------------------------- */
const PAGINATION_PAGE = 'PaginationPage';

type PaginationPageProps = PrimitiveLinkProps & {
  page: number;
};

const PaginationPage = React.forwardRef<PrimitiveLinkElement, PaginationPageProps>(
  (props: ScopedProps<PaginationPageProps>, forwardedRef) => {
    const { __scopePagination, page, ...paginationPageProps } = props;
    const { onClick: onClickHandler } = paginationPageProps;
    const { currentPage, setPage, hrefFunc } = usePaginationContext(
      PAGINATION_PAGE,
      __scopePagination
    );
    const onClick = useCallback(
      (event: React.MouseEvent<HTMLAnchorElement, MouseEvent>) => {
        onClickHandler?.(event);
        setPage(page);
      },
      [onClickHandler, setPage, page]
    );

    return (
      <Radix.Primitive.a
        ref={forwardedRef}
        {...(page === currentPage ? { 'aria-current': 'page' } : {})}
        {...dataCurrentProp(page, currentPage)}
        data-page={page}
        href={hrefFunc(page)}
        {...paginationPageProps}
        onClick={onClick}
      />
    );
  }
);

PaginationPage.displayName = PAGINATION_PAGE;

/* -------------------------------------------------------------------------------------------------
 * PaginationTruncate
 * ----------------------------------------------------------------------------------------------- */
const PAGINATION_TRUNCATE = 'PaginationTruncate';

type PaginationTruncateElement = React.ElementRef<typeof Radix.Primitive.span>;
type PaginationTruncateProps = Radix.ComponentPropsWithoutRef<typeof Radix.Primitive.span>;

const PaginationTruncate = React.forwardRef<PaginationTruncateElement, PaginationTruncateProps>(
  (props: ScopedProps<PaginationTruncateProps>, forwardedRef) => {
    // eslint-disable-next-line @typescript-eslint/no-unused-vars
    const { __scopePagination, ...paginationTruncateProps } = props;
    return <Radix.Primitive.span ref={forwardedRef} {...paginationTruncateProps} />;
  }
);

PaginationTruncate.displayName = PAGINATION_TRUNCATE;

const Root = Pagination;
const FirstPage = PaginationFirstPage;
const LastPage = PaginationLastPage;
const PrevPage = PaginationPrevPage;
const NextPage = PaginationNextPage;
const Page = PaginationPage;
const Pages = PaginationPages;
const Truncate = PaginationTruncate;

export {
  createPaginationContext,
  createPaginationScope,
  //
  Pagination,
  PaginationFirstPage,
  PaginationLastPage,
  PaginationPrevPage,
  PaginationNextPage,
  PaginationTruncate,
  //
  Root,
  FirstPage,
  LastPage,
  PrevPage,
  NextPage,
  Page,
  Pages,
  Truncate,
};
export type { PaginationProps };
