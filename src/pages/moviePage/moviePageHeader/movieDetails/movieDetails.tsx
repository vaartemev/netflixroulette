/* eslint-disable camelcase */
import React from 'react';
import { MovieTitle, Thumbnail } from '../../../../components';

import './movieDetails.scss';

interface Types {
  poster_path: string;
  title: string;
  tagline: string;
  vote_average: number;
  overview: string;
  release_date: string;
  runtime: number;
}

interface MovieProps {
  movie: Types;
}

export const MovieDetails = ({
  movie: {
    poster_path,
    title,
    tagline,
    vote_average,
    overview,
    release_date,
    runtime,
  },
}: MovieProps) => {
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
