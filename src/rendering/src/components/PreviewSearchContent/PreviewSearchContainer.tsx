import { SearchResponseSuggestion } from '@sitecore-search/react';

import PreviewSearchPopup from './PreviewSearchPopup';
import { PreviewSearchItemCardProps } from './PreviewSearchItemCard';

type PreviewSearchContainerProps = {
  suggestions: SearchResponseSuggestion[];
  items: PreviewSearchItemCardProps[];
  widgetRef: (node: Element) => void;
  keyphrase: string;
};

const PreviewSearchContainer = ({
  suggestions,
  items,
  widgetRef,
  keyphrase,
}: PreviewSearchContainerProps): JSX.Element => {
  return (
    <PreviewSearchPopup
      suggestions={suggestions}
      items={items}
      widgetRef={widgetRef}
      keyphrase={keyphrase}
    />
  );
};

export default PreviewSearchContainer;
