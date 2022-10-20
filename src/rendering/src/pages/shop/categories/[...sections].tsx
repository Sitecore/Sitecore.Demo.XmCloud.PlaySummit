import Head from 'next/head';
import { ReactElement } from 'react';
import { ShopLayout } from '../../../components/Products/Shop';

const CategoryPage = (): JSX.Element => {
  return <></>;
};

CategoryPage.getLayout = function getLayout(page: ReactElement) {
  return (
    <ShopLayout>
      <Head>
        <title>PLAY! SHOP - Category</title>
      </Head>

      {page}
    </ShopLayout>
  );
};

export default CategoryPage;
