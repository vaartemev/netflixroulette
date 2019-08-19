import React from 'react';
import PropTypes from 'prop-types';
import { MovieTitle } from '../movieTitle/movieTitle';
import { Thumbnail } from '../thumbnail/thumbnail';

import './movieDetails.scss';

export const MovieDetails = ({
  movie: {
    poster_path,
    title,
    tagline,
    vote_average,
    overview,
    release_date,
    runtime
  }
}) => {
  return (
    <div className="about">
      <div className="about__picture">
        <Thumbnail src={poster_path} className="about__thumbnail" />
      </div>
      <div className="about__content">
        <MovieTitle className="about__title" title={title} />
        {vote_average !== 0 && (
          <div className="about__rating">{vote_average}</div>
        )}
        <h4 className="about__subtitle">{tagline}</h4>
        <div className="about__additional-info">
          <h5 className="release-date">
            {new Date(release_date).getFullYear()}
          </h5>
          {runtime && <h5 className="runtime">{runtime} min</h5>}
        </div>
        <p className="about__text">{overview}</p>
      </div>
    </div>
  );
};

MovieDetails.propTypes = {
  movie: PropTypes.shape({
    poster_path: PropTypes.string,
    title: PropTypes.string,
    vote_average: PropTypes.number,
    tagline: PropTypes.string,
    release_date: PropTypes.string,
    runtime: PropTypes.number,
    overview: PropTypes.string
  })
};
