import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faSearch } from '@fortawesome/free-solid-svg-icons';

export type PreviewSearchIconProps = {
  onClick?: (keyphrase: string) => void;
  className?: string;
  keyphrase: string;
};

const PreviewSearchIcon = ({
  onClick,
  className,
  keyphrase,
}: PreviewSearchIconProps): JSX.Element => {
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
