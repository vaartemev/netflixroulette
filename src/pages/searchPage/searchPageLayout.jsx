import React from 'react';
import { Header } from '../../containers/header/header';
import { ResultInfo } from '../../containers/resultInfo/resultInfo';
import { ResultBody } from '../../containers/resultBody/resultBody';
import { SearchField } from './searchField/searchField';

export const SearchPageLayout = props => {
  return (
    <>
      <Header {...props} />
      <ResultInfo {...props} />
      <ResultBody {...props} />
    </>
  );
};
