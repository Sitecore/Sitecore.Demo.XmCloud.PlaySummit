/**
 * This Layout is needed for Starter Kit.
 */
import React, { useEffect } from 'react'; // DEMO TEAM CUSTOMIZATION - Log page views
import Head from 'next/head';
// DEMO TEAM CUSTOMIZATION - Add LayoutServicePageState
import { Placeholder, LayoutServiceData, Field, HTMLLink } from '@sitecore-jss/sitecore-jss-nextjs';
import config from 'temp/config';
import Scripts from 'src/Scripts';
// DEMO TEAM CUSTOMIZATION - CDP and Sitecore Send integration
import { trackViewEvent } from './services/TrackingService';
import HeaderCdpMessageBar from './components/HeaderCdpMessageBar';
import { isEditingOrPreviewingPage } from './helpers/LayoutServiceHelper';
// END CUSTOMIZATION

// Prefix public assets with a public URL to enable compatibility with Sitecore Experience Editor.
// If you're not supporting the Experience Editor, you can remove this.
const publicUrl = config.publicUrl;

interface LayoutProps {
  layoutData: LayoutServiceData;
  headLinks: HTMLLink[];
}

interface RouteFields {
  [key: string]: unknown;
  Title?: Field;
  pageTitle?: Field; // DEMO TEAM CUSTOMIZATION - Add field
}

const Layout = ({ layoutData, headLinks }: LayoutProps): JSX.Element => {
  const { route, context } = layoutData.sitecore; // DEMO TEAM CUSTOMIZATION - Add context to destructuring
  const fields = route?.fields as RouteFields;
  const isPageEditing = layoutData.sitecore.context.pageEditing;
  const mainClassPageEditing = isPageEditing ? 'editing-mode' : 'prod-mode';

  // DEMO TEAM CUSTOMIZATION - Log page views
  useEffect(() => {
    (async () => {
      await trackViewEvent(route);
    })();
  }, [route]);
  // END CUSTOMIZATION

  // DEMO TEAM CUSTOMIZATION - Add CSS classes when Sitecore editors are active
  const isExperienceEditorActiveCssClass = isEditingOrPreviewingPage(context.pageState)
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
      <Scripts />
      <Head>
        {/* DEMO TEAM CUSTOMIZATION - Use event name from context as the page title */}
        <title>{pageTitle}</title>
        <link rel="icon" href={`${publicUrl}/favicon.ico`} />
        {headLinks.map((headLink) => (
          <link rel={headLink.rel} key={headLink.href} href={headLink.href} />
        ))}
        <meta name="robots" content="noindex" />
      </Head>

      {/* root placeholder for the app, which we add components to using route data */}
      {/* DEMO TEAM CUSTOMIZATION - Add CSS classes when Sitecore editors are active. Add HeaderCdpMessageBar. Remove sections inner divs. */}
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
