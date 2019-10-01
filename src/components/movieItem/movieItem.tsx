import React from 'react';
import { Link } from '../link';
import { MovieTitle } from '../movieTitle';
import { Thumbnail } from '../thumbnail';

import './movieItem.scss';

interface Props {
  id: number;
  src: string;
  title: string;
  year: string;
  genre: string[];
  handleOnClick: () => void;
}

export const MovieItem = ({
  id,
  src,
  title,
  year,
  genre,
  handleOnClick,
}: Props) => {
  return (
    <Link href={`/movie/${id}`}>
      <div className="movie" onClick={handleOnClick} role="link" tabIndex={0}>
        <Thumbnail src={src} className="movie__thumbnail" />
        <div className="movie__info">
          <MovieTitle className="movie__title" title={title} />
          <span className="movie__year">{new Date(year).getFullYear()}</span>
          <div className="movie__genre">{genre.join(', ')}</div>
        </div>
      </div>
    </Link>
  );
};
