import Head from 'next/head';
import { ComponentWithChildrenProps } from 'lib/component-props';
import { Field, ImageField, Placeholder, RichText } from '@sitecore-jss/sitecore-jss-nextjs';
import { Timeslot } from '../../interfaces/Timeslot';
import { Speaker } from 'src/types/speaker';
import { Day } from 'src/types/day';
import { Room } from 'src/types/room';
import { useI18n } from 'next-localization';
import { removeTags } from 'src/helpers/ContentSearchHelper';

export type SessionInformationProps = ComponentWithChildrenProps & {
  fields: {
    Name: Field<string>;
    Description: Field<string>;
    Type: Field<string>;
    Image: ImageField;
    Speakers: Speaker[];
    Rooms: Room[];
    Day: Day[];
    Timeslots: Timeslot[];
    Premium: Field<boolean>;
  };
};

const SessionInformation = (props: SessionInformationProps): JSX.Element => {
  const premiumSessionMetaValue = props.fields.Premium?.value ? 'true' : 'false';
  const sxaStyles = `${props.params?.styles || ''}`;
  const { t } = useI18n();

  const placeholder = !!props.rendering && (
    <Placeholder name="jss-entity-sidebar" rendering={props.rendering} />
  );

  return (
    <>
      <Head>
        <meta name="premiumSession" content={premiumSessionMetaValue} />
        <meta property="og:description" content={removeTags(props.fields?.Description?.value)} />
        <meta property="og:title" content={props.fields?.Name?.value} />
        <meta property="og:image" content={props.fields?.Image?.value.src} />
        <meta property="og:type" content="session" />
      </Head>
      <section className={`section information-section ${sxaStyles}`}>
        <div className="section-content container">
          <div className="information-grid">
            <div className="main-col">
              <div className="column-title">{t('Description') || 'Description'}:</div>
              <RichText className="rich-text" field={props.fields?.Description} />
            </div>
            <div className="sidebar-col">
              {placeholder}
              {props.children}
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export const Default = SessionInformation;
