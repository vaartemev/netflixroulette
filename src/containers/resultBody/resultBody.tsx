import React, { useEffect } from 'react';
import classNames from 'classnames';
import { useSelector, useDispatch } from 'react-redux';
import { Preloader, MovieItem, NoFilmsFound } from '../../components';
import { YetLoader } from '../../components/yetLoader/yetLoader';

import { getMovieDetailsById, getMoviesBySearchQuery } from '../../actions';
import { resultSelector, searchSelector } from '../../selectors';
import './resultBody.scss';

type Value = string;

interface Params {
  params: {
    value: Value;
  };
}

interface Selectors {
  movies: MoviesTypes[];
  isFetching: boolean;
  genre: string;
}

interface MoviesTypes {
  id: number;
  title: string;
  poster_path: string;
  release_date: string;
  genres: string[];
}

export const ResultBody = ({ params }) => {
  const { movies, isFetching, genre } = useSelector<string, Selectors>(resultSelector);
  const { searchBy, sortBy } = useSelector<string, any>(searchSelector);

  const dispatch = useDispatch();

  const resultClass = classNames('content', {
    'content-not-found': movies.length === 0,
    'content-films-list': movies.length > 0,
  });

  let { value } = params;

  useEffect(() => {
    if (value === '') {
      value = genre;
      dispatch(getMoviesBySearchQuery(value, searchBy, sortBy));
    }
    dispatch(getMoviesBySearchQuery(value, searchBy, sortBy));
  }, [value]);

  return (
    <div className={resultClass}>
      {movies.length !== 0 ? (
        movies.map(({ id, title, poster_path, release_date, genres }: MoviesTypes) => (
          <MovieItem
            key={id}
            id={id}
            handleOnClick={() => dispatch(getMovieDetailsById(id))}
            title={title}
            src={poster_path}
            year={release_date}
            genre={genres}
          />
        ))
      ) : (
        <YetLoader
          condition={isFetching}
          content={<Preloader />}
          otherwise={<NoFilmsFound className="content-not-found__text" />}
        />
      )}
    </div>
  );
};
