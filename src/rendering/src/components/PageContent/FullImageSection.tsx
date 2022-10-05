import {
  Field,
  Link,
  LinkField,
  RichText,
  Text,
  withDatasourceCheck,
} from '@sitecore-jss/sitecore-jss-nextjs';
import { ComponentProps } from 'lib/component-props';

type FullImageSectionProps = ComponentProps & {
  fields: {
    title: Field<string>;
    subtitle: Field<string>;
    content: Field<string>;
    callToActionLink: LinkField;
  };
};

const FullImageSection = ({ fields, params }: FullImageSectionProps): JSX.Element => {
  const sectionCssClasses = `section full-image-section ${params?.styles}`;
  const positionCssClasses = `section-content full-image-section-content container`;

  const callToAction = fields.callToActionLink && (
    <Link field={fields.callToActionLink} className="btn-main" />
  );

  return (
    <section className={sectionCssClasses}>
      <div className={positionCssClasses}>
        <div className="content-card">
          <Text tag="h5" field={fields.subtitle} />
          <Text tag="h2" field={fields.title} />
          <RichText field={fields.content} />
          {callToAction}
        </div>
      </div>
    </section>
  );
};

export const Default = withDatasourceCheck()<FullImageSectionProps>(FullImageSection);
