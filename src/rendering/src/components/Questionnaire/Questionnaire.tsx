import {
  Field,
  Text,
  withDatasourceCheck,
  RichTextField,
  ImageField,
} from '@sitecore-jss/sitecore-jss-nextjs';
import { ComponentProps } from 'lib/component-props';
import { QuestionnaireQuestion } from './QuestionnaireQuestion';
import { useCallback, useMemo, useState } from 'react';
import { logAudiencePreferenceEvent } from 'src/services/CdpService';

type QuestionnaireProps = ComponentProps & {
  fields: {
    data: {
      datasource: {
        title: { jsonValue: Field<string> };
        children: {
          results: QuestionnaireQuestion[];
        };
      };
    };
  };
};

export type QuestionnaireQuestion = {
  id: string;
  title: { jsonValue: Field<string> };
  body: { jsonValue: RichTextField };
  children: {
    results: QuestionnaireOption[];
  };
};

export type QuestionnaireOption = {
  id: string;
  text: { jsonValue: Field<string> };
  image: { jsonValue: ImageField };
  audience: { jsonValue: Field };
  sessionType: { jsonValue: Field };
};

const Questionnaire = (props: QuestionnaireProps): JSX.Element => {
  const [currQuestionIndex, setCurrQuestionIndex] = useState(0);
  const [showResults, setShowResults] = useState(false);
  const [selectedOptionId, setSelectedOptionId] = useState('');

  const datasource = useMemo(
    () => props.fields?.data?.datasource,
    [props.fields?.data?.datasource]
  );
  const questions = useMemo(() => datasource.children.results, [datasource.children.results]);

  const handleOptionSelect = useCallback(
    (option: QuestionnaireOption) => {
      setSelectedOptionId(option.id);
      console.log(option);
      const audience = option.audience.jsonValue.value;

      // TODO: Send data to Search
      // const sessionType = option.sessionType.jsonValue.value;

      if (!!audience) {
        logAudiencePreferenceEvent(audience).then(() => {
          setCurrQuestionIndex(currQuestionIndex + 1);
          setShowResults(currQuestionIndex + 1 >= questions.length);
          setSelectedOptionId('');
        });
      } else {
        setTimeout(() => {
          setCurrQuestionIndex(currQuestionIndex + 1);
          setShowResults(currQuestionIndex + 1 >= questions.length);
          setSelectedOptionId('');
        }, 700);
      }
    },
    [currQuestionIndex, questions.length]
  );

  const restartQuestionnaire = useCallback(() => {
    setCurrQuestionIndex(0);
    setShowResults(false);
  }, []);

  return (
    <section className="questionnaire">
      {questions.map((question, i) => (
        <QuestionnaireQuestion
          key={question.id}
          visible={currQuestionIndex === i}
          selectedOptionId={selectedOptionId}
          {...question}
          onOptionSelect={(option) => handleOptionSelect(option)}
        />
      ))}
      {showResults && (
        <div className="questionnaire-recommendations">
          <div className="questionnaire-recommendations-header">
            <Text tag="h3" field={datasource?.title.jsonValue} />
            <button
              className="btn-secondary btn-secondary-light"
              onClick={() => restartQuestionnaire()}
            >
              Start over
            </button>
          </div>
          <div className="questionnaire-recommendations-content">
            *** RECOMMENDED CONTENT FROM SEARCH GOES HERE ***
          </div>
        </div>
      )}
    </section>
  );
};

export const Default = withDatasourceCheck()<QuestionnaireProps>(Questionnaire);
