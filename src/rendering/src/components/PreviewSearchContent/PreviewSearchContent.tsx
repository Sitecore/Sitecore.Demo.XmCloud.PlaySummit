import { useCallback, useEffect, useRef, useState } from 'react';
import { useRouter } from 'next/router';
import {
  PreviewSearchInitialState,
  PreviewSearchWidgetQuery,
  WidgetDataType,
  usePreviewSearch,
  widget,
} from '@sitecore-search/react';

import PreviewSearchContainer from './PreviewSearchContainer';
import ClickOutside from '../ShopCommon/ClickOutside';
import PreviewSearchInput from './PreviewSearchInput';
import PreviewSearchIcon from './PreviewSearchIcon';
import { SEARCH_PAGE } from '../../helpers/ContentSearchHelper';
import { PreviewSearchItemCardProps } from './PreviewSearchItemCard';

type InitialState = PreviewSearchInitialState<'itemsPerPage' | 'suggestionsList'>;

type PreviewSearchContentProps = {
  defaultItemsPerPage?: number;
};

const PreviewSearchContent = ({
  defaultItemsPerPage = 4,
}: PreviewSearchContentProps): JSX.Element => {
  const router = useRouter();
  const { q } = router.query;

  const {
    widgetRef,
    actions: { onKeyphraseChange },
    queryResult: {
      isFetching,
      isLoading,
      data: {
        content: items,
        suggestion: { content_name_context_aware: suggestions = [] } = {},
      } = {},
    },
    state: { keyphrase = (q as string) || '' },
  } = usePreviewSearch<PreviewSearchItemCardProps, InitialState>({
    query: (query: PreviewSearchWidgetQuery) =>
      query
        .getRequest()
        .setSearchQueryHighlightFragmentSize(500)
        .setSearchQueryHighlightFields(['title', 'description']),
    state: {
      suggestionsList: [
        {
          suggestion: 'content_name_context_aware',
          max: 4,
        },
      ],
      itemsPerPage: defaultItemsPerPage,
    },
  });

  const [isPreviewSearchOpen, setIsPreviewSearchOpen] = useState(false);
  const containerRef = useRef(null);
  const inputRef = useRef(null);

  const onClose = useCallback(() => setIsPreviewSearchOpen(false), []);

  useEffect(() => {
    // subscribe to next/router event
    router?.events.on('routeChangeStart', onClose);
    return () => {
      // unsubscribe to event on unmount to prevent memory leak
      router?.events.off('routeChangeStart', onClose);
    };
  }, [router, onClose]);

  useEffect(() => {
    if (isPreviewSearchOpen && inputRef.current) {
      inputRef.current.focus();
    }
  }, [isPreviewSearchOpen]);

  const onRedirect = useCallback(
    (keyphrase: string) => {
      router?.push(`${SEARCH_PAGE}?q=${keyphrase || ''}`);
    },
    [router]
  );

  const onSearchIconClick = useCallback(
    (keyphrase: string) => {
      setIsPreviewSearchOpen((isPreviewSearchOpen) => {
        if (isPreviewSearchOpen) {
          onRedirect(keyphrase);
        }
        return !isPreviewSearchOpen;
      });
    },
    [onRedirect]
  );

  const onInputFocus = useCallback(() => {
    if (!isPreviewSearchOpen) {
      setIsPreviewSearchOpen(true);
    }
  }, [isPreviewSearchOpen]);

  const onEscapePressed = useCallback(() => {
    inputRef.current.blur();
    setIsPreviewSearchOpen(false);
  }, []);

  const handleKeyphraseChange = useCallback(
    (value: string) => {
      if (keyphrase !== value) {
        onKeyphraseChange({ keyphrase: value });
      }
    },
    [onKeyphraseChange, keyphrase]
  );

  const handleKeyphraseClear = useCallback(() => {
    onKeyphraseChange({ keyphrase: '' });

    const previewSearchInput = document.querySelector(
      'input.search-input-play'
    ) as HTMLInputElement;
    previewSearchInput.value = '';
  }, [onKeyphraseChange]);

  ClickOutside([containerRef], onClose);

  // Hide preview search when on search page
  if (router?.pathname === SEARCH_PAGE) {
    return null;
  }

  return (
    <div ref={containerRef}>
      {isPreviewSearchOpen && !isLoading && !isFetching && (
        <PreviewSearchContainer
          suggestions={suggestions}
          items={items}
          widgetRef={widgetRef}
          keyphrase={keyphrase}
        />
      )}
      <PreviewSearchInput
        placeholder="Search content"
        onEnter={onRedirect}
        className={`search-input-play ${!isPreviewSearchOpen ? 'search-input-play-hidden' : ''}`}
        onFocus={onInputFocus}
        onEscapePressed={onEscapePressed}
        onChange={handleKeyphraseChange}
        value={keyphrase}
        onClear={handleKeyphraseClear}
        inputRef={inputRef}
      />
      <PreviewSearchIcon
        onClick={onSearchIconClick}
        className="search-play-icon"
        keyphrase={keyphrase}
      />
    </div>
  );
};

const PreviewSearchWidget = widget(PreviewSearchContent, WidgetDataType.PREVIEW_SEARCH, 'content');

export default PreviewSearchWidget;
