import { SearchResponseSuggestion } from '@sitecore-search/react';

import PreviewSearchPopup from './PreviewSearchPopup';
import { PreviewSearchItemCardProps } from './PreviewSearchItemCard';

type PreviewSearchContainerProps = {
  close?: () => void;
  suggestions: SearchResponseSuggestion[];
  items: PreviewSearchItemCardProps[];
  widgetRef: (node: Element) => void;
};

const PreviewSearchContainer = ({
  close,
  suggestions,
  items,
  widgetRef,
}: PreviewSearchContainerProps): JSX.Element => {
  return (
    <PreviewSearchPopup
      suggestions={suggestions}
      items={items}
      close={close}
      widgetRef={widgetRef}
    />
  );
};

export default PreviewSearchContainer;
