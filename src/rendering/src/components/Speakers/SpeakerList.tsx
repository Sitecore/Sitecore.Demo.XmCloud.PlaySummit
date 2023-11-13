import Link from 'next/link';
import { Text, Image } from '@sitecore-jss/sitecore-jss-nextjs';
import { Speaker } from 'src/types/speaker';
import InfoText from '../NonSitecore/InfoText';
import { faBuilding, faMapMarkerAlt, faUserTie } from '@fortawesome/free-solid-svg-icons';
import { useI18n } from 'next-localization';

const SpeakerListItem = (speaker: Speaker): JSX.Element => {
  const featuredSpeakerCssClass = speaker.fields.Featured.value ? 'featured' : '';
  const { t } = useI18n();

  const jobTitle = speaker.fields.JobTitle.value && (
    <InfoText Icon={faUserTie}>
      <Text tag="span" field={speaker.fields.JobTitle} />
    </InfoText>
  );

  const company = speaker.fields.Company.value && (
    <InfoText Icon={faBuilding}>
      <Text tag="span" field={speaker.fields.Company} />
    </InfoText>
  );

  const location = speaker.fields.Location.value && (
    <InfoText Icon={faMapMarkerAlt}>
      <Text tag="span" field={speaker.fields.Location} />
    </InfoText>
  );

  return (
    <div className={`information-block ${featuredSpeakerCssClass}`}>
      <div className="info-col-left">
        <Image
          field={speaker.fields?.Picture}
          alt={speaker.fields?.Name?.value}
          width={275}
          height={275}
        />
      </div>
      <div className="info-col-content">
        <Text field={speaker.fields.Name} tag="div" className="info-col-title" />
        {jobTitle}
        {company}
        {location}
        <div className="info-col-cta">
          <Link href={speaker.url} className="btn-main">
            {t('Learn more') || 'Learn more'}
          </Link>
        </div>
      </div>
    </div>
  );
};

type SpeakerListProps = {
  fields: {
    Speakers: Speaker[];
  };
};

const SpeakerList = (props: SpeakerListProps): JSX.Element => {
  const { t } = useI18n();
  const speakers =
    props?.fields?.Speakers && props?.fields?.Speakers.length > 0 ? (
      <div className="speaker-list">
        {props.fields.Speakers.map((speaker, index) => (
          <SpeakerListItem {...speaker} key={index} />
        ))}
      </div>
    ) : (
      <p>{t('No speakers') || 'No speakers'}</p>
    );

  return <>{speakers}</>;
};

export default SpeakerList;
