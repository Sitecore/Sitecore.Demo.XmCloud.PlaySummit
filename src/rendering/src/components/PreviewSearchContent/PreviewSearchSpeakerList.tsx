import Link from 'next/link';
import SpeakerCard, { SpeakerCardProps } from './SpeakerCard';

export type SpeakerListProps = {
  title?: string;
  list: SpeakerCardProps[];
};

const VIEW_ALL_SPEAKERS_URL = '/speakers';

const PreviewSearchSpeakerList = (props: SpeakerListProps): JSX.Element => {
  const { title, list } = props;
  return (
    <section className={`speaker-list item-grid`}>
      <span className={`speaker-list-title`}>
        {title}
        <Link href={VIEW_ALL_SPEAKERS_URL}>
          <a className={`view-all`}>View All</a>
        </Link>
      </span>
      <div className={`grid-content speaker-list-content`}>
        {list.length > 0
          ? list.map((item) => (
              // eslint-disable-next-line react/jsx-key
              <SpeakerCard {...item} />
            ))
          : null}
      </div>
    </section>
  );
};

export default PreviewSearchSpeakerList;
