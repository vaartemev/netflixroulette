import React, { useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';

import { MovieDetails } from './movieDetails';
import { Logo, Button, ButtonType, Link } from '../../../components';
import { getMovieDetailsById } from '../../../actions';
import { movieSelector } from '../../../selectors';

import './moviePageHeader.scss';

interface Params {
  params: {
    id: string;
  };
}

export const MoviePageHeader = ({ params }: Params) => {
  const movie = useSelector(movieSelector);

  const dispatch = useDispatch();

  const { id } = params;

  useEffect(() => {
    dispatch(getMovieDetailsById(Number(id)));
  }, [id]);

  return (
    <div className="header">
      <Logo text="netflixroulette" />

      {Object.keys(movie).length && (
        <>
          <Link href="/">
            <Button type={ButtonType.searchLink} text="Search" />
          </Link>
          <MovieDetails movie={movie} />
        </>
      )}
    </div>
  );
};
