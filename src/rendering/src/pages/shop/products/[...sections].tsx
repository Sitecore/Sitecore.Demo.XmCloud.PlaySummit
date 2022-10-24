import Head from 'next/head';
import { ReactElement } from 'react';
import ProductDetails from '../../../components/Products/ProductDetails';
import { ShopLayout } from '../../../components/Products/Shop';

const ProductPage = (): JSX.Element => {
  return (
    <>
      <ProductDetails />
    </>
  );
};

ProductPage.getLayout = function getLayout(page: ReactElement) {
  return (
    <ShopLayout>
      <Head>
        <title>PLAY! SHOP - Product</title>
      </Head>

      {page}
    </ShopLayout>
  );
};

export default ProductPage;
