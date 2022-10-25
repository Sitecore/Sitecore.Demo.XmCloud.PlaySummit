import { Image, Text } from '@sitecore-jss/sitecore-jss-nextjs';
import Link from 'next/link';
import { Vendor } from '../../types/vendor';
import { FacetsProps } from './Facets';
import ResultsTab from './ResultsTab';

export type VendorResultsTabProps = FacetsProps & {
  items: Vendor[];
};

const VendorResultsTab = (props: VendorResultsTabProps): JSX.Element => {
  return (
    <ResultsTab facets={props.facets} filters={props.filters}>
      {props.items.map((vendor, index) => (
        <Link key={index} href={vendor.url} passHref>
          <a className="grid-item">
            <Image
              field={vendor.fields.Logo}
              alt={vendor.fields.Name.value}
              width={265}
              height={265}
            />
            <div className="item-details">
              <Text tag="p" field={vendor.fields.Name} />
            </div>
          </a>
        </Link>
      ))}
    </ResultsTab>
  );
};

export default VendorResultsTab;
