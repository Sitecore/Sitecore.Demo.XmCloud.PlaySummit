'use client';

// Embed FEAAS Clientside into a client bundle
import '@sitecore-feaas/clientside/react';

// Clientside-only component
import './ExampleClientsideComponent';

// Component that can be rendered both on client and server
import './ExampleHybridComponent';

// Required: Exported empty fragment for Next.js to import
// eslint-disable-next-line import/no-anonymous-default-export, react/display-name
export default () => <></>;
