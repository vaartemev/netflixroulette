import { GET_MOVIES_SUCCESS, GET_MOVIES_FAILURE } from '../constants';

const initialState = {
  movies: []
};

export const movie = (state = initialState, action) => {
  const { type } = action;
  switch (type) {
    case GET_MOVIES_SUCCESS:
      return { ...state, movies: action.payload };
    case GET_MOVIES_FAILURE:
      return state;
    default:
      return state;
  }
};
