import {
  Text,
  Field,
  RichText,
  Image,
  ImageField,
  withDatasourceCheck,
} from '@sitecore-jss/sitecore-jss-nextjs';
import { ComponentProps } from 'lib/component-props';
import { isCdpConfigured } from '../../services/CdpService';

export type HeroProps = ComponentProps & {
  fields: {
    Hero: ImageField;
    Slogan: Field<string>;
    Eyebrow: Field<string>;
    Title: Field<string>;
    Body: Field<string>;
  };
};

const HeroSection = (props: HeroProps): JSX.Element => {
  const sxaStyles = `${props.params?.styles || ''}`;

  const withCdp = isCdpConfigured && (
    <div className="cdp-hero-wrapper">
      <div id="cdp-audience-based-home-page-hero"></div>
    </div>
  );

  const withoutCdp = !isCdpConfigured && (
    <>
      <section
        className={`hero-section hero-section-editable hero_${props.rendering.uid} ${sxaStyles} h-full`}
      >
        <div className="hero-background">
          <Image field={props.fields.Hero} />
        </div>
        <div className="hero-container">
          <div className="container-content">
            <div className="content-text">
              <Text field={props.fields.Title} tag="h3" className="title" />
              <RichText field={props.fields.Body} tag="div" className="subtitle" />
            </div>
          </div>
        </div>
      </section>
    </>
  );

  return (
    <>
      {withCdp}
      {withoutCdp}
    </>
  );
};

export const Default = withDatasourceCheck()<HeroProps>(HeroSection);
