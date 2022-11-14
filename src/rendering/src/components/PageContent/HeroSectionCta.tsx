import { ComponentProps } from 'lib/component-props';
import { LinkField, Link, withDatasourceCheck } from '@sitecore-jss/sitecore-jss-nextjs';

export type HeroSectionCtaProps = ComponentProps & {
  fields: {
    Link: LinkField;
  };
};

const HeroSectionCta = ({ fields, params }: HeroSectionCtaProps): JSX.Element => {
  const sxaStyles = `${params?.styles || ''}`;

  return (
    <div className={`btn-area ${sxaStyles}`}>
      <Link field={fields.Link} className="btn-main" />
    </div>
  );
};

export const Default = withDatasourceCheck()<HeroSectionCtaProps>(HeroSectionCta);
