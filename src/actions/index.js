import {
  GET_MOVIES,
  GET_MOVIES_SUCCESS,
  GET_MOVIES_FAILURE,
  GET_MOVIE_DETAILS_BY_ID
} from '../constants';

export const getMovies = () => {
  return {
    type: GET_MOVIES
  };
};

export const getMoviesSuccess = movies => {
  return {
    type: GET_MOVIES_SUCCESS,
    payload: {
      movies
    }
  };
};

export const getMoviesFailure = () => {
  return {
    type: GET_MOVIES_FAILURE
  };
};

export const getMovieDetailsById = () => {
  return {
    type: GET_MOVIE_DETAILS_BY_ID,
    payload: {
      id,
      movie
    }
  };
};
