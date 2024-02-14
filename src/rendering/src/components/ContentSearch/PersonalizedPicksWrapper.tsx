import { LayoutServicePageState, useSitecoreContext } from '@sitecore-jss/sitecore-jss-nextjs';
import { isSearchSDKEnabled } from '../../services/SearchSDKService';
import PersonalizedPicks from './PersonalizedPicks';
import { ComponentProps } from 'lib/component-props';

export type PersonalizedPicksWrapperProps = ComponentProps & {
  params: {
    Items: number;
    styles: string;
  };
};

const PersonalizedPicksWrapper = (props: PersonalizedPicksWrapperProps) => {
  const { sitecoreContext } = useSitecoreContext();
  const isPageEditing = sitecoreContext.pageState === LayoutServicePageState.Edit;

  return isSearchSDKEnabled && !isPageEditing ? (
    <PersonalizedPicks
      itemsToDisplay={props.params.Items ? Number(props.params.Items) : 3}
      sxaStyles={props.params.styles}
      rfkId="rfkid_pp"
    />
  ) : (
    <div className={`personalized-picks ${props.params.styles}`}>
      <div className="container">
        <div>
          <a className="item" href="#">
            <img
              className="item-image"
              src="https://playsummit.sitecoresandbox.cloud/api/public/content/3db5cea1caaf4cc6b4e6596ef5e1fb52?v=c16aa6d2&t=web"
              alt="session"
            ></img>
            <span className="item-type">session</span>
            <span className="item-name">Navigating the outdoors with kids</span>
          </a>
        </div>
        <div>
          <a className="item" href="#">
            <img
              className="item-image"
              src="https://playsummit.sitecoresandbox.cloud/api/public/content/c87e9c1c087b485289784fe4c5bc445b?v=4b519f23&t=web"
              alt="session"
            ></img>
            <span className="item-type">session</span>
            <span className="item-name">Ask an expert: nutrition</span>
          </a>
        </div>

        <div>
          <a className="item" href="#">
            <img
              className="item-image"
              src="https://playsummit.sitecoresandbox.cloud/api/public/content/98aae63e186c44a1984c8793057b98a2?v=3b92b398&t=web"
              alt="session"
            ></img>
            <span className="item-type">session</span>
            <span className="item-name">Real talk: balancing it all is a challenge</span>
          </a>
        </div>
      </div>
    </div>
  );
};

export default PersonalizedPicksWrapper;
