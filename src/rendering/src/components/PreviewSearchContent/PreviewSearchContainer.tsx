import { useEffect, useRef } from 'react';
import useContentSearchQueries from '../../hooks/useContentSearchQueries';
import { ContentSearchNews } from '../../interfaces/contentSearch/ContentSearchNews';
import { ContentSearchResponse } from '../../interfaces/contentSearch/ContentSearchResponse';
import { ContentSearchSession } from '../../interfaces/contentSearch/ContentSearchSession';
import { ContentSearchSpeaker } from '../../interfaces/contentSearch/ContentSearchSpeaker';
import PreviewSearchPopup from './PreviewSearchPopup';

type PreviewSearchContainerProps = {
  keyphrase: string;
  close?: () => void;
};

const contentSearchSuggestionByEntity = {
  session: [{ name: 'session_name_context_aware' }],
  content: [{ name: 'content_name_context_aware' }],
  speaker: [{ name: 'speaker_name_context_aware' }],
};

const PreviewSearchContainer = ({ keyphrase, close }: PreviewSearchContainerProps): JSX.Element => {
  const {
    isLoading,
    result: [news, sessions, speakers],
  } = useContentSearchQueries<
    [
      ContentSearchResponse<ContentSearchNews>,
      ContentSearchResponse<ContentSearchSession>,
      ContentSearchResponse<ContentSearchSpeaker>
    ]
  >(
    ['content', 'session', 'speaker'],
    {
      keyphrase,
      limit: 4,
      widgetId: 'rfkid_6',
    },
    {
      session: {
        search: {
          suggestion: contentSearchSuggestionByEntity.session,
        },
      },
      speaker: {
        search: {
          suggestion: contentSearchSuggestionByEntity.speaker,
        },
      },
      content: {
        search: {
          suggestion: contentSearchSuggestionByEntity.content,
        },
      },
    }
  );

  const keyphraseRef = useRef<string>();
  useEffect(() => {
    if (!isLoading) {
      keyphraseRef.current = keyphrase;
    }
  }, [isLoading, keyphrase]);

  return (
    <PreviewSearchPopup
      // we want to generate the correct search results url based on the current response keyphrase to avoid unnecessary re-renders
      resultsUrl={`/search?q=${keyphraseRef.current}`}
      news={news}
      sessions={sessions}
      speakers={speakers}
      close={close}
    />
  );
};

export default PreviewSearchContainer;
