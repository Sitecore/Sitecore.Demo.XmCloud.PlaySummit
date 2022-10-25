import { faCalendar, faUser } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { Text } from '@sitecore-jss/sitecore-jss-nextjs';
import Link from 'next/link';

export type SessionCardProps = {
  id: string;
  image_url: string;
  name: string;
  description: string;
  url: string;
  days: string[];
  speakers: string[];
  time_slots: string[];
};

const SessionCard = (props: SessionCardProps): JSX.Element => {
  const { image_url, name, url, days, speakers, time_slots } = props;

  const date = days && days.length > 0 && time_slots && time_slots.length > 0 && (
    <p>
      <span>
        <FontAwesomeIcon className={`icon`} icon={faCalendar} />
      </span>
      {`${days.join(' - ')} at ${time_slots.join(', ')}`}
    </p>
  );

  const speaker = speakers && speakers.length > 0 && (
    <p>
      <span>
        <FontAwesomeIcon className={`icon`} icon={faUser} />
      </span>
      {speakers.join(' - ')}
    </p>
  );

  return (
    <Link href={url}>
      <a className={`grid-item`}>
        <div className={`image-hover-zoom`} style={{ backgroundImage: `url(${image_url})` }}></div>
        <div className={`item-details item-details-left`}>
          <Text tag="div" className={`item-title`} field={{ value: name }} />
          {speaker}
          {date}
        </div>
      </a>
    </Link>
  );
};

export default SessionCard;
