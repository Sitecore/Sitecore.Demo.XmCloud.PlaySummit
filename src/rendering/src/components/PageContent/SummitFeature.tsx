import {
  Field,
  ImageField,
  Text,
  LinkField,
  Link,
  Image,
  withDatasourceCheck,
} from '@sitecore-jss/sitecore-jss-nextjs';
import { ComponentProps } from 'lib/component-props';

export type SummitFeatureProps = ComponentProps & {
  fields: {
    Logo: ImageField;
    Title: Field<string>;
    Description: Field<string>;
    Link: LinkField;
  };
};

const SummitFeature = (props: SummitFeatureProps): JSX.Element => {
  const sxaStyles = `${props.params?.styles || ''}`;

  return (
    <div className={`grid-item ${sxaStyles}`}>
      <Link field={props.fields.Link}>
        <Image field={props.fields.Logo} alt={props.fields.Title.value} />

        <div className="item-details item-details-left">
          <Text tag="div" className="item-title" field={props.fields.Title} />
          <Text tag="p" className="item-description" field={props.fields.Description} />
        </div>
      </Link>
    </div>
  );
};

export const Default = withDatasourceCheck()<SummitFeatureProps>(SummitFeature);
