import { createSelector } from 'reselect';
import { moviesSelector } from './movies-selector';

export const resultSelector = createSelector(
  moviesSelector,
  (movie) => ({
    movies: movie.get('movies'),
    isFetching: movie.get('isFetching'),
    genre: movie.get('searchQuery'),
  }),
);
