import { faSearch } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { useRouter } from 'next/router';
import { ChangeEvent, FocusEvent, KeyboardEvent, useEffect, useRef, useState } from 'react';

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

  // Search: Is needed to fix request
  useEffect(() => {
    const searchTermQueryStringValue = router?.query['q'];
    if (searchTermQueryStringValue) {
      let searchTerm = '';

      if (typeof searchTermQueryStringValue === 'string') {
        searchTerm = searchTermQueryStringValue as string;
      } else if (typeof searchTermQueryStringValue === 'object') {
        searchTerm = searchTermQueryStringValue[0];
      }

      (ref.current as HTMLInputElement).value = searchTerm;
    }
  }, [router?.query]);

  // ESC & ENTER listeners - redirect or close
  const keyListener = (event: KeyboardEvent): void => {
    switch (event.key) {
      case 'Escape':
        open ? setOpen(false) : setInputSearchVisibility(false);
        break;
      case 'Enter':
        redirectToSearchPage((event.target as HTMLInputElement).value);
    }
  };

  // Search request icon click
  const handleSearchIconClick = () => {
    setInputSearchVisibility(!inputSearchVisibility);
  };

  // Search to search page
  const redirectToSearchPage = (searchTerm: string) => {
    setOpen(false);
    router.push(`${redirectUrl}${searchTerm}`);
  };

  // Update keyphrase onChange event
  const handleOnChange = (e: ChangeEvent<HTMLInputElement>) => {
    setSearchString(e.target.value || '');
    setOpen(true);
  };

  // OnFocus: Get keyphrase, open PreviewSearch
  const handleOnFocus = (e: FocusEvent<HTMLInputElement>) => {
    const keywords = e.target.value || '';
    onFocus(keywords);
    setOpen(true);
  };

  return (
    <>
      {inputSearchVisibility ? (
        <input
          ref={ref}
          onChange={handleOnChange}
          onFocus={handleOnFocus}
          onClick={() => setOpen(true)}
          placeholder={placeholder}
          onKeyUp={keyListener}
          autoComplete="off"
          className={`search-input-play`}
        />
      ) : (
        ''
      )}
      <FontAwesomeIcon
        className={`search-play-icon`}
        icon={faSearch}
        onClick={handleSearchIconClick}
      />
    </>
  );
};

export default SearchInput;
