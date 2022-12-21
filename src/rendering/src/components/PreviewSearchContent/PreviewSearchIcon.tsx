import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faSearch } from '@fortawesome/free-solid-svg-icons';
import { useContext } from 'react';
import { PreviewSearchContext } from './PreviewSearchContextProvider';

export type PreviewSearchIconProps = {
  onClick?: (keyphrase: string) => void;
  className?: string;
};

const PreviewSearchIcon = ({ onClick, className }: PreviewSearchIconProps): JSX.Element => {
  const { keyphrase } = useContext(PreviewSearchContext);
  return (
    <FontAwesomeIcon
      className={`preview-search-content-icon ${className || ''}`}
      icon={faSearch}
      onClick={() => {
        onClick && onClick(keyphrase);
      }}
    />
  );
};

export default PreviewSearchIcon;
