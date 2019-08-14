import React from 'react';
import { Logo } from '../logo/logo';
import { Button, ButtonType } from '../button/button';
import { MovieDetails } from '../movieDetails/movieDetails';

import './movieInfo.scss';

export const MovieInfo = () => {
  const data = {
    overview:
      "It's Ted the Bellhop's first night on the job...and the hotel's very unusual guests are about to place him in some outrageous predicaments. It seems that this evening's room service is serving up one unbelievable happening after another.",
    poster_path:
      'https://image.tmdb.org/t/p/w500/eQs5hh9rxrk1m4xHsIz1w11Ngqb.jpg',
    release_date: '1995-12-09',
    runtime: 98,
    tagline:
      "Twelve outrageous guests. Four scandalous requests. And one lone bellhop, in his first day on the job, who's in for the wildest New year's Eve of his life.",
    title: 'Four Rooms',
    vote_average: 6.6
  };
  return (
    <div>
      <div className="movieInfo__header">
        <Logo />
        <Button type={ButtonType.searchLink} text="Search" />
      </div>
      <MovieDetails movie={data} />
    </div>
  );
};
