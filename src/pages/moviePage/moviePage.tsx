import React from 'react';
import { ResultInfo, ResultBody } from '../../containers';
import { MoviePageHeader } from './moviePageHeader';

export const MoviePage = (): JSX.Element => {
  return (
    <>
      <MoviePageHeader />
      <ResultInfo />
      <ResultBody />
    </>
  );
};
