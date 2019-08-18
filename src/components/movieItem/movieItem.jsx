import React from 'react';
import PropTypes from 'prop-types';
import { MovieTitle } from '../movieTitle/movieTitle';
import { Thumbnail } from '../thumbnail/thumbnail';

import './movieItem.scss';

export const MovieItem = ({ src, title, year, genre, handleOnClick }) => {
  return (
    <div className="movie" onClick={handleOnClick}>
      <Thumbnail src={src} className="movie__thumbnail" />
      <div className="movie__info">
        <MovieTitle className="movie__title" title={title} />
        <span className="movie__year">{new Date(year).getFullYear()}</span>
        <div className="movie__genre">{genre.join(', ')}</div>
      </div>
    </div>
  );
};

MovieItem.propTypes = {
  src: PropTypes.string,
  title: PropTypes.string,
  year: PropTypes.string,
  genre: PropTypes.array
};
