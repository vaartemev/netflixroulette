import React, { useEffect } from 'react';
import classNames from 'classnames';
import { useRouter } from 'next/router';
import { useSelector, useDispatch } from 'react-redux';
import { Preloader, MovieItem, NoFilmsFound } from '../../components';

import { getMovieDetailsById, getMoviesBySearchQuery } from '../../actions';
import './resultBody.scss';

interface MoviesTypes {
  id: number;
  title: string;
  poster_path: string;
  release_date: string;
  genres: string[];
}
interface Store {
  searchBy: string;
  sortBy: string;
  movie: any;
}
export const ResultBody = () => {
  const { movies, isFetching } = useSelector<
    Store,
    { movies: Record<string, any>; isFetching: boolean }
  >(state => ({
    movies: state.movie.get('movies'),
    isFetching: state.movie.get('isFetching'),
  }));

  const dispatch = useDispatch();
  const yetLoader = (
    condition: boolean,
    then: React.ReactNode,
    otherwise: React.ReactNode,
  ): React.ReactNode => (condition ? then : otherwise);

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
        : movies.map(
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
          )}
    </div>
  );
};
