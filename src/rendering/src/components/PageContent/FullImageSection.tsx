import {
  Field,
  Image,
  ImageField,
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
    backgroundImage: ImageField;
  };
};

const FullImageSection = ({ fields, params }: FullImageSectionProps): JSX.Element => {
  const sxaStyles = `${params?.styles || ''}`;

  const callToAction = fields.callToActionLink && (
    <Link field={fields.callToActionLink} className="btn-main" />
  );

  return (
    <section className={`section full-image-section ${sxaStyles}`}>
      <Image field={fields.backgroundImage} alt={fields.title} loading="lazy" />
      <div className="section-content full-image-section-content container">
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
