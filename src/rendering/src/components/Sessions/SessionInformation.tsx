import Head from 'next/head';
import { ComponentProps } from 'lib/component-props';
import { Field, ImageField, RichText } from '@sitecore-jss/sitecore-jss-nextjs';
import { Timeslot } from '../../interfaces/Timeslot';
import { Speaker } from 'src/types/speaker';
import { Day } from 'src/types/day';
import { Room } from 'src/types/room';
import SpeakerList from '../Speakers/SpeakerList';

export type SessionInformationProps = ComponentProps & {
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

  const speakers =
    props.fields?.Speakers && props.fields.Speakers.length > 0 ? (
      <SpeakerList speakers={props.fields.Speakers} />
    ) : (
      <div>No sessions</div>
    );

  return (
    <>
      <Head>
        <meta name="premiumSession" content={premiumSessionMetaValue} />
      </Head>
      <section className={`section information-section ${sxaStyles}`}>
        <div className="section-content container">
          <div className="information-grid">
            <div className="main-col">
              <div className="column-title">Description:</div>
              <RichText className="rich-text" field={props.fields?.Description} />
            </div>
            <div className="sidebar-col">{speakers}</div>
          </div>
        </div>
      </section>
    </>
  );
};

export const Default = SessionInformation;
