import { forwardRef, KeyboardEvent, useCallback, useContext } from 'react';
import debounce from 'lodash/debounce';
import { PreviewSearchContext } from './PreviewSearchContextProvider';

type PreviewSearchInputProps = {
  onKeyphraseChange?: (value: string) => void;
  onFocus?: () => void;
  onBlur?: () => void;
  placeholder?: string;
  className?: string;
  onEnter?: (value: string) => void;
  onEscapePressed?: () => void;
};

const onKeyphraseChangeDebounced = debounce(
  (value: string, onKeyphraseChange: (value: string) => void) => onKeyphraseChange(value),
  500
);

const PreviewSearchInput = forwardRef<HTMLInputElement, PreviewSearchInputProps>(
  (
    { onFocus, onBlur, placeholder, onKeyphraseChange, className, onEnter, onEscapePressed },
    forwardedRef
  ): JSX.Element => {
    const { keyphrase, onKeyphraseChange: onKeyphraseUpdate } = useContext(PreviewSearchContext);
    const keyListener = useCallback(
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
            onKeyphraseChangeDebounced(value, (keyphrase: string) => {
              onKeyphraseChange && onKeyphraseChange(keyphrase);
              onKeyphraseUpdate(keyphrase);
            });
            break;
        }
      },
      [onEnter, onKeyphraseChange, onKeyphraseUpdate, onEscapePressed]
    );

    return (
      <input
        ref={forwardedRef}
        defaultValue={keyphrase}
        onFocus={onFocus}
        onBlur={onBlur}
        placeholder={placeholder}
        onKeyUp={keyListener}
        autoComplete="off"
        className={className}
      />
    );
  }
);
PreviewSearchInput.displayName = 'PreviewSearchInput';

export default PreviewSearchInput;
