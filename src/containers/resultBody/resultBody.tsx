import React, { useEffect } from 'react';
import classNames from 'classnames';
import { useRouter } from 'next/router';
import { useSelector, useDispatch } from 'react-redux';
import { Preloader, MovieItem, NoFilmsFound } from '../../components';
import { YetLoader } from '../../components/yetLoader/yetLoader';
import { CLIENT_SIDE_RENDERING } from '../../constants';

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
export const ResultBody = ({ params }: Params) => {
  const { movies, isFetching, genre } = useSelector<string, Selectors>(resultSelector);
  const { searchBy } = useSelector<string, any>(searchSelector);

  const dispatch = useDispatch();
  const router = useRouter();

  const resultClass = classNames('content', {
    'content-not-found': movies.length === 0,
    'content-films-list': movies.length > 0,
  });

  let query = CLIENT_SIDE_RENDERING ? params.value : router.query.value;

  useEffect(() => {
    if (query === '') {
      query = genre;
      dispatch(getMoviesBySearchQuery(query, searchBy));
    }
    dispatch(getMoviesBySearchQuery(query, searchBy));
  }, [query]);

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
