import { SEARCH_PAGE } from '../../helpers/ContentSearchHelper';

export type Suggestion = {
  text?: string;
  freq?: number;
};

export type SuggestionList = {
  title?: string;
  list?: Suggestion[];
};

const Suggestion = ({ text }: Suggestion): JSX.Element => {
  return (
    <a href={`${SEARCH_PAGE}?q=${text}`} className="suggestion-item">
      <span>{text}</span>
    </a>
  );
};

const SuggestionList = (props: SuggestionList): JSX.Element => {
  const { title, list = [] } = props;

  return (
    <section className="suggestion-list">
      <span className="suggestion-list-title">{title}</span>
      <div className="suggestion-container">
        {list.map(
          (item) => item?.text && <Suggestion key={`${item.text}_${item.freq}`} {...item} />
        )}
      </div>
    </section>
  );
};

export default SuggestionList;
