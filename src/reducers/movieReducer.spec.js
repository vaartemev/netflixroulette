import { movieReducer, initialState } from './movieReducer';
import * as types from '../constants';

describe('Test movie reducer', () => {
  it('GET_MOVIES_BY_SEARCH_QUERY', () => {
    const action = {
      type: types.GET_MOVIES_BY_SEARCH_QUERY,
      payload: {
        search: 'awaw',
        sortBy: 'rating'
      }
    };
    expect(movieReducer(initialState, action)).toEqual({
      ...initialState,
      searchQuery: action.payload.search,
      sortBy: action.payload.sortBy,
      isFetching: true
    });
  });

  it('GET_MOVIES_BY_SEARCH_QUERY_SUCCESS', () => {
    const newState = {
      movies: [],
      movie: {},
      searchQuery: 'awaw',
      searchBy: 'title',
      sortBy: 'rating',
      isFetching: true
    };
    const action = {
      type: types.GET_MOVIES_BY_SEARCH_QUERY_SUCCESS,
      payload: {
        movies: [1, 2, 3]
      }
    };
    expect(movieReducer(newState, action)).toEqual({
      ...newState,
      movies: action.payload.movies,
      isFetching: false
    });
  });

  it('GET_MOVIES_BY_SEARCH_QUERY_FAILURE', () => {
    const newState = {
      movies: [1, 2, 3],
      movie: {},
      searchQuery: 'awaw',
      searchBy: 'title',
      sortBy: 'rating',
      isFetching: true
    };
    const action = {
      type: types.GET_MOVIES_BY_SEARCH_QUERY_FAILURE
    };
    expect(movieReducer(newState, action)).toEqual({
      ...newState,
      isFetching: false
    });
  });

  it('SET_SEARCH_FILTER', () => {
    const newState = {
      movies: [1, 2, 3],
      movie: {},
      searchQuery: 'awaw',
      searchBy: 'title',
      sortBy: 'rating',
      isFetching: false
    };
    const action = {
      type: types.SET_SEARCH_FILTER,
      payload: {
        searchBy: 'genres'
      }
    };
    expect(movieReducer(newState, action)).toEqual({
      ...newState,
      searchBy: action.payload.searchBy
    });
  });

  it('SET_SORT_FILTER', () => {
    const newState = {
      movies: [1, 2, 3],
      movie: {},
      searchQuery: 'awaw',
      searchBy: 'genres',
      sortBy: 'rating',
      isFetching: false
    };
    const action = {
      type: types.SET_SORT_FILTER,
      payload: {
        sortBy: 'release_date'
      }
    };
    expect(movieReducer(newState, action)).toEqual({
      ...newState,
      sortBy: action.payload.sortBy
    });
  });

  it('SET_SEARCH_VALUE', () => {
    const newState = {
      movies: [1, 2, 3],
      movie: {},
      searchQuery: 'awaw',
      searchBy: 'genres',
      sortBy: 'release_date',
      isFetching: false
    };
    const action = {
      type: types.SET_SEARCH_VALUE,
      payload: {
        searchValue: 'query'
      }
    };
    expect(movieReducer(newState, action)).toEqual({
      ...newState,
      searchQuery: action.payload.searchValue
    });
  });

  it('GET_MOVIE_DETAILS_BY_ID', () => {
    const newState = {
      movies: [1, 2, 3],
      movie: {},
      searchQuery: 'query',
      searchBy: 'genres',
      sortBy: 'release_date',
      isFetching: false
    };
    const action = {
      type: types.GET_MOVIE_DETAILS_BY_ID,
      payload: {
        id: 650
      }
    };
    expect(movieReducer(newState, action)).toEqual({
      ...newState,
      id: action.payload.id,
      isFetching: true
    });
  });

  it('GET_MOVIE_DETAILS_BY_ID_SUCCESS', () => {
    const newState = {
      movies: [1, 2, 3],
      movie: {},
      searchQuery: 'query',
      searchBy: 'genres',
      sortBy: 'release_date',
      isFetching: true,
      id: 650
    };
    const action = {
      type: types.GET_MOVIE_DETAILS_BY_ID_SUCCESS,
      payload: {
        movie: { title: 'galaxy', id: '650' }
      }
    };
    expect(movieReducer(newState, action)).toEqual({
      ...newState,
      movie: action.payload.movie,
      isFetching: false
    });
  });

  it('GET_MOVIE_DETAILS_BY_ID_FAILURE', () => {
    const newState = {
      movies: [1, 2, 3],
      movie: {},
      searchQuery: 'query',
      searchBy: 'genres',
      sortBy: 'release_date',
      isFetching: true
    };
    const action = {
      type: types.GET_MOVIE_DETAILS_BY_ID_FAILURE
    };
    expect(movieReducer(newState, action)).toEqual({
      ...newState,
      isFetching: false
    });
  });
});
