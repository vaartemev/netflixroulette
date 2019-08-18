import React from 'react';
import classNames from 'classnames';
import { useSelector, useDispatch } from 'react-redux';
import { Preloader } from '../../components/preloader/preloader';
import { MovieItem } from '../../components/movieItem/movieItem';
import { NoFilmsFound } from '../../components/noFilmsFound/noFilmsFound';
import './resultBody.scss';
import { getMovieDetailsById } from '../../actions';

export const ResultBody = () => {
  const { movies, isFetching } = useSelector(state => ({
    movies: state.movie.movies,
    isFetching: state.movie.isFetching
  }));
  const dispatch = useDispatch();

  const resultClass = classNames({
    'no-films-found': movies.length === 0,
    'films-list': movies.length > 0
  });

  return (
    <div className="content">
      <div className={resultClass}>
        {isFetching ? (
          <Preloader />
        ) : movies.length === 0 ? (
          <NoFilmsFound />
        ) : (
          movies.map(({ id, title, poster_path, release_date, genres }) => (
            <MovieItem
              key={id}
              handleOnClick={() => dispatch(getMovieDetailsById(id))}
              title={title}
              src={poster_path}
              year={release_date}
              genre={genres}
            />
          ))
        )}
      </div>
    </div>
  );
};
