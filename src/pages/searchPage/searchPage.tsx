import React from 'react';
import { SearchPageHeader, ResultInfo, ResultBody } from '../../containers';

export const SearchPage = ({ match: { params } }: any) => {
  return (
    <>
      <SearchPageHeader />
      <ResultInfo page="searchPage" />
      <ResultBody params={params} />
    </>
  );
};
