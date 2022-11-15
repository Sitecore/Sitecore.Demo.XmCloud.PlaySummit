import SpeakerCard, { SpeakerCardProps } from './SpeakerCard';

export type SpeakerListProps = {
  resultsUrl: string;
  list?: SpeakerCardProps[];
};

const PreviewSearchSpeakerList = (props: SpeakerListProps): JSX.Element => {
  const { resultsUrl, list = [] } = props;

  return (
    <section className="speaker-list item-grid">
      <span className="search-list-title speaker-list-title">
        <span>Speakers</span>
        <a href={`${resultsUrl}&tab=speaker`} className="view-all">
          View All
        </a>
      </span>
      <div className="grid-content speaker-list-content">
        {list.length > 0 && list.map((item) => <SpeakerCard key={item.id} {...item} />)}
      </div>
    </section>
  );
};

export default PreviewSearchSpeakerList;
