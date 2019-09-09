import React from 'react';
import { ResultInfo, ResultBody } from '../../containers';
import { MoviePageHeader } from './moviePageHeader';

export const MoviePage = () => {
  return (
    <>
      <MoviePageHeader />
      <ResultInfo />
      <ResultBody />
    </>
  );
};
