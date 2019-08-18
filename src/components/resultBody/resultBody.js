import React from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { MovieItem } from '../movieItem/movieItem';
import { NoFilmsFound } from '../noFilmsFound/noFilmsFound';
import './resultBody.scss';
import { getMovieDetailsById } from '../../actions';

export const ResultBody = () => {

  const movies = useSelector(state => state.movie.movies);
  const isFetching = useSelector(state => state.movie.isFetching);
  const dispatch = useDispatch();

  return (
    <div className="content">
      <div className="films-list">
        {isFetching ? (
          <h1>Загрузка...</h1>
        ) : (
		  movies.length === 0 ? 
		  <NoFilmsFound /> : 
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
