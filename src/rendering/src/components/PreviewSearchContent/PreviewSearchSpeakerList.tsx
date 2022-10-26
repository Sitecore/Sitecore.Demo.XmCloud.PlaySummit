import router from 'next/router';
import SpeakerCard, { SpeakerCardProps } from './SpeakerCard';

export type SpeakerListProps = {
  title?: string;
  list: SpeakerCardProps[];
  closePopup: () => void;
};

const VIEW_ALL_SPEAKERS_URL = '/speakers';

const PreviewSearchSpeakerList = (props: SpeakerListProps): JSX.Element => {
  const { title, list, closePopup } = props;

  const viewAllClick = () => {
    closePopup();
    router.push(`${VIEW_ALL_SPEAKERS_URL}`);
  }

  return (
    <section className={`speaker-list item-grid`}>
      <span className={`speaker-list-title`}>
        {title}
        <a className={`view-all`} onClick={viewAllClick}>
          View All
        </a>
      </span>
      <div className={`grid-content speaker-list-content`}>
        {list.length > 0 &&
          list.map((item) => (
            // eslint-disable-next-line react/jsx-key
            <SpeakerCard {...item} />
          ))}
      </div>
    </section>
  );
};

export default PreviewSearchSpeakerList;
