import Head from 'next/head';
import { ReactElement } from 'react';
import { ShopLayout } from '../../components/Products/Shop';

const Products = (): JSX.Element => {
  return <></>;
};

Products.getLayout = function getLayout(page: ReactElement) {
  return (
    <ShopLayout>
      <Head>
        <title>PLAY! SHOP - Products</title>
      </Head>

      {page}
    </ShopLayout>
  );
};

export default Products;
