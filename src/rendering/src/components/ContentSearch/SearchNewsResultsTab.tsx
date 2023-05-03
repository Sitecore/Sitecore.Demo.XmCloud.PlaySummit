import { DateField, Image, RichText, Text } from '@sitecore-jss/sitecore-jss-nextjs';
import Link from 'next/link';
import { newsDateFormatter } from '../../helpers/DateHelper';
import { newsAdapter } from '../../helpers/ContentSearchHelper';
import { ContentSearchNews } from '../../interfaces/contentSearch/ContentSearchNews';
import SearchResultsTab, { SearchResultsTabProps } from './SearchResultsTab';

type SearchNewsResultsTabProps = SearchResultsTabProps & {
  items: ContentSearchNews[];
};

const SearchNewsResultsTab = (props: SearchNewsResultsTabProps): JSX.Element => {
  return (
    <SearchResultsTab
      loading={props.loading}
      facets={props.facets}
      filters={props.filters}
      perPage={props.perPage}
      currentPage={props.currentPage}
      onResultsPerPageChange={props.onResultsPerPageChange}
      onSortChange={props.onSortChange}
      sort={props.sort}
      sortOptions={props.sortOptions}
      onPageChange={props.onPageChange}
      totalItems={props.totalItems}
      onClearFilters={props.onClearFilters}
      onFacetValueClick={props.onFacetValueClick}
      onFilterClick={props.onFilterClick}
    >
      <section className="section section-news-list">
        <div className="container">
          <div className="content">
            {props.items.map(newsAdapter).map((news, index) => (
              <div key={index} className="news">
                <div className="image-container">
                  <Image
                    field={news.fields.Image}
                    alt={news.fields.Title}
                    width={340}
                    height={227}
                  />
                </div>
                <div className="text-container">
                  <Text tag="div" className="news-title" field={news.fields.Title} />
                  <DateField
                    tag="p"
                    className="news-date"
                    field={news.fields.PublishDate}
                    render={newsDateFormatter}
                  />
                  <RichText className="news-excerpt" field={news.fields.Excerpt} />
                </div>
                <div className="button-container">
                  <Link href={news.url} className="btn-main">
                    Read&nbsp;More
                  </Link>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>
    </SearchResultsTab>
  );
};

export default SearchNewsResultsTab;
