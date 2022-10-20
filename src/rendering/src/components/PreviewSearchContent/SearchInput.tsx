import { faSearch } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { useRouter } from 'next/router';
import {
  ChangeEvent,
  FocusEvent,
  KeyboardEvent,
  useCallback,
  useEffect,
  useRef,
  useState,
} from 'react';

type SearchInputProps = {
  keyphrase: string;
  setSearchString: (value: string) => void;
  onFocus: (value: string) => void;
  placeholder: string;
  redirectUrl: string;
  setOpen: (value: boolean) => void;
  open: boolean;
};

const SearchInput = ({
  setSearchString,
  onFocus,
  placeholder,
  redirectUrl,
  setOpen,
  open,
}: SearchInputProps): JSX.Element => {
  const [inputSearchVisibility, setInputSearchVisibility] = useState(false);
  const router = useRouter();
  const ref = useRef(null);

  useEffect(() => {
    if (inputSearchVisibility && ref.current) {
      ref.current.focus();
    }
  }, [inputSearchVisibility]);

  useEffect(() => {
    if (!open) {
      setInputSearchVisibility(false);
    }
  }, [open]);

  const redirectToSearchPage = useCallback(
    (searchTerm: string) => {
      setOpen(false);
      router.push(`${redirectUrl}?q=${searchTerm}`);
    },
    [redirectUrl, router, setOpen]
  );

  const keyListener = useCallback(
    (event: KeyboardEvent): void => {
      switch (event.key) {
        case 'Escape':
          open ? setOpen(false) : setInputSearchVisibility(false);
          break;
        case 'Enter':
          redirectToSearchPage((event.target as HTMLInputElement).value);
      }
    },
    [open, redirectToSearchPage, setOpen]
  );

  const handleSearchIconClick = useCallback(() => {
    setInputSearchVisibility(!inputSearchVisibility);
    if (inputSearchVisibility) {
      setOpen(false);
    }
  }, [inputSearchVisibility, setOpen]);

  const handleOnChange = useCallback(
    (e: ChangeEvent<HTMLInputElement>) => {
      setSearchString(e.target.value || '');
      setOpen(true);
    },
    [setOpen, setSearchString]
  );

  const handleOnFocus = useCallback(
    (e: FocusEvent<HTMLInputElement>) => {
      const keywords = e.target.value || '';
      onFocus(keywords);
      setOpen(true);
    },
    [onFocus, setOpen]
  );

  return (
    <>
      <input
        ref={ref}
        onChange={handleOnChange}
        onFocus={handleOnFocus}
        onClick={() => setOpen(true)}
        placeholder={placeholder}
        onKeyUp={keyListener}
        autoComplete="off"
        className={`search-input-play ${!inputSearchVisibility ? 'search-input-play-hidden' : ''}`}
      />
      <FontAwesomeIcon
        className="search-play-icon"
        icon={faSearch}
        onClick={handleSearchIconClick}
      />
    </>
  );
};

export default SearchInput;
