import Link from 'next/link';
import { Text } from '@sitecore-jss/sitecore-jss-nextjs';
import { faBuilding, faMapMarkerAlt, faUserTie } from '@fortawesome/free-solid-svg-icons';
import InfoText from '../NonSitecore/InfoText';

export type SpeakerCardProps = {
  id: string;
  image_url: string;
  name: string;
  url: string;
  location: string;
  company: string;
  job_title: string;
};

const SessionCard = (props: SpeakerCardProps): JSX.Element => {
  const { image_url, name, url, location, company, job_title } = props;

  const jobTitle = job_title && (
    <InfoText Icon={faUserTie}>
      <Text tag="span" field={{ value: job_title }} />
    </InfoText>
  );

  const companyValue = company && (
    <InfoText Icon={faBuilding}>
      <Text tag="span" field={{ value: company }} />
    </InfoText>
  );

  const locationValue = location && (
    <InfoText Icon={faMapMarkerAlt}>
      <Text tag="span" field={{ value: location }} />
    </InfoText>
  );

  return (
    <Link href={url}>
      <a className={`row-item`}>
        <img src={image_url} width="150" height="100" alt={`Speaker image`} />
        <div className={`item-details item-details-left`}>
          <Text tag="div" className={`item-title`} field={{ value: name }} />
          {jobTitle}
          {companyValue}
          {locationValue}
        </div>
      </a>
    </Link>
  );
};

export default SessionCard;
