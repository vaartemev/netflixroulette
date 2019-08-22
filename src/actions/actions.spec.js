import * as actions from './index';
import * as types from '../constants';

describe('Actions test', () => {
  it('should create an action to get movies by search query', () => {
    const { search, searchBy, sortBy, sortOrder } = {
      search: 'Hello',
      searchBy: 'title',
      sortBy: 'rating',
      sortOrder: 'desc',
    };
    const expectedAction = {
      type: types.GET_MOVIES_BY_SEARCH_QUERY,
      payload: {
        search,
        searchBy,
        sortBy,
        sortOrder,
      },
    };

    expect(
      actions.getMoviesBySearchQuery(search, searchBy, sortBy, sortOrder),
    ).toEqual(expectedAction);
  });

  it('should create an action to get movies by search query success', () => {
    const movies = [
      {
        title: 'galaxy',
      },
      {
        title: 'star',
      },
    ];
    const expectedAction = {
      type: types.GET_MOVIES_BY_SEARCH_QUERY_SUCCESS,
      payload: {
        movies,
      },
    };

    expect(actions.getMoviesBySearchQuerySuccess(movies)).toEqual(
      expectedAction,
    );
  });

  it('should create an action to get movies details by id', () => {
    const id = 650;
    const expectedAction = {
      type: types.GET_MOVIE_DETAILS_BY_ID,
      payload: {
        id,
      },
    };

    expect(actions.getMovieDetailsById(id)).toEqual(expectedAction);
  });

  it('should create an action to get movies details by id success', () => {
    const movie = {
      id: 650,
      title: 'galaxy',
    };
    const expectedAction = {
      type: types.GET_MOVIE_DETAILS_BY_ID_SUCCESS,
      payload: {
        movie,
      },
    };

    expect(actions.getMovieDetailsByIdSuccess(movie)).toEqual(expectedAction);
  });

  it('should create an action to set search filter', () => {
    const searchBy = 'title';
    const expectedAction = {
      type: types.SET_SEARCH_FILTER,
      payload: {
        searchBy,
      },
    };

    expect(actions.setSearchFilter(searchBy)).toEqual(expectedAction);
  });

  it('should create an action to set sort filter', () => {
    const sortBy = 'rating';
    const expectedAction = {
      type: types.SET_SORT_FILTER,
      payload: {
        sortBy,
      },
    };

    expect(actions.setSortFilter(sortBy)).toEqual(expectedAction);
  });

  it('should create an action to set search value', () => {
    const searchValue = 'star wars';
    const expectedAction = {
      type: types.SET_SEARCH_VALUE,
      payload: {
        searchValue,
      },
    };

    expect(actions.setSearchValue(searchValue)).toEqual(expectedAction);
  });
});
