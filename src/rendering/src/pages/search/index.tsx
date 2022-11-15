import Head from 'next/head';
import { QueryClientProvider } from '@tanstack/react-query';
import withQueryParams from 'lib/contentSearch/hocs/withQueryParams';
import React, { ReactElement } from 'react';
import SearchResultsContainer from 'components/Search/SearchResultsContainer';
import SummitLayout from '../../components/NonSitecore/SummitLayout';
import { queryClient } from '../../helpers/ContentSearchHelper';

const SearchResults = withQueryParams(SearchResultsContainer, ['q', 'tab']);

const Search = (): JSX.Element => (
  <div className="search-main-container container">
    <SearchResults />
  </div>
);

Search.getLayout = function getLayout(page: ReactElement) {
  return (
    <QueryClientProvider client={queryClient}>
      <Head>
        <title>PLAY! Summit - Search</title>
      </Head>

      <SummitLayout>{page}</SummitLayout>
    </QueryClientProvider>
  );
};

export default Search;
