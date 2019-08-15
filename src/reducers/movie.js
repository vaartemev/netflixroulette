import {GET_MOVIES_SUCCESS, GET_MOVIES_FAILURE} from '../constants';

export const movie = (state = {}, action) => {
  const { type } = action;
  switch (type) {
    case GET_MOVIES_SUCCESS:
      return { ...state, movie: action.payload };
	case GET_MOVIES_FAILURE:
		return state = state.clear();
    default:
      return state;
  }
};
