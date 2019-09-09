import { createSelector } from 'reselect';
import { moviesSelector } from './movies-selector';

export const movieSelector = createSelector(
  moviesSelector,
  movie => movie.get('movie'),
);
