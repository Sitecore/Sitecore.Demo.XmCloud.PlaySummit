import Link from 'next/link';
import { faBuilding, faMapMarkerAlt, faUserTie } from '@fortawesome/free-solid-svg-icons';
import InfoText from '../NonSitecore/InfoText';
import { getAbsoluteUrlPath } from '../../helpers/UrlHelper';

export type SpeakerCardProps = {
  id: string;
  image_url: string;
  name: string;
  url: string;
  location: string;
  company: string;
  job_title: string;
};

const SpeakerCard = (props: SpeakerCardProps): JSX.Element => {
  const { image_url, name, url, location, company, job_title } = props;

  const jobTitle = job_title && (
    <InfoText Icon={faUserTie}>
      <span>{job_title}</span>
    </InfoText>
  );

  const companyValue = company && (
    <InfoText Icon={faBuilding}>
      <span>{company}</span>
    </InfoText>
  );

  const locationValue = location && (
    <InfoText Icon={faMapMarkerAlt}>
      <span>{location}</span>
    </InfoText>
  );

  return (
    <Link href={getAbsoluteUrlPath(url)} className="row-item">
      <img src={image_url} width="150" alt="Speaker image" />
      <div className="item-details item-details-left">
        <div className="item-title">{name}</div>
        {jobTitle}
        {companyValue}
        {locationValue}
      </div>
    </Link>
  );
};

export default SpeakerCard;
