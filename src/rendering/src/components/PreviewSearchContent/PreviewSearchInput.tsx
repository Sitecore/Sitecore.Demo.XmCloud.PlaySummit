import { debounce } from 'lodash';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faTimes } from '@fortawesome/free-solid-svg-icons';
import { MutableRefObject, useCallback, KeyboardEvent } from 'react';

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
  inputRef?: MutableRefObject<HTMLInputElement>;
};

const PreviewSearchInput = ({
  onChange,
  onFocus,
  onBlur,
  placeholder,
  className,
  onEnter,
  onEscapePressed,
  value,
  onClear,
  inputRef,
}: PreviewSearchInputProps): JSX.Element => {
  const onKeyphraseChangeDebounced = debounce(
    (value: string, onKeyphraseChange: (value: string) => void) => onKeyphraseChange(value),
    500
  );

  const handleKeyUp = useCallback(
    (event: KeyboardEvent<HTMLInputElement>): void => {
      const value = (event.target as HTMLInputElement).value;
      switch (event.key) {
        case 'Escape':
          onEscapePressed && onEscapePressed();
          break;
        case 'Enter':
          onEnter && onEnter(value);
          break;
        default:
          onKeyphraseChangeDebounced(value, onChange);
          break;
      }
    },
    [onEscapePressed, onEnter, onKeyphraseChangeDebounced, onChange]
  );

  return (
    <>
      <input
        ref={inputRef}
        defaultValue={value}
        onFocus={onFocus}
        onBlur={onBlur}
        placeholder={placeholder}
        autoComplete="off"
        className={className}
        onKeyUp={handleKeyUp}
      />
      {value && (
        <div className="search-input-clear" onClick={onClear}>
          <span className="search-input-clear-text">Clear</span>
          <FontAwesomeIcon className="search-input-clear-icon" icon={faTimes} size="lg" />
        </div>
      )}
    </>
  );
};

export default PreviewSearchInput;
