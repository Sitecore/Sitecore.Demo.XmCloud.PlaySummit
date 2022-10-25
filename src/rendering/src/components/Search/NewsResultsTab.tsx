import { PaginationProps } from 'components/Search/Pagination';
import Link from 'next/link';
import { News } from '../../types/news';
import { FacetsProps } from './Facets';
import ResultsTab from './ResultsTab';

export type NewsResultsTabProps = FacetsProps &
  PaginationProps & {
    items: News[];
  };

const NewsResultsTab = (props: NewsResultsTabProps): JSX.Element => {
  return (
    <ResultsTab
      facets={props.facets}
      filters={props.filters}
      productsPerPage={props.productsPerPage}
      currentPage={props.currentPage}
      onPageChange={props.onPageChange}
      totalItems={props.totalItems}
      onClearFilters={props.onClearFilters}
      onFacetValueClick={props.onFacetValueClick}
      onFilterClick={props.onFilterClick}
    >
      {props.items.map((news, index) => (
        <div key={index} className="news-grid-item">
          <Link href={news.url} passHref>
            <a>
              <img
                className="item-image"
                src={news.fields.Image?.value?.src}
                alt="News"
                width="465px"
                height="260px"
                loading="lazy"
              />
              {news.fields.Title?.value}
            </a>
          </Link>
        </div>
      ))}
    </ResultsTab>
  );
};

export default NewsResultsTab;
