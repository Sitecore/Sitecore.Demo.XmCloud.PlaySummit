import { Image, Text } from '@sitecore-jss/sitecore-jss-nextjs';
import Link from 'next/link';
import { vendorAdapter } from '../../helpers/ContentSearchHelper';
import { ContentSearchSponsor } from '../../interfaces/contentSearch/ContentSearchSponsor';
import SearchResultsTab, { SearchResultsTabProps } from './SearchResultsTab';

type SearchVendorResultsTabProps = SearchResultsTabProps & {
  items: ContentSearchSponsor[];
};

const SearchVendorResultsTab = (props: SearchVendorResultsTabProps): JSX.Element => {
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
      <section className="section">
        <div className="section-content container">
          <div className="item-grid">
            <div className="grid-content">
              {props.items.map(vendorAdapter).map((vendor, index) => (
                <Link key={index} href={vendor.url} passHref className="grid-item">
                  <Image
                    field={vendor.fields.Logo}
                    alt={vendor.fields.Name.value}
                    width={265}
                    height={265}
                  />
                  <div className="item-details">
                    <Text tag="p" field={vendor.fields.Name} />
                  </div>
                </Link>
              ))}
            </div>
          </div>
        </div>
      </section>
    </SearchResultsTab>
  );
};

export default SearchVendorResultsTab;
