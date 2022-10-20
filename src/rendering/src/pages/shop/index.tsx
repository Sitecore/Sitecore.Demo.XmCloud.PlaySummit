import Head from 'next/head';
import { ReactElement } from 'react';
import { ShopLayout } from '../../components/Products/Shop';

const Shop = (): JSX.Element => {
  return <></>;
};

Shop.getLayout = function getLayout(page: ReactElement) {
  return (
    <ShopLayout>
      <Head>
        <title>PLAY! SHOP</title>
      </Head>

      {page}
    </ShopLayout>
  );
};

export default Shop;
