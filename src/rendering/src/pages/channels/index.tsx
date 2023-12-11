import React, { ReactElement } from 'react';
import Head from 'next/head';

const Channels = () => <p>list of all demo pages</p>;

Channels.getLayout = function getLayout(page: ReactElement) {
  return (
    <>
      <Head>
        <title>PLAY! Demo Pages</title>
      </Head>

      {page}
    </>
  );
};

export default Channels;
