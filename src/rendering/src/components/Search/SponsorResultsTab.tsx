import { Image, Text } from '@sitecore-jss/sitecore-jss-nextjs';
import Link from 'next/link';
import { Sponsor } from '../../types/sponsor';
import { FacetsProps } from './Facets';
import ResultsTab from './ResultsTab';

export type SponsorResultsTabProps = FacetsProps & {
  items: Sponsor[];
};

const SponsorResultsTab = (props: SponsorResultsTabProps): JSX.Element => {
  return (
    <ResultsTab facets={props.facets} filters={props.filters}>
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
