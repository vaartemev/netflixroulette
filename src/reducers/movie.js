import { GET_MOVIES_SUCCESS, GET_MOVIES_FAILURE } from '../constants';

const initialState = {
  movies: [],
  isFetching: true
};

export const movie = (state = initialState, action) => {
  const { type, payload } = action;
  switch (type) {
    case GET_MOVIES_SUCCESS:
      return { ...state, movies: payload.movies, isFetching: false };
    case GET_MOVIES_FAILURE:
      return state;
    default:
      return state;
  }
};
