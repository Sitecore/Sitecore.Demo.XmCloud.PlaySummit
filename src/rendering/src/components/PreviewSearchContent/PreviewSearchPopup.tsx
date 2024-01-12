import { SearchResponseSuggestion } from '@sitecore-search/react';

import SuggestionList from './SuggestionList';
import PreviewSearchItemList from './PreviewSearchItemList';
import { PreviewSearchItemCardProps } from './PreviewSearchItemCard';

type PreviewSearchPopupProps = {
  suggestions: SearchResponseSuggestion[];
  items: PreviewSearchItemCardProps[];
  close?: () => void;
  widgetRef: (node: Element) => void;
};

const PreviewSearchPopup = ({
  suggestions,
  items,
  widgetRef,
}: PreviewSearchPopupProps): JSX.Element => {
  return (
    <div className="preview-search-content-container" ref={widgetRef}>
      <div className="preview-search-content">
        <div className="preview-search-content-popup">
          <SuggestionList title="Did you mean?" list={suggestions} />
          {items?.length > 0 && <PreviewSearchItemList items={items} />}
        </div>
      </div>
    </div>
  );
};

export default PreviewSearchPopup;
