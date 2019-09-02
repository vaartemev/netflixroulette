import React from 'react';
import Link from 'next/link';
import { MovieTitle } from '../movieTitle';
import { Thumbnail } from '../thumbnail';

import './movieItem.scss';

interface MovieItemProps {
  id: number;
  src: string;
  title: string;
  year: string;
  genre: Array<string>;
  handleOnClick();
}

export const MovieItem: React.FC<MovieItemProps> = ({
  id,
  src,
  title,
  year,
  genre,
  handleOnClick,
}) => {
  return (
    <Link href={`/movie?id=${id}`}>
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
