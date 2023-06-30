import { ComponentWithChildrenProps } from 'lib/component-props';
import { Field, Placeholder, RichText } from '@sitecore-jss/sitecore-jss-nextjs';

export type SpeakerInformationProps = ComponentWithChildrenProps & {
  fields: {
    Description: Field<string>;
  };
};

const SpeakerInformation = (props: SpeakerInformationProps): JSX.Element => {
  const sxaStyles = `${props.params?.styles || ''}`;

  const placeholder = !!props.rendering && (
    <Placeholder name="jss-entity-sidebar" rendering={props.rendering} />
  );

  return (
    <section className={`section information-section ${sxaStyles}`}>
      <div className="section-content container">
        <div className="information-grid">
          <div className="main-col">
            <div className="column-title">Biography:</div>
            <RichText className="rich-text" field={props.fields?.Description} />
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

export const Default = SpeakerInformation;
