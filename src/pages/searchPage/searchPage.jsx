import React from 'react';
import { SearchHeader } from '../../containers/searchHeader/searchHeader';
import { ResultInfo } from '../../containers/resultInfo/resultInfo';
import { ResultBody } from '../../containers/resultBody/resultBody';

export const SearchPage = () => {
  return (
    <>
      <SearchHeader />
      <ResultInfo />
      <ResultBody />
    </>
  );
};
