import { LayoutServicePageState, useSitecoreContext } from '@sitecore-jss/sitecore-jss-nextjs';
import { isSearchSDKEnabled } from '../../services/SearchSDKService';
import PersonalizedPicks from './PersonalizedPicks';
import { ComponentProps } from 'lib/component-props';
import Link from 'next/link';

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
      itemsToDisplay={props.params.Items ? Number(props.params.Items) : 4}
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
            <span className="item-name">
              From e-commerce to AI - 5 trends shaping Oceania&apos;s retail and consumer sector
            </span>
            <span className="item-description mb-[20px]">
              As ongoing economic uncertainty and rising costs of living reshape buyer behaviour,
              Oceania&apos;s supply chains are being put to the test in new ways.
            </span>
            <button className="dpworld-btn">Read more</button>
          </a>
        </div>
        <div>
          <a className="item" href="#">
            <img
              className="item-image"
              src="https://playsummit.sitecoresandbox.cloud/api/public/content/c87e9c1c087b485289784fe4c5bc445b?v=4b519f23&t=web"
              alt="session"
            ></img>
            <span className="item-name">
              Southeast Asia is growing as a global trade nexus - and its emerging markets have an
              important role
            </span>
            <span className="item-description mb-[20px] mt:">
              From a small base, Southeast Asia has grown to become one of the world&apos;s most
              dynamic trading areas over the past three decades.
            </span>
            <button className="dpworld-btn">Read more</button>
          </a>
        </div>
        <div>
          <a className="item" href="#">
            <img
              className="item-image"
              src="https://playsummit.sitecoresandbox.cloud/api/public/content/98aae63e186c44a1984c8793057b98a2?v=3b92b398&t=web"
              alt="session"
            ></img>
            <span className="item-name">Empowering Humanitarian Logistics Resilience</span>
            <span className="item-description mb-[20px] md:mt-[40px]">
              As the world faces increasing and unprecedented challenges, humanitarian logistics is
              the central element of crisis response when supply chains are disrupted.
            </span>
            <button className="dpworld-btn">Read more</button>
          </a>
        </div>
        <div>
          <a className="item" href="#">
            <img
              className="item-image"
              src="https://playsummit.sitecoresandbox.cloud/api/public/content/98aae63e186c44a1984c8793057b98a2?v=3b92b398&t=web"
              alt="session"
            ></img>
            <span className="item-name">Changing the Perception of Water</span>
            <span className="item-description mb-[20px] md:mt-[45px] ">
              Water is crucial for life on Earth and vital for our well-being. Businesses, including
              ours, can play a significant role in changing how water is used.
            </span>
            <button className="dpworld-btn">Read more</button>
          </a>
        </div>
      </div>
    </div>
  );
};

export default PersonalizedPicksWrapper;
