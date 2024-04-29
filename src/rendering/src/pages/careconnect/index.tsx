import React, { ReactElement } from 'react';
import Head from 'next/head';
import CareConnect from 'components/CareConnect/CareConnect';

const CareConnectPage = () => <CareConnect />;

CareConnectPage.getLayout = function getLayout(page: ReactElement) {
  return (
    <>
      <Head>
        <title>CareConnect</title>
        <link rel="icon" type="image/x-icon" href="/assets/img/careconnect/careconnect.ico" />
      </Head>

      {page}
    </>
  );
};

export default CareConnectPage;
