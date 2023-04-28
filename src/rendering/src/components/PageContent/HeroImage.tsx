import {
  ImageField,
  withDatasourceCheck,
  Image as JssImage,
} from '@sitecore-jss/sitecore-jss-nextjs';
import { ComponentProps } from 'lib/component-props';

export type HeroImageProps = ComponentProps & {
  fields: {
    hero: ImageField;
  };
};

const HeroImage = (props: HeroImageProps): JSX.Element => {
  const sxaStyles = `${props.params?.styles || ''}`;

  if (props.fields?.hero?.value?.src) {
    return (
      <section className={`hero-image ${sxaStyles}`}>
        <JssImage field={props.fields.hero} />
      </section>
    );
  }

  return <div>Hero image is missing from the datasource</div>;
};

export const Default = withDatasourceCheck()<HeroImageProps>(HeroImage);
