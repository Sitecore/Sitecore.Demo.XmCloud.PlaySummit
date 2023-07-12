import {
  Link,
  Image,
  ImageField,
  LinkField,
  withDatasourceCheck,
} from '@sitecore-jss/sitecore-jss-nextjs';
import { ComponentProps } from 'lib/component-props';

type FullImageCTASectionProps = ComponentProps & {
  fields: {
    callToActionLink: LinkField;
    backgroundImage: ImageField;
  };
};

const FullImageCTASection = (props: FullImageCTASectionProps): JSX.Element => {
  const sxaStyles = `${props.params?.styles || ''}`;
  const callToAction = props.fields?.callToActionLink && (
    <Link field={props.fields?.callToActionLink} className="btn-square" />
  );

  return (
    <section className={`section full-image-section full-image-cta-section ${sxaStyles}`}>
      <Image field={props.fields?.backgroundImage} alt="" loading="lazy" />
      <div className="section-content full-image-section-content">{callToAction}</div>
    </section>
  );
};

export const Default = withDatasourceCheck()<FullImageCTASectionProps>(FullImageCTASection);
