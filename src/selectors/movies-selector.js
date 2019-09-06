import { createSelector } from 'reselect';

const moviesSelector = (state) => state.movie;

export const resultSelector = createSelector(
  moviesSelector,
  movie => ({
      movies: movie.get('movies'),
      isFetching: movie.get('isFetching'),
      genre: movie.get('searchQuery'),
    })
);

export const movieSelector = createSelector(
  moviesSelector,
  movie => movie.get('movie')
);

export const searchSelector = (state) => {
  return state.movie.get('searchQuery');
};

export const searchBySelector = (state) => {
  return state.movie.get('searchBy');
};

export const sortBySelector = (state) => {
  return state.movie.get('sortBy');
};