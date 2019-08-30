import React, { useEffect } from 'react';
import classNames from 'classnames';
import { withRouter } from 'react-router-dom';
import { useSelector, useDispatch } from 'react-redux';
import { Preloader, MovieItem, NoFilmsFound } from '../../components';

import { getMovieDetailsById, getMoviesBySearchQuery } from '../../actions';
import './resultBody.scss';

export const ResultBody = withRouter(({ match }) => {
  const { movies, isFetching } = useSelector(state => ({
    movies: state.movie.get('movies'),
    isFetching: state.movie.get('isFetching'),
  }));
  const dispatch = useDispatch();
  const yetLoader = (condition, then, otherwise) =>
    condition ? then : otherwise;

  const resultClass = classNames('content', {
    'content-not-found': movies.length === 0,
    'content-films-list': movies.length > 0,
  });

  const { searchValue } = match.params;
  useEffect(() => {
    dispatch(getMoviesBySearchQuery(searchValue));
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
});
