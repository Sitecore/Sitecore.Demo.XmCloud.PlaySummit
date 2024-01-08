import React, { ReactElement } from 'react';
import Head from 'next/head';
import { Default as Google } from '../../components/Channels/Google';

const GooglePage = () => <Google />;

GooglePage.getLayout = function getLayout(page: ReactElement) {
  return (
    <>
      <Head>
        <title>Google</title>
        <link rel="icon" type="image/x-icon" href="/assets/img/channels/google.ico" />
      </Head>

      {page}
    </>
  );
};

export default GooglePage;
