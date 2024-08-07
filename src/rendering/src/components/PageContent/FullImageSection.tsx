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
    <section className={`section flex items-center justify-center w-full`}>
      <div className="flex flex-col lg:flex-row justify-evenly container">
        <div>
          <Image field={fields.backgroundImage} alt={fields.title} loading="lazy" className="" />
        </div>
        <div className="full-image-section-content w-fit">
          <div className="content-card">
            <Text tag="h2" field={fields.title} className="text-[36px]" />
            <RichText field={fields.content} />
            <button className="dpworld-btn">View Careers</button>
          </div>
        </div>
      </div>
    </section>
  );
};

export const Default = withDatasourceCheck()<FullImageSectionProps>(FullImageSection);
