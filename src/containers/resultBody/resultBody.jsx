import React, { useEffect } from 'react';
import classNames from 'classnames';
import { useRouter } from 'next/router';
import { useSelector, useDispatch } from 'react-redux';
import { Preloader, MovieItem, NoFilmsFound } from '../../components';

import { getMovieDetailsById, getMoviesBySearchQuery } from '../../actions';
import {resultSelector} from '../../selectors';
import './resultBody.scss';

export const ResultBody = () => {
  const {movies, isFetching} = useSelector(resultSelector);
  
  const dispatch = useDispatch();

  const yetLoader = (condition, then, otherwise) =>
    condition ? then : otherwise;

  const resultClass = classNames('content', {
    'content-not-found': movies.length === 0,
    'content-films-list': movies.length > 0,
  });
  const router = useRouter();
  const { searchValue } = router.query;

  useEffect(() => {
    if (searchValue !== 'undefined') {
      dispatch(getMoviesBySearchQuery(searchValue));
    }
  }, []);

  return (
    <div className={resultClass}>
      {movies.length === 0
        ? yetLoader(
            isFetching,
            <Preloader />,
            <NoFilmsFound className="content-not-found__text" />,
          )
        : movies.map(({ id, title, poster_path, release_date, genres }) => (
            <MovieItem
              key={id}
              id={id}
              handleOnClick={() => dispatch(getMovieDetailsById(id))}
              title={title}
              src={poster_path}
              year={release_date}
              genre={genres}
            />
          ))}
    </div>
  );
};
