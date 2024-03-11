import { SearchResponseSuggestion } from '@sitecore-search/react';

import SuggestionList, { Suggestion } from './SuggestionList';
import PreviewSearchItemList from './PreviewSearchItemList';
import { PreviewSearchItemCardProps } from './PreviewSearchItemCard';

type PreviewSearchPopupProps = {
  suggestions: SearchResponseSuggestion[];
  items: PreviewSearchItemCardProps[];
  widgetRef: (node: Element) => void;
  keyphrase: string;
};

const PreviewSearchPopup = ({
  suggestions,
  items,
  widgetRef,
  keyphrase,
}: PreviewSearchPopupProps): JSX.Element => {
  const keyphraseSuggestion = { text: keyphrase.trim(), freq: 1 } as Suggestion;
  const fallbackSuggestions = [
    { text: 'outdoor sports', freq: 1 },
    { text: 'healthy living', freq: 1 },
    { text: 'cycling', freq: 1 },
  ];

  return (
    <div className="preview-search-content-container" ref={widgetRef}>
      <div className="preview-search-content">
        <div className="preview-search-content-popup">
          {suggestions?.length > 0 ? (
            <SuggestionList title="Did you mean?" list={suggestions} />
          ) : keyphrase ? (
            <SuggestionList list={[keyphraseSuggestion]} />
          ) : (
            <SuggestionList title="Try searching for:" list={fallbackSuggestions} />
          )}
          {items?.length > 0 && <PreviewSearchItemList items={items} />}
        </div>
      </div>
    </div>
  );
};

export default PreviewSearchPopup;
