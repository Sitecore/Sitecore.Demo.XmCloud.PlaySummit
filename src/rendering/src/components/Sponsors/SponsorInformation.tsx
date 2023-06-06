import { Field, Placeholder, RichText } from '@sitecore-jss/sitecore-jss-nextjs';
import { ComponentWithChildrenProps } from 'lib/component-props';

export type SponsorInformationProps = ComponentWithChildrenProps & {
  fields: {
    Description: Field<string>;
  };
};

const SponsorInformation = (props: SponsorInformationProps): JSX.Element => {
  const sxaStyles = `${props.params?.styles || ''}`;

  const placeholder = !!props.rendering && (
    <Placeholder name="jss-entity-sessions" rendering={props.rendering} />
  );

  return (
    <section className={`section information-section ${sxaStyles}`}>
      <div className="section-content container">
        <div className="information-grid">
          <div className="main-col">
            <div className="column-title">Sponsor history:</div>
            <RichText className="rich-text" field={props.fields.Description} />
          </div>
          <div className="sidebar-col">
            <div className="column-title">Sessions:</div>
            {placeholder}
            {props.children}
          </div>
        </div>
      </div>
    </section>
  );
};

export const Default = SponsorInformation;
