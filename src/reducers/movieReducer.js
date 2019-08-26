import {Map} from 'immutable';
import {
  SET_SEARCH_FILTER,
  SET_SORT_FILTER,
  SET_SEARCH_VALUE,
  GET_MOVIE_DETAILS_BY_ID,
  GET_MOVIE_DETAILS_BY_ID_SUCCESS,
  GET_MOVIE_DETAILS_BY_ID_FAILURE,
  GET_MOVIES_BY_SEARCH_QUERY,
  GET_MOVIES_BY_SEARCH_QUERY_SUCCESS,
  GET_MOVIES_BY_SEARCH_QUERY_FAILURE,
} from '../constants';

export const initialState = Map({
  movies: [],
  movie: {},
  searchQuery: '',
  searchBy: 'title',
  sortBy: 'release_date',
  isFetching: false,
});

// searchQuery: payload.search,
//         sortBy: payload.sortBy,
//         isFetching: true,
//       };
export const movieReducer = (state = initialState, action) => {
  const { type, payload } = action;
  switch (type) {
    case GET_MOVIES_BY_SEARCH_QUERY:
      return state.setIn(
        ['searchQuery', 'sortBy', 'isFetching'],
        payload.search,
        payload.sortBy,
        true,
      );
    case GET_MOVIES_BY_SEARCH_QUERY_SUCCESS:
      return {
        ...state,
        movies: payload.movies,
        isFetching: false,
      };
    case GET_MOVIES_BY_SEARCH_QUERY_FAILURE:
      return {
        ...state,
        isFetching: false,
      };
    case SET_SEARCH_FILTER:
      return {
        ...state,
        searchBy: payload.searchBy,
      };
    case SET_SORT_FILTER:
      return {
        ...state,
        sortBy: payload.sortBy,
      };
    case SET_SEARCH_VALUE:
      return {
        ...state,
        searchQuery: payload.searchValue,
      };
    case GET_MOVIE_DETAILS_BY_ID:
      return {
        ...state,
        id: payload.id,
        isFetching: true,
      };
    case GET_MOVIE_DETAILS_BY_ID_SUCCESS:
      return {
        ...state,
        movie: payload.movie,
        isFetching: false,
      };
    case GET_MOVIE_DETAILS_BY_ID_FAILURE:
      return {
        ...state,
        isFetching: false,
      };

    default:
      return state;
  }
};
