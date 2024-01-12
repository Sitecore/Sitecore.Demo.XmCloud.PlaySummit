import PreviewSearchItemCard, { PreviewSearchItemCardProps } from './PreviewSearchItemCard';

export type PreviewSearchItemListProps = {
  items?: PreviewSearchItemCardProps[];
};

const PreviewSearchItemList = ({ items = [] }: PreviewSearchItemListProps): JSX.Element => {
  return (
    <section className="preview-search-item-list">
      {items.length > 0 && items.map((item) => <PreviewSearchItemCard key={item.id} {...item} />)}
    </section>
  );
};

export default PreviewSearchItemList;
