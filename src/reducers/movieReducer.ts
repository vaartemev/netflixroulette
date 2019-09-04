import { Map } from 'immutable';
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
} from '../actions';

export const initialState = Map({
  movies: [],
  movie: {},
  searchQuery: '',
  searchBy: 'title',
  sortBy: 'release_date',
  isFetching: false,
});

export const movieReducer = (state = initialState, action: any) => {
  const { type, payload } = action;
  switch (type) {
    case GET_MOVIES_BY_SEARCH_QUERY:
      return state
        .setIn(['searchQuery'], payload.search)
        .setIn(['sortBy'], payload.sortBy)
        .setIn(['isFetching'], true);
    case GET_MOVIES_BY_SEARCH_QUERY_SUCCESS:
      return state
        .setIn(['movies'], payload.movies)
        .setIn(['isFetching'], false);
    case GET_MOVIES_BY_SEARCH_QUERY_FAILURE:
      return state.setIn(['isFetching'], false);
    case SET_SEARCH_FILTER:
      return state.setIn(['searchBy'], payload.searchBy);
    case SET_SORT_FILTER:
      return state.setIn(['sortBy'], payload.sortBy);
    case SET_SEARCH_VALUE:
      return state.setIn(['searchQuery'], payload.searchValue);
    case GET_MOVIE_DETAILS_BY_ID:
      return state.setIn(['id'], payload.id).setIn(['isFetching'], true);
    case GET_MOVIE_DETAILS_BY_ID_SUCCESS:
      return state.setIn(['movie'], payload.movie).setIn(['isFetching'], false);
    case GET_MOVIE_DETAILS_BY_ID_FAILURE:
      return state.setIn(['isFetching'], false);

    default:
      return state;
  }
};
