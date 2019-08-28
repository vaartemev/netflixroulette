import React from 'react';
import { ResultInfo } from '../../containers/resultInfo/resultInfo';
import { ResultBody } from '../../containers/resultBody/resultBody';
import { MovieHeader } from './movieHeader';

export const MoviePage = () => {
  return (
    <>
      <MovieHeader />
      <ResultInfo />
      <ResultBody />
    </>
  );
};
