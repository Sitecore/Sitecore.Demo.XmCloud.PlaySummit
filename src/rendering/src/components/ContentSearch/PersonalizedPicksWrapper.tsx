import { isSearchSDKEnabled } from '../../services/SearchSDKService';
import PersonalizedPicks from './PersonalizedPicks';

const PersonalizedPicksWrapper = () =>
  isSearchSDKEnabled ? (
    <PersonalizedPicks rfkId="rfkid_pp" />
  ) : (
    <div className="personalized-picks">
      <div className="container">Search integration is not configured</div>
    </div>
  );

export default PersonalizedPicksWrapper;
