import Head from 'next/head';
import { ReactElement } from 'react';
import { SearchLayout } from '../../components/Search/Search';

const Search = (): JSX.Element => {
  return <></>;
};

Search.getLayout = function getLayout(page: ReactElement) {
  return (
    <SearchLayout>
      <Head>
        <title>PLAY! SHOP</title>
      </Head>

      {page}
    </SearchLayout>
  );
};

export default Search;
