export type CategoriesListProps = {
  title?: string;
  subtitle?: string;
  theme?: string;
};

const CategoriesList = (props: CategoriesListProps): JSX.Element => {
  const themeClass = props.theme ? `categories-list-${props.theme}` : '';

  return (
    <section className={`categories-list ${themeClass}`}>
      <div className="categories-list-title">
        <h1>{props.title}</h1>
        <p>{props.subtitle}</p>
      </div>
    </section>
  );
};

export default CategoriesList;
