import React from 'react';
import { MovieHeader } from '../../containers/movieHeader/movieHeader';
import { ResultInfo } from '../../containers/resultInfo/resultInfo';
import { ResultBody } from '../../containers/resultBody/resultBody';

export const MoviePage = () => {
  return (
    <>
      <MovieHeader />
      <ResultInfo />
      <ResultBody />
    </>
  );
};
