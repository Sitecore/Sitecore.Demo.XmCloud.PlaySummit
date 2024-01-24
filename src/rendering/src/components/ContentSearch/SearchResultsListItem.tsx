import { getSearchItemHref } from 'src/helpers/UrlHelper';
import { ContentItemModel } from './SearchResultsWidget';
import Link from 'next/link';
import parse from 'html-react-parser';
import { useCallback } from 'react';

const SearchResultsListItem = ({ item }: { item: ContentItemModel }) => {
  const getHighlightContent = useCallback((highlight: { [key: string]: string }) => {
    const priorityFields = ['description', 'excerpt', 'content'];

    for (const property of priorityFields) {
      if (highlight.hasOwnProperty(property)) {
        return highlight[property][0];
      }
    }

    for (const property in highlight) {
      if (highlight.hasOwnProperty(property) && property !== 'name') {
        return `<span class="capitalize">${property.replaceAll('_', ' ')}:</span> ${
          highlight[property][0]
        }`;
      }
    }

    return '';
  }, []);

  return (
    <Link key={item.id} href={getSearchItemHref(item.type, item.url)}>
      <li className={`item-${item.type}`}>
        {item.image_url && (
          <div className="item-image">
            <img src={item.image_url} alt={item.name} />
          </div>
        )}
        <div className="item-content">
          <span className="item-type-label">{item.type}</span>
          {item.publish_date && (
            <span className="item-date-label">
              {new Date(item.publish_date).toLocaleDateString('en-US', {
                year: 'numeric',
                month: 'short',
                day: 'numeric',
              })}
            </span>
          )}
          <h3>{!!item.highlight?.name ? parse(item.highlight?.name[0]) : item.name}</h3>
          <p>{!!item.highlight && parse(getHighlightContent(item.highlight))}</p>
        </div>
      </li>
    </Link>
  );
};

export default SearchResultsListItem;
