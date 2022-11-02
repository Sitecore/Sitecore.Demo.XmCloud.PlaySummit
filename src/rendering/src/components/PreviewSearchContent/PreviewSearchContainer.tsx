import { useEffect, useRef } from 'react';
import useDiscoverQueries from '../../hooks/useDiscoverQueries';
import { DiscoverNews } from '../../interfaces/discover/DiscoverNews';
import { DiscoverResponse } from '../../interfaces/discover/DiscoverResponse';
import { DiscoverSession } from '../../interfaces/discover/DiscoverSession';
import { DiscoverSpeaker } from '../../interfaces/discover/DiscoverSpeaker';
import PreviewSearchPopup from './PreviewSearchPopup';

type PreviewSearchContainerProps = {
  keyphrase: string;
  close?: () => void;
};

const discoverSuggestionByEntity = {
  session: [{ name: 'session_name_context_aware' }],
  content: [{ name: 'content_name_context_aware' }],
  speaker: [{ name: 'speaker_name_context_aware' }],
};

const PreviewSearchContainer = ({ keyphrase, close }: PreviewSearchContainerProps): JSX.Element => {
  const {
    isLoading,
    result: [news, sessions, speakers],
  } = useDiscoverQueries<
    [
      DiscoverResponse<DiscoverNews>,
      DiscoverResponse<DiscoverSession>,
      DiscoverResponse<DiscoverSpeaker>
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
          suggestion: discoverSuggestionByEntity.session,
        },
      },
      speaker: {
        search: {
          suggestion: discoverSuggestionByEntity.speaker,
        },
      },
      content: {
        search: {
          suggestion: discoverSuggestionByEntity.content,
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
