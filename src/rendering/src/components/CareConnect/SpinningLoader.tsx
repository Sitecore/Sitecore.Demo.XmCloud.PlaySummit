import { faSpinner } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

const SpinningLoader = () => {
  return <FontAwesomeIcon icon={faSpinner} className="spinning-loader" />;
};

export default SpinningLoader;
