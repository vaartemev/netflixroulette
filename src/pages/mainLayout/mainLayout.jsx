import React from 'react';
import { Header } from '../../containers/header/header';
import { ResultInfo } from '../../containers/resultInfo/resultInfo';
import { ResultBody } from '../../containers/resultBody/resultBody';

export const MainLayout = props => {
  return (
    <>
      <Header {...props} />
      <ResultInfo />
      <ResultBody {...props} />
    </>
  );
};
