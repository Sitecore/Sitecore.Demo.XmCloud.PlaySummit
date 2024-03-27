import {
    CdpHelper,
    useSitecoreContext,
  } from '@sitecore-jss/sitecore-jss-nextjs';
  import { useEffect } from 'react';
  import { init, Engage } from '@sitecore/engage';
  import process from 'process';
  
  let engage: Engage;
  
  /**
   * This is the CDP page view component.
   * It uses the Sitecore Engage SDK to enable page view events on the client-side.
   * See Sitecore Engage SDK documentation for details.
   * https://www.npmjs.com/package/@sitecore/engage
   */
  const PageViewCdp = (): JSX.Element => {
    const {
      sitecoreContext: { pageState, route, variantId },
    } = useSitecoreContext();
  
    /**
     * Creates a page view event using the Sitecore Engage SDK.
     */
    const createPageView = async (page: string, language: string, pageVariantId: string) => {
      const pointOfSale = "playwebsite";
  
      console.log('loading engage : ', process.env.NEXT_PUBLIC_CDP_CLIENT_KEY);
  
      const startTime = Date.now();
  
      engage = await init({
        clientKey: '9f46c27c71691685ad1d5419b225529b',
        targetURL: 'https://api-engage-us.sitecorecloud.io',
        // Replace with the top level cookie domain of the website that is being integrated e.g ".example.com" and not "www.example.com"
        //cookieDomain: window.location.host.replace(/^www\./, ''),
        // Cookie may be created in personalize middleware (server), but if not we should create it here
        forceServerCookieMode: false,
        includeUTMParameters: true,
        webPersonalization: true,
        pointOfSale,
      });
  
      const elapsedTime = Date.now() - startTime;
  
      console.log('engage loaded, time to load: ', elapsedTime.toFixed(3), 'ms');
  
      engage.pageView({
        channel: 'WEB',
        currency: 'USD',
        pointOfSale,
        page,
        pageVariantId,
        language,
      });
    };
  
    /**
     * Determines if the page view events should be turned off.
     * IMPORTANT: You should implement based on your cookie consent management solution of choice.
     * By default it is disabled in development mode
     *   const disabled = () => {
     * return process.env.NODE_ENV === 'development';
     * };
     */
  
    useEffect(() => {
      // Do not create events in editing or preview mode or if missing route data
      // if (pageState !== LayoutServicePageState.Normal || !route?.itemId) {
      //   return;
      // }
      // Do not create events if disabled (e.g. we don't have consent)
      //if (disabled()) {
      //  return;
      // }
  
      const language = route.itemLanguage;
  
      const pageVariantId = CdpHelper.getPageVariantId(route.itemId, language, variantId as string);
      createPageView(route.name, language, pageVariantId);
    }, [pageState, route, variantId]);
  
    return <></>;
  };
  
  export default PageViewCdp;
  
  export { engage };
  