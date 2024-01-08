import { debounce } from 'lodash';

type PreviewSearchInputProps = {
  onChange: (value: string) => void;
  onFocus?: () => void;
  onBlur?: () => void;
  placeholder?: string;
  className?: string;
  onEnter?: (value: string) => void;
  onEscapePressed?: () => void;
  value: string;
};

const PreviewSearchInput = ({
  onChange,
  onFocus,
  onBlur,
  placeholder,
  className,
  value,
}: PreviewSearchInputProps): JSX.Element => {
  const onKeyphraseChangeDebounced = debounce(
    (value: string, onKeyphraseChange: (value: string) => void) => onKeyphraseChange(value),
    500
  );

  return (
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
  );
};

export default PreviewSearchInput;
