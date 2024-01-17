import { ComponentWithChildrenProps } from 'lib/component-props';
import { Field, Placeholder, RichText } from '@sitecore-jss/sitecore-jss-nextjs';
import { useI18n } from 'next-localization';
import Head from 'next/head';
import { removeTags } from 'src/helpers/ContentSearchHelper';

export type SpeakerInformationProps = ComponentWithChildrenProps & {
  fields: {
    Description: Field<string>;
  };
};

const SpeakerInformation = (props: SpeakerInformationProps): JSX.Element => {
  const sxaStyles = `${props.params?.styles || ''}`;
  const { t } = useI18n();

  const placeholder = !!props.rendering && (
    <Placeholder name="jss-entity-sidebar" rendering={props.rendering} />
  );

  return (
    <>
      <Head>
        <meta property="og:description" content={removeTags(props.fields?.Description?.value)} />
      </Head>
      <section className={`section information-section ${sxaStyles}`}>
        <div className="section-content container">
          <div className="information-grid">
            <div className="main-col">
              <div className="column-title">{t('Biography') || 'Biography'}:</div>
              <RichText className="rich-text" field={props.fields?.Description} />
            </div>
            <div className="sidebar-col">
              <div className="column-title">{t('Sessions') || 'Sessions'}:</div>
              {placeholder}
              {props.children}
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export const Default = SpeakerInformation;
