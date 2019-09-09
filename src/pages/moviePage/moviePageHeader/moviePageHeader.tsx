import React, { useEffect, createRef } from 'react';
import { useRouter, withRouter } from 'next/router';

import { useSelector, useDispatch } from 'react-redux';
import { MovieDetails } from './movieDetails';
import { Logo, Button, ButtonType } from '../../../components';

import { getMovieDetailsById } from '../../../actions';

import { movieSelector } from '../../../selectors';
import './moviePageHeader.scss';

export const MoviePageHeader = withRouter(() => {
  const movie = useSelector(movieSelector);
  const dispatch = useDispatch();
  const ref = createRef();
  const router = useRouter();
  const { id } = router.query;
  useEffect(() => {
    dispatch(getMovieDetailsById(id));
  }, []);

  return (
    <div className="header">
      <Logo text="netflixroulette" />

      {Object.keys(movie).length && (
        <>
          <Button type={ButtonType.searchLink} ref={ref} text="Search" />

          <MovieDetails movie={movie} />
        </>
      )}
    </div>
  );
});
