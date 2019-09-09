import { createSelector } from 'reselect';
import { moviesSelector } from './movies-selector';

export const searchSelector = createSelector(
  moviesSelector,
  movie => ({
    searchBy: movie.get('searchBy'),
    sortBy: movie.get('sortBy'),
    searchQuery: movie.get('searchQuery'),
  }),
);
