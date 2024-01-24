import React, { ReactElement } from 'react';
import Head from 'next/head';
import { Default as Facebook } from '../../components/Channels/Facebook';

const FacebookPage = () => <Facebook />;

FacebookPage.getLayout = function getLayout(page: ReactElement) {
  return (
    <>
      <Head>
        <title>Facebook</title>
        <link rel="icon" type="image/x-icon" href="/assets/img/channels/facebook.ico" />
      </Head>

      {page}
    </>
  );
};

export default FacebookPage;
