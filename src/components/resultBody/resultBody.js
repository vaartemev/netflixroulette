import React from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { MovieItem } from '../movieItem/movieItem';
import { Button, ButtonType } from '../button/button';
import { NoFilmsFound } from '../noFilmsFound/noFilmsFound';
import { getMovies } from '../../actions';
import './resultBody.scss';

export const ResultBody = () => {
  const movies = useSelector(state => state.movie.movies);
  const isFetching = useSelector(state => state.movie.isFetching);
  const dispatch = useDispatch();

  return (
    <div className="content">
      <Button
        text="fetch"
        type={ButtonType.filter}
        handleOnClick={() => dispatch(getMovies())}
      />
      <div className="films-list">
        {isFetching ? (
          <NoFilmsFound />
        ) : (
          movies.map(({ id, title, poster_path, release_date, genres }) => (
            <MovieItem
              key={id}
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
