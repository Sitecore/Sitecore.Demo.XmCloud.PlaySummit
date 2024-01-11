import { debounce } from 'lodash';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faTimes } from '@fortawesome/free-solid-svg-icons';

type PreviewSearchInputProps = {
  onChange: (value: string) => void;
  onFocus?: () => void;
  onBlur?: () => void;
  placeholder?: string;
  className?: string;
  onEnter?: (value: string) => void;
  onEscapePressed?: () => void;
  value: string;
  onClear: () => void;
};

const PreviewSearchInput = ({
  onChange,
  onFocus,
  onBlur,
  placeholder,
  className,
  value,
  onClear,
}: PreviewSearchInputProps): JSX.Element => {
  const onKeyphraseChangeDebounced = debounce(
    (value: string, onKeyphraseChange: (value: string) => void) => onKeyphraseChange(value),
    500
  );

  return (
    <>
      <input
        defaultValue={value}
        onFocus={onFocus}
        onBlur={onBlur}
        placeholder={placeholder}
        onChange={(e) => onKeyphraseChangeDebounced(e.target.value, onChange)}
        autoComplete="off"
        className={className}
        autoFocus
      />
      <div className="preview-search-clear">
        <span className="preview-search-clear-text">Clear</span>
        <FontAwesomeIcon
          className="preview-search-clear-icon"
          icon={faTimes}
          onClick={onClear}
          size="lg"
        />
      </div>
    </>
  );
};

export default PreviewSearchInput;
