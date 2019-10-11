import React from 'react';
import { SearchPageHeader, ResultInfo, ResultBody } from '../../containers';

export const SearchPage = ({ match: { params } }) => {
  return (
    <>
      <SearchPageHeader />
      <ResultInfo page="searchPage" />
      <ResultBody params={params} />
    </>
  );
};
