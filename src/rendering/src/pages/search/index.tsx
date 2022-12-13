import React, { ReactElement } from 'react';
import Head from 'next/head';
import { QueryClientProvider } from '@tanstack/react-query';
import withQueryParams from '../../hocs/withQueryParams';
import SearchResultsContainer from '../../components/ContentSearch/SearchResultsContainer';
import SummitLayout from '../../components/NonSitecore/SummitLayout';
import { queryClient } from '../../helpers/ContentSearchHelper';

const SearchResults = withQueryParams(SearchResultsContainer, ['q', 'tab']);

const Search = (): JSX.Element => <SearchResults />;

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
