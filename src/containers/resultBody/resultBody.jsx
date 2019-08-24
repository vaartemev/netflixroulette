import React from 'react';
import classNames from 'classnames';
import { useSelector, useDispatch } from 'react-redux';
import { Preloader } from '../../components/preloader/preloader';
import { MovieItem } from '../../components/movieItem/movieItem';
import { NoFilmsFound } from '../../components/noFilmsFound/noFilmsFound';
import { getMovieDetailsById } from '../../actions';
import './resultBody.scss';

export const ResultBody = () => {
  const { movies, isFetching } = useSelector(state => ({
    movies: state.movie.movies,
    isFetching: state.movie.isFetching,
  }));
  const dispatch = useDispatch();

  const yetLoader = (condition, then, otherwise) =>
    condition ? then : otherwise;

  const resultClass = classNames('content', {
    'content-not-found': movies.length === 0,
    'content-films-list': movies.length > 0,
  });

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
