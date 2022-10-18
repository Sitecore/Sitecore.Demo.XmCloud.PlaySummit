/**
 * This Layout needs for SXA example.
 */
import React, { useEffect } from 'react'; // DEMO TEAM CUSTOMIZATION - Log page views in CDP
import Head from 'next/head';
// DEMO TEAM CUSTOMIZATION - Remove VisitorIdentification, Add LayoutServicePageState
import {
  Placeholder,
  getPublicUrl,
  LayoutServiceData,
  Field,
  LayoutServicePageState,
} from '@sitecore-jss/sitecore-jss-nextjs';
// DEMO TEAM CUSTOMIZATION - CDP integration
import { logViewEvent } from './services/CdpService';
import HeaderCdpMessageBar from './components/HeaderCdpMessageBar';
// END CUSTOMIZATION

// Prefix public assets with a public URL to enable compatibility with Sitecore Experience Editor.
// If you're not supporting the Experience Editor, you can remove this.
const publicUrl = getPublicUrl();

interface LayoutProps {
  layoutData: LayoutServiceData;
}

interface RouteFields {
  [key: string]: unknown;
  Title?: Field;
  pageTitle?: Field;
}

const Layout = ({ layoutData }: LayoutProps): JSX.Element => {
  const { route, context } = layoutData.sitecore; // DEMO TEAM CUSTOMIZATION - Add context to destructuring
  const fields = route?.fields as RouteFields;
  const isPageEditing = layoutData.sitecore.context.pageEditing;
  const mainClassPageEditing = isPageEditing ? 'editing-mode' : 'prod-mode';

  // DEMO TEAM CUSTOMIZATION - Log page views in CDP
  useEffect(() => {
    logViewEvent(route);
  }, [route]);
  // END CUSTOMIZATION

  // DEMO TEAM CUSTOMIZATION - Add CSS classes when Sitecore editors are active
  const isExperienceEditorActiveCssClass =
    context.pageState === LayoutServicePageState.Edit ||
    context.pageState === LayoutServicePageState.Preview
      ? 'experience-editor-active'
      : '';
  // END CUSTOMIZATION

  // DEMO TEAM CUSTOMIZATION - Use event name from context as the page title
  const contextTitle = context['EventInfo'] as NodeJS.Dict<string | string>;
  let pageTitle = contextTitle.titlePrefix;
  if (fields?.pageTitle?.value.toString()) {
    pageTitle += ` - ${fields.pageTitle.value.toString()}`;
  } else if (fields?.Title?.value.toString()) {
    // Only needed on XM Cloud with SXA
    pageTitle += ` - ${fields.Title.value.toString()}`;
  }
  // END CUSTOMIZATION

  return (
    <>
      <Head>
        {/* DEMO TEAM CUSTOMIZATION - Use event name from context as the page title */}
        <title>{pageTitle}</title>
        <link rel="icon" href={`${publicUrl}/favicon.ico`} />
        <meta name="robots" content="noindex" />
      </Head>

      {/* DEMO TEAM CUSTOMIZATION - Remove VisitorIdentification */}

      {/* root placeholder for the app, which we add components to using route data */}
      {/* DEMO TEAM CUSTOMIZATION - Add CSS classes when Sitecore editors are active. Add HeaderCdpMessageBar. Custom placeholder names. Remove sections inner divs. */}
      <div className={mainClassPageEditing}>
        <header className={isExperienceEditorActiveCssClass}>
          {route && <Placeholder name="headless-header" rendering={route} />}
        </header>
        <main className={isExperienceEditorActiveCssClass}>
          <HeaderCdpMessageBar />
          {route && <Placeholder name="headless-main" rendering={route} />}
        </main>
        <footer>{route && <Placeholder name="headless-footer" rendering={route} />}</footer>
      </div>
      {/* END CUSTOMIZATION */}
    </>
  );
};

export default Layout;
