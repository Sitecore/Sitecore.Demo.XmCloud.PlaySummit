import { isSearchSDKEnabled } from '../../services/SearchSDKService';
import PersonalizedPicks from './PersonalizedPicks';

const PersonalizedPicksWrapper = () =>
  isSearchSDKEnabled ? (
    <PersonalizedPicks rfkId="rfkid_pp" />
  ) : (
    <div className="personalized-picks">
      <div className="container">
        <div>
          <h3 className="title">Personalized Picks</h3>
          <p className="subtitle">
            Search integration is not configured. When enabled, this widget would display a
            handpicked selection of content recommendations based on your preferences and browsing
            history.
          </p>
        </div>
        <div>
          <a className="item" href="#">
            <img
              className="item-image"
              src="https://placehold.co/500x300?text=No%20Image"
              alt="No image"
            ></img>
            <span className="item-type">vendor</span>
            <span className="item-name">Sample Vendor</span>
          </a>
        </div>
        <div>
          <a className="item" href="#">
            <img
              className="item-image"
              src="https://placehold.co/500x300?text=No%20Image"
              alt="No image"
            ></img>
            <span className="item-type">session</span>
            <span className="item-name">Sample Session</span>
          </a>
        </div>

        <div>
          <a className="item" href="#">
            <img
              className="item-image"
              src="https://placehold.co/500x300?text=No%20Image"
              alt="No image"
            ></img>
            <span className="item-type">session</span>
            <span className="item-name">Sample Session</span>
          </a>
        </div>
      </div>
    </div>
  );

export default PersonalizedPicksWrapper;
