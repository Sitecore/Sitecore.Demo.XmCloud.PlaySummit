import { useCallback, useEffect, useRef, useState } from 'react';
import { useRouter } from 'next/router';
import PreviewSearchContainer from './PreviewSearchContainer';
import ClickOutside from '../ShopCommon/ClickOutside';
import PreviewSearchInput from './PreviewSearchInput';
import PreviewSearchIcon from './PreviewSearchIcon';
import { SEARCH_PAGE } from '../../helpers/ContentSearchHelper';
import {
  PreviewSearchInitialState,
  PreviewSearchWidgetQuery,
  WidgetDataType,
  usePreviewSearch,
  widget,
} from '@sitecore-search/react';

type ContentItemModel = {
  type: string;
};

type InitialState = PreviewSearchInitialState<'itemsPerPage' | 'suggestionsList'>;

type PreviewSearchContentProps = {
  defaultItemsPerPage?: number;
};

const PreviewSearchContent = ({
  defaultItemsPerPage = 32,
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
        content: allData,
        suggestion: { content_name_context_aware: suggestions = [] } = {},
      } = {},
    },
    state: { keyphrase = (q as string) || '' },
  } = usePreviewSearch<ContentItemModel, InitialState>({
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

  ClickOutside([containerRef], onClose);

  // Hide preview search when processing
  if (isLoading || isFetching) {
    return null;
  }

  // Hide preview search when on search page
  if (router?.pathname === SEARCH_PAGE) {
    return null;
  }

  return (
    <div ref={containerRef}>
      {isPreviewSearchOpen && (
        <PreviewSearchContainer
          sessions={allData?.filter((item) => item.type === 'session')?.slice(0, 4)}
          speakers={allData?.filter((item) => item.type === 'speaker')?.slice(0, 4)}
          news={allData?.filter((item) => item.type === 'news')?.slice(0, 4)}
          suggestions={suggestions}
          keyphrase={keyphrase}
          widgetRef={widgetRef}
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
