import { Image, Text } from '@sitecore-jss/sitecore-jss-nextjs';
import { PaginationProps } from 'components/Search/Pagination';
import Link from 'next/link';
import { Sponsor } from '../../types/sponsor';
import { FacetsProps } from './Facets';
import ResultsTab from './ResultsTab';

export type SponsorResultsTabProps = FacetsProps &
  PaginationProps & {
    items: Sponsor[];
  };

const SponsorResultsTab = (props: SponsorResultsTabProps): JSX.Element => {
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
      {props.items.map((sponsor, index) => (
        <Link key={index} href={sponsor.url} passHref>
          <a className="grid-item">
            <Image
              field={sponsor.fields.Logo}
              alt={sponsor.fields.Name.value}
              width={265}
              height={265}
            />
            <div className="item-details">
              <Text tag="p" field={sponsor.fields.Name} />
            </div>
          </a>
        </Link>
      ))}
    </ResultsTab>
  );
};

export default SponsorResultsTab;
