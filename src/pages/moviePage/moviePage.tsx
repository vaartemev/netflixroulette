import React from 'react';
import { ResultInfo, ResultBody } from '../../containers';
import { MoviePageHeader } from './moviePageHeader';

export const MoviePage = ({ match: { params } }: any) => {
  return (
    <>
      <MoviePageHeader />
      <ResultInfo page="moviePage" />
      <ResultBody params={params} />
    </>
  );
};
