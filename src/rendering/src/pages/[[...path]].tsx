import { useEffect } from 'react';
import { GetStaticPaths, GetStaticProps } from 'next';
import NotFound from 'src/NotFound';
import Layout from 'src/Layout';
import { SitecoreContext, ComponentPropsContext } from '@sitecore-jss/sitecore-jss-nextjs';
import { handleEditorFastRefresh } from '@sitecore-jss/sitecore-jss-nextjs/utils';
import { SitecorePageProps } from 'lib/page-props';
import { sitecorePagePropsFactory } from 'lib/page-props-factory';
import { componentBuilder } from 'temp/componentBuilder';
import { initialize as initializeSend } from '../services/SendService'; // DEMO TEAM CUSTOMIZATION - Sitecore Send integration
import { usePathname } from 'next/navigation';
import { PageController, trackEntityPageViewEvent } from '@sitecore-search/react';
import { fetchUserProfileData, isSearchSDKEnabled } from '../services/SearchSDKService';
import { storeSearchProfileData } from '../services/CdpService';
import { logSearchProfileData } from 'src/services/CloudSDKService';

const SitecorePage = ({
  notFound,
  componentProps,
  layoutData,
  headLinks,
}: SitecorePageProps): JSX.Element => {
  useEffect(() => {
    // Since Sitecore editors do not support Fast Refresh, need to refresh editor chromes after Fast Refresh finished
    handleEditorFastRefresh();
  }, []);

  // DEMO TEAM CUSTOMIZATION - Sitecore Send integration
  useEffect(() => {
    initializeSend(layoutData.sitecore.context.pageState);
  }, [layoutData.sitecore.context.pageState]);
  // END CUSTOMIZATION

  // DEMO TEAM CUSTOMIZATION - Search SDK integration
  const pageUri = usePathname();
  useEffect(() => {
    (async () => {
      if (isSearchSDKEnabled) {
        PageController.getContext().setPageUri(pageUri);
        await trackEntityPageViewEvent('content', {
          items: [{ id: layoutData.sitecore.route.itemId }],
        });

        // Save corresponding pageUri to session storage as a workaround because Search API does not return custom attributes
        sessionStorage.setItem(layoutData.sitecore.route.itemId, pageUri);

        // Fetch the Sitecore Search user profile data
        const userProfileData = await fetchUserProfileData();

        // Store it as a guest data extension in legacy CDP
        storeSearchProfileData(userProfileData);

        // Log it as a custom event in corresponding Context ID CDP using the Cloud SDK
        logSearchProfileData(userProfileData);
      }
    })();
  }, [pageUri, layoutData.sitecore.route.itemId]);
  // END CUSTOMIZATION

  if (notFound || !layoutData.sitecore.route) {
    // Shouldn't hit this (as long as 'notFound' is being returned below), but just to be safe
    return <NotFound />;
  }

  const isEditing = layoutData.sitecore.context.pageEditing;

  return (
    <ComponentPropsContext value={componentProps}>
      <SitecoreContext
        componentFactory={componentBuilder.getComponentFactory({ isEditing })}
        layoutData={layoutData}
      >
        <Layout layoutData={layoutData} headLinks={headLinks} />
      </SitecoreContext>
    </ComponentPropsContext>
  );
};

export const getStaticProps: GetStaticProps = async (context) => {
  const props = await sitecorePagePropsFactory.create(context);
  return {
    props,
    revalidate: 5, // In seconds
    notFound: props.notFound, // Returns custom 404 page with a status code of 404 when true
  };
};

export const getStaticPaths: GetStaticPaths = async () => {
  return {
    paths: [],
    fallback: 'blocking',
  };
};

export default SitecorePage;
