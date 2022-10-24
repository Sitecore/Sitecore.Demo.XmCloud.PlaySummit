import ItemCard, { ItemCardProps } from './ItemCard';

export type ItemList = {
  title?: string;
  list: ItemCardProps[];
};

const ItemList = (props: ItemList): JSX.Element => {
  return (
    <section className={`item-list`}>
      <span className={`item-list-title`}>{props.title}</span>
      {props.list.length > 0
        ? props.list.map((item) => (
            // eslint-disable-next-line react/jsx-key
            <ItemCard {...item} />
          ))
        : null}
    </section>
  );
};

export default ItemList;
