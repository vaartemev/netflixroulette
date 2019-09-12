import React, { useEffect } from 'react';
import { useRouter, withRouter } from 'next/router';
import { useSelector, useDispatch } from 'react-redux';
import { MovieDetails } from './movieDetails';
import { Logo, Button, ButtonType, Link } from '../../../components';

import { getMovieDetailsById } from '../../../actions';
import { movieSelector } from '../../../selectors';
import './moviePageHeader.scss';

export const MoviePageHeader = withRouter(() => {
  const movie = useSelector(movieSelector);
  const dispatch = useDispatch();

  const router = useRouter();
  const { id } = router.query;
  useEffect(() => {
    dispatch(getMovieDetailsById(Number(id)));
  }, [id]);

  return (
    <div className="header">
      <Logo text="netflixroulette" />

      {Object.keys(movie).length && (
        <>
          <Link href="/search">
            <Button type={ButtonType.searchLink} text="Search" />
          </Link>
          <MovieDetails movie={movie} />
        </>
      )}
    </div>
  );
});
