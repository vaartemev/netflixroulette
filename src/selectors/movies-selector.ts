import { createSelector } from 'reselect';

const moviesSelector = (state: any) => state.movie;

export const resultSelector = createSelector(
  moviesSelector,
  movie => ({
    movies: movie.get('movies'),
    isFetching: movie.get('isFetching'),
    genre: movie.get('searchQuery'),
  }),
);

export const movieSelector = createSelector(
  moviesSelector,
  movie => movie.get('movie'),
);

export const searchSelector = createSelector(
  moviesSelector,
  movie => ({
    searchBy: movie.get('searchBy'),
    sortBy: movie.get('sortBy'),
    searchQuery: movie.get('searchQuery'),
  }),
);
