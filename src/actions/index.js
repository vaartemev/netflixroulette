import {
  GET_MOVIE_DETAILS_BY_ID,
  GET_MOVIE_DETAILS_BY_ID_SUCCESS,
  GET_MOVIE_DETAILS_BY_ID_FAILURE,
  GET_MOVIES_BY_SEARCH_QUERY,
  GET_MOVIES_BY_SEARCH_QUERY_SUCCESS,
  GET_MOVIES_BY_SEARCH_QUERY_FAILURE,
  SET_SEARCH_FILTER,
  SET_SORT_FILTER,
  SET_SEARCH_VALUE
} from '../constants';

export const getMoviesBySearchQuery = (
  search,
  searchBy = 'title',
  sortBy = 'release_date',
  sortOrder = 'desc'
) => {
  return {
    type: GET_MOVIES_BY_SEARCH_QUERY,
    payload: {
      search,
      searchBy,
      sortBy,
      sortOrder
    }
  };
};

export const getMoviesBySearchQuerySuccess = movies => {
  return {
    type: GET_MOVIES_BY_SEARCH_QUERY_SUCCESS,
    payload: {
      movies
    }
  };
};

export const getMoviesBySearchQueryFailure = () => {
  return {
    type: GET_MOVIES_BY_SEARCH_QUERY_FAILURE
  };
};

export const getMovieDetailsById = id => {
  return {
    type: GET_MOVIE_DETAILS_BY_ID,
    payload: {
      id
    }
  };
};

export const getMovieDetailsByIdSuccess = movie => {
  return {
    type: GET_MOVIE_DETAILS_BY_ID_SUCCESS,
    payload: {
      movie
    }
  };
};

export const getMovieDetailsByIdFailure = () => {
  return {
    type: GET_MOVIE_DETAILS_BY_ID_FAILURE
  };
};

export const setSearchFilter = searchBy => {
  return {
    type: SET_SEARCH_FILTER,
    payload: {
      searchBy
    }
  };
};

export const setSortFilter = sortBy => {
  return {
    type: SET_SORT_FILTER,
    payload: {
      sortBy
    }
  };
};

export const setSearchValue = searchValue => {
  return {
    type: SET_SEARCH_VALUE,
    payload: {
      searchValue
    }
  };
};
