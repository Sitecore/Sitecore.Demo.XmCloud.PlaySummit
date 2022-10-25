import { ArrowLeftIcon, ArrowRightIcon } from '@radix-ui/react-icons';
import { Pagination } from '@sitecore-discover/ui';

export type PaginationProps = {
  currentPage: number;
  totalItems: number;
  productsPerPage: number;
  onPageChange: (page: number) => void;
};

const PaginationComponent = (props: PaginationProps): JSX.Element => {
  const totalPages = Math.min(Math.ceil(props.totalItems / props.productsPerPage) || 0, 20);
  if (totalPages <= 1) {
    return null;
  }
  return (
    <Pagination.Root
      className="search-pagination"
      currentPage={props.currentPage}
      defaultCurrentPage={1}
      totalPages={totalPages}
      onPageChange={props.onPageChange}
    >
      <Pagination.PrevPage
        className="search-pagination-nav-link"
        onClick={(e) => e.preventDefault()}
      >
        <ArrowLeftIcon />
      </Pagination.PrevPage>
      <Pagination.Pages className="search-pagination-pages">
        {
          // eslint-disable-next-line @typescript-eslint/ban-ts-comment
          // @ts-ignore This is something we have to fix in our SDK
          ({ pages }) =>
            pages.map(({ page }) => (
              <Pagination.Page
                key={page}
                className="search-pagination-link"
                aria-label={`Page ${page}`}
                page={page}
                onClick={(e) => e.preventDefault()}
              >
                {page}
              </Pagination.Page>
            ))
        }
      </Pagination.Pages>
      <Pagination.NextPage
        className="search-pagination-nav-link"
        onClick={(e) => e.preventDefault()}
      >
        <ArrowRightIcon />
      </Pagination.NextPage>
    </Pagination.Root>
  );
};

export default PaginationComponent;
