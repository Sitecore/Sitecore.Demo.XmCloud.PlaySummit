import React, { ReactElement } from 'react';
import Head from 'next/head';
import { Default as Linkedin } from '../../components/Channels/Linkedin';

const LinkedinPage = () => <Linkedin />;

LinkedinPage.getLayout = function getLayout(page: ReactElement) {
  return (
    <>
      <Head>
        <title>LinkedIn</title>
        <link rel="icon" type="image/x-icon" href="/assets/img/channels/linkedin.ico" />
      </Head>

      {page}
    </>
  );
};

export default LinkedinPage;
