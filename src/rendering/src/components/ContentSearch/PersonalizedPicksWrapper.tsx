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
      itemsToDisplay={props.params.Items ? Number(props.params.Items) : 4}
      sxaStyles={props.params.styles}
      rfkId="rfkid_pp"
    />
  ) : (
    <>
      <div className="container"></div>
      <div className={`personalized-picks ${props.params.styles}`}>
        <div className="container flex justify-between gap-4 flex-wrap">
          <div className="flex flex-col w-full ">
            <a className="item flex flex-col h-full text-decoration-none" href="#">
              <img
                className="item-image w-full h-auto"
                src="https://dpwprod.azureedge.net/-/media/Project/DPWG/DPWG-Tenant/Corporate/Global/Images/Expert-Opinions/Cold-room-storage.jpg?rev=775b3780d2d24ddab52a75563ba7423a&cx=0.47&cy=0.43&cw=675&ch=380&hash=F036521BB052D59913238B2CC1056C4F"
                alt="session"
              />
              <span className="item-name text-xl font-bold mt-2 flex-grow">
                From e-commerce to AI - 5 trends shaping Oceania&apos;s retail and consumer sector
                in 2024
              </span>
              <span className="item-description mb-5 text-base mt-2 flex-grow">
                As ongoing economic uncertainty and rising costs of living reshape buyer behaviour,
                Oceania&apos;s supply chains are being put to the test in new ways.
              </span>
              <button className="dpworld-btn">Read more</button>
            </a>
          </div>
          <div className="flex flex-col w-full ">
            <a className="item flex flex-col h-full text-decoration-none" href="#">
              <img
                className="item-image w-full h-auto"
                src="https://dpwprod.azureedge.net/-/media/Project/DPWG/DPWG-Tenant/Corporate/Global/Images/Expert-Opinions/Woman-working-in-automations-and-robotics.jpg?rev=590a002bb33f4af4b55520591c050f7a&cx=0.46&cy=0.57&cw=675&ch=380&hash=A2AA782F768DBEA41051D85FCC487ACC"
                alt="session"
              />
              <span className="item-name text-xl font-bold mt-2 flex-grow">
                Southeast Asia is growing as a global trade nexus - and its emerging markets have an
                important role
              </span>
              <span className="item-description mb-5 text-base mt-2 flex-grow">
                From a small base, Southeast Asia has grown to become one of the world&apos;s most
                dynamic trading areas over the past three decades.
              </span>
              <button className="dpworld-btn">Read more</button>
            </a>
          </div>
          <div className="flex flex-col w-full ">
            <a className="item flex flex-col h-full text-decoration-none" href="#">
              <img
                className="item-image w-full h-auto"
                src="https://dpwprod.azureedge.net/-/media/Project/DPWG/DPWG-Tenant/Corporate/Global/Images/All-Insights/whitepapers/Humanitarian-logistics/Truck-on-the-road-on-the-route.jpg?rev=4f0c7214071c47eea8c4f42b7a178304&cx=0.42&cy=0.74&cw=675&ch=380&hash=038DFF4EFC87C99FC27DFA1EB922A4C9"
                alt="session"
              />
              <span className="item-name text-xl font-bold mt-2 flex-grow">
                Empowering Humanitarian Logistics Resilience
              </span>
              <span className="item-description mb-5 text-base mt-2 flex-grow">
                As the world faces increasing and unprecedented challenges, humanitarian logistics
                is the central element of crisis response when supply chains are disrupted.
              </span>
              <button className="dpworld-btn">Read more</button>
            </a>
          </div>
          <div className="flex flex-col w-full ">
            <a className="item flex flex-col h-full text-decoration-none" href="#">
              <img
                className="item-image w-full h-auto"
                src="https://dpwprod.azureedge.net/-/media/Project/DPWG/DPWG-Tenant/Corporate/Global/Images/Whitepapers/Boat-on-a-river-surrounded-by-palm-trees.jpg?rev=a7a396356ac44155854c49c4d970357c&cx=0.49&cy=0.49&cw=675&ch=380&hash=A7D80A52CD38E0FBF81B2E0B49F846A3"
                alt="session"
              />
              <span className="item-name text-xl font-bold mt-2 flex-grow">
                Changing the Perception of Water
              </span>
              <span className="item-description mb-5 text-base mt-2 flex-grow">
                Water is crucial for life on Earth and vital for our well-being. Businesses,
                including ours, can play a significant role in changing how water is used.
              </span>
              <button className="dpworld-btn">Read more</button>
            </a>
          </div>
        </div>
      </div>
    </>
  );
};

export default PersonalizedPicksWrapper;
