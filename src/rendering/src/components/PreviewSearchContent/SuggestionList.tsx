export type Suggestion = {
  text?: string;
  url?: string;
};

export type SuggestionList = {
  title?: string;
  list: Suggestion[];
};

const Suggestion = (props: Suggestion): JSX.Element => {
  return (
    <a href={props.url} className={`suggestion-item`}>
      <span>{props.text}</span>
    </a>
  );
};

const SuggestionList = (props: SuggestionList): JSX.Element => {
  return (
    <section className={`suggestion-list`}>
      <span className={`suggestion-list-title`}>{props.title}</span>
      {props.list.length > 0
        ? // eslint-disable-next-line react/jsx-key
          props.list.map((item) => <Suggestion url={item.url} text={item.text}></Suggestion>)
        : null}
    </section>
  );
};

export default SuggestionList;
