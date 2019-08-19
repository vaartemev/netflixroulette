import React from 'react';
import PropTypes from 'prop-types';
import { Logo } from '../logo/logo';
import { Button, ButtonType } from '../button/button';
import { MovieDetails } from '../movieDetails/movieDetails';

import './movieInfo.scss';

export const MovieInfo = ({ movie }) => {
  return (
    <div>
      <div className="movieInfo__header">
        <Logo />
        <Button type={ButtonType.searchLink} text="Search" />
      </div>
      <MovieDetails movie={movie} />
    </div>
  );
};

MovieInfo.ptopTypes = {
  movie: PropTypes.obj
};
