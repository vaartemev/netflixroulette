import { movieReducer, initialState } from './movieReducer';
import * as types from '../constants';

describe('Movie reducer', () => {
  it('Should handle get movies by search query', () => {
    const action = {
      type: types.GET_MOVIES_BY_SEARCH_QUERY,
      payload: {
        search: 'awaw',
        sortBy: 'rating',
      },
    };
    expect(movieReducer(initialState, action)).toEqual({
      ...initialState,
      searchQuery: action.payload.search,
      sortBy: action.payload.sortBy,
      isFetching: true,
    });
  });

  it('should return new state with movies array', () => {
    const newState = {
      movies: [],
      movie: {},
      searchQuery: 'awaw',
      searchBy: 'title',
      sortBy: 'rating',
      isFetching: true,
    };
    const action = {
      type: types.GET_MOVIES_BY_SEARCH_QUERY_SUCCESS,
      payload: {
        movies: [1, 2, 3],
      },
    };
    expect(movieReducer(newState, action)).toEqual({
      ...newState,
      movies: action.payload.movies,
      isFetching: false,
    });
  });

  it('should return new state with isFetching equal false', () => {
    const newState = {
      movies: [1, 2, 3],
      movie: {},
      searchQuery: 'awaw',
      searchBy: 'title',
      sortBy: 'rating',
      isFetching: true,
    };
    const action = {
      type: types.GET_MOVIES_BY_SEARCH_QUERY_FAILURE,
    };
    expect(movieReducer(newState, action)).toEqual({
      ...newState,
      isFetching: false,
    });
  });

  it('should return new state with new search filter', () => {
    const newState = {
      movies: [1, 2, 3],
      movie: {},
      searchQuery: 'awaw',
      searchBy: 'title',
      sortBy: 'rating',
      isFetching: false,
    };
    const action = {
      type: types.SET_SEARCH_FILTER,
      payload: {
        searchBy: 'genres',
      },
    };
    expect(movieReducer(newState, action)).toEqual({
      ...newState,
      searchBy: action.payload.searchBy,
    });
  });

  it('should return new state with new sort filter', () => {
    const newState = {
      movies: [1, 2, 3],
      movie: {},
      searchQuery: 'awaw',
      searchBy: 'genres',
      sortBy: 'rating',
      isFetching: false,
    };
    const action = {
      type: types.SET_SORT_FILTER,
      payload: {
        sortBy: 'release_date',
      },
    };
    expect(movieReducer(newState, action)).toEqual({
      ...newState,
      sortBy: action.payload.sortBy,
    });
  });

  it('should return new state with new search value', () => {
    const newState = {
      movies: [1, 2, 3],
      movie: {},
      searchQuery: 'awaw',
      searchBy: 'genres',
      sortBy: 'release_date',
      isFetching: false,
    };
    const action = {
      type: types.SET_SEARCH_VALUE,
      payload: {
        searchValue: 'query',
      },
    };
    expect(movieReducer(newState, action)).toEqual({
      ...newState,
      searchQuery: action.payload.searchValue,
    });
  });

  it('Should handle GET_MOVIE_DETAILS_BY_ID ', () => {
    const newState = {
      movies: [1, 2, 3],
      movie: {},
      searchQuery: 'query',
      searchBy: 'genres',
      sortBy: 'release_date',
      isFetching: false,
    };
    const action = {
      type: types.GET_MOVIE_DETAILS_BY_ID,
      payload: {
        id: 650,
      },
    };
    expect(movieReducer(newState, action)).toEqual({
      ...newState,
      id: action.payload.id,
      isFetching: true,
    });
  });

  it('should return new state with new movie object', () => {
    const newState = {
      movies: [1, 2, 3],
      movie: {},
      searchQuery: 'query',
      searchBy: 'genres',
      sortBy: 'release_date',
      isFetching: true,
      id: 650,
    };
    const action = {
      type: types.GET_MOVIE_DETAILS_BY_ID_SUCCESS,
      payload: {
        movie: { title: 'galaxy', id: '650' },
      },
    };
    expect(movieReducer(newState, action)).toEqual({
      ...newState,
      movie: action.payload.movie,
      isFetching: false,
    });
  });

  it('should return new state with isFetching equal false', () => {
    const newState = {
      movies: [1, 2, 3],
      movie: {},
      searchQuery: 'query',
      searchBy: 'genres',
      sortBy: 'release_date',
      isFetching: true,
    };
    const action = {
      type: types.GET_MOVIE_DETAILS_BY_ID_FAILURE,
    };
    expect(movieReducer(newState, action)).toEqual({
      ...newState,
      isFetching: false,
    });
  });
});
