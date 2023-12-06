import { Image, Text, RichText } from '@sitecore-jss/sitecore-jss-nextjs';
import {
  QuestionnaireOption,
  QuestionnaireQuestion as QuestionnaireQuestionType,
} from './Questionnaire';

type QuestionnaireQuestionProps = QuestionnaireQuestionType & {
  visible: boolean;
  selectedOptionId: string;
  onOptionSelect: (option: QuestionnaireOption) => void;
};

export const QuestionnaireQuestion = ({
  title,
  body,
  options,
  visible,
  selectedOptionId,
  onOptionSelect,
}: QuestionnaireQuestionProps): JSX.Element => {
  return (
    <div className={`questionnaire-question ${visible ? '' : 'hidden'}`}>
      <div className="questionnaire-question-content">
        <Text tag="h3" field={title.jsonValue} className="questionnaire-question-title" />
        <RichText field={body.jsonValue} className="questionnaire-question-body" />
      </div>
      <div className="questionnaire-question-options">
        {options.results.map((option) => (
          <button
            key={option.id}
            onClick={() => onOptionSelect(option)}
            className={selectedOptionId === option.id ? 'selected' : ''}
          >
            <Image field={option.image.jsonValue} />
            <Text field={option.text.jsonValue} />
          </button>
        ))}
      </div>
    </div>
  );
};
