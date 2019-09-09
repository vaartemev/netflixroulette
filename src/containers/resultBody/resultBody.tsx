import React, { useEffect } from 'react';
import classNames from 'classnames';
import { useRouter } from 'next/router';
import { useSelector, useDispatch } from 'react-redux';
import { Preloader, MovieItem, NoFilmsFound } from '../../components';
import { YetLoader } from '../../components/yetLoader/yetLoader';

import { getMovieDetailsById, getMoviesBySearchQuery } from '../../actions';
import { resultSelector } from '../../selectors';
import './resultBody.scss';

// TODO: movies props change

interface Props {
  movies: any;
  isFetching: boolean;
}
interface MoviesTypes {
  id: number;
  title: string;
  poster_path: string;
  release_date: string;
  genres: string[];
}
export const ResultBody = () => {
  const { movies, isFetching } = useSelector<string, Props>(resultSelector);

  const dispatch = useDispatch();

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
      {movies.length !== 0 ? (
        movies.map(
          ({ id, title, poster_path, release_date, genres }: MoviesTypes) => (
            <MovieItem
              key={id}
              id={id}
              handleOnClick={() => dispatch(getMovieDetailsById(id))}
              title={title}
              src={poster_path}
              year={release_date}
              genre={genres}
            />
          ),
        )
      ) : (
        <YetLoader
          condition={!isFetching}
          content={<NoFilmsFound className="content-not-found__text" />}
          otherwise={<Preloader />}
        />
      )}
    </div>
  );
};
