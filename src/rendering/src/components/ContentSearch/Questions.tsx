import React, { useState } from 'react';
import { WidgetDataType, useQuestions, widget } from '@sitecore-search/react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faChevronDown, faChevronUp } from '@fortawesome/free-solid-svg-icons';

type QuestionsProps = {
  keyphrase?: string;
  defaultRelatedQuestions?: number;
};

// TODO Remove when real data available
const mockData = {
  question: 'How to train like a pro mountain biker?',
  answer:
    'Begin with cardiovascular exercises such as cycling to build endurance and stamina. Integrate strength training to target muscles used in mountain biking, including legs, core, and upper body. Include off-road or trail running to simulate the uneven terrain. Enhance technical skills by practicing maneuvers like cornering, balancing, and handling obstacles. Implement interval training to mimic the intensity of mountain biking trails. Prioritize flexibility through stretching and yoga for improved agility. Consistent practice and a holistic approach to training will prepare you for the diverse challenges of mountain biking.',
  relatedQuestionsResponse: [
    {
      answer:
        'There is no information available on what are the key elements in training like a professional mountain biker.',
      question: 'What are the key elements in training like a professional mountain biker?',
    },
    {
      answer:
        'There is no information available on what are the key elements in training like a professional mountain biker.',
      question: 'How can one enhance endurance and stamina specifically for mountain biking?',
    },
    {
      answer:
        'There is no information available on what are the key elements in training like a professional mountain biker.',
      question:
        'Can consistent training off the bike contribute to better performance on the trails?',
    },
  ],
};

const RelatedQuestion = ({ question, answer }: { question: string; answer: string }) => {
  const [isExpanded, setIsExpanded] = useState(false);

  return (
    <div className="related-question">
      <h4 className="related-question-title" onClick={() => setIsExpanded(!isExpanded)}>
        {isExpanded ? (
          <FontAwesomeIcon icon={faChevronUp} />
        ) : (
          <FontAwesomeIcon icon={faChevronDown} />
        )}
        {question}{' '}
      </h4>
      {isExpanded && <p className="related-question-answer">{answer}</p>}
    </div>
  );
};

const QuestionsComponent = ({
  keyphrase = '',
  defaultRelatedQuestions = 4,
}: QuestionsProps): JSX.Element => {
  const {
    widgetRef,
    queryResult: {
      data: {
        related_questions: relatedQuestionsResponse = mockData.relatedQuestionsResponse,
        answer: { answer, question } = {
          answer: mockData.answer,
          question: mockData.question,
        },
      } = {},
    },
  } = useQuestions({
    state: {
      keyphrase,
      relatedQuestions: defaultRelatedQuestions,
    },
  });

  return (
    <>
      {answer && question && keyphrase === mockData.question && (
        <div ref={widgetRef} className="questions">
          <div className="primary-question">
            <h4 className="primary-question-title">{question}</h4>
            <p className="primary-question-answer">{answer}</p>
          </div>
          {relatedQuestionsResponse.length > 0 && (
            <div className="related-questions-container">
              <h4 className="related-questions-header-title">People also ask...</h4>
              {relatedQuestionsResponse.map(({ answer, question }, index) => (
                <RelatedQuestion key={`${question}-${index}`} question={question} answer={answer} />
              ))}
            </div>
          )}
        </div>
      )}
    </>
  );
};

export default widget(QuestionsComponent, WidgetDataType.QUESTIONS, 'content');
