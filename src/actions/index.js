import { FETCH_MOVIE_BY_ID, GET_MOVIE_DETAILS_BY_ID } from '../constants';

export const getMovie = () => {
  return {
    type: FETCH_MOVIE_BY_ID,
    payload: {
      movie
    }
  };
};

export const fetchMovieById = () => {
  return {
    type: FETCH_MOVIE_BY_ID,
    payload: {
      movie
    }
  };
};
