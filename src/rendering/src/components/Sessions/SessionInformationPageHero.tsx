import { Field, Image, ImageField, Text } from '@sitecore-jss/sitecore-jss-nextjs';
import { ComponentProps } from 'lib/component-props';
import InfoText from '../NonSitecore/InfoText';
import { faCalendar, faClock, faDoorOpen } from '@fortawesome/free-solid-svg-icons';
import { getSessionDays, getSessionTime } from '../../helpers/DateHelper';
import { Room } from 'src/types/room';
import { Day } from 'src/types/day';
import { Timeslot } from 'src/interfaces/Timeslot';

export type SessionInformationPageHeroProps = ComponentProps & {
  fields: {
    Name: Field<string>;
    Image: ImageField;
    Rooms: Room[];
    Day: Day[];
    Timeslots: Timeslot[];
    Premium: Field<boolean>;
  };
};

/*
  HACK: This file is a duplicate of InformationPageHero.tsx with modifications only for the session page hero.
  TODO: Try to merge the differences of this component into InformationPageHero.tsx without breaking the SpeakerInformationPageHero.tsx and VendorInformationPageHero.tsx components. Then only add specific content for session page hero in this file. Similar to what is being done in SpeakerInformationPageHero.tsx
*/
const SessionInformationPageHero = (props: SessionInformationPageHeroProps): JSX.Element => {
  const premiumSessionQualificative = props?.fields?.Premium?.value ? 'premium' : '';

  return (
    <section
      className={`information-page-hero session-information-page-hero ${premiumSessionQualificative}`}
    >
      <div className="background-container">
        <Image field={props.fields.Image} alt="Image" loading="lazy" />
        <div className="content">
          <div className="content-container">
            <div className="container-content-text">
              <div>
                <p className="title">
                  Explore the{' '}
                  <span className="information-type">{premiumSessionQualificative}</span> session:
                </p>
                <h1 className="name">
                  <Text field={props?.fields?.Name} />
                </h1>
              </div>
              <div>
                {props?.fields?.Rooms && (
                  <InfoText Icon={faDoorOpen}>
                    <Text tag="span" field={props?.fields?.Rooms[0]?.fields?.Name} />
                  </InfoText>
                )}
                <InfoText Icon={faCalendar}>
                  <span>{props?.fields?.Day && getSessionDays(props?.fields?.Day)}</span>
                </InfoText>
                <InfoText Icon={faClock}>
                  <span>
                    {props?.fields?.Timeslots && getSessionTime(props?.fields?.Timeslots)}
                  </span>
                </InfoText>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default SessionInformationPageHero;
