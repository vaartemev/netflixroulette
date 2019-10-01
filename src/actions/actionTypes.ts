export const GET_MOVIES_BY_SEARCH_QUERY = 'GET_MOVIES_BY_SEARCH_QUERY';
export const GET_MOVIES_BY_SEARCH_QUERY_SUCCESS =
  'GET_MOVIES_BY_SEARCH_QUERY_SUCCESS';
export const GET_MOVIES_BY_SEARCH_QUERY_FAILURE =
  'GET_MOVIES_BY_SEARCH_QUERY_FAILURE';
export const SET_SEARCH_VALUE = 'SET_SEARCH_VALUE';
export const GET_MOVIE_DETAILS_BY_ID = 'GET_MOVIE_DETAILS_BY_ID';
export const GET_MOVIE_DETAILS_BY_ID_SUCCESS =
  'GET_MOVIE_DETAILS_BY_ID_SUCCESS';
export const GET_MOVIE_DETAILS_BY_ID_FAILURE =
  'GET_MOVIE_DETAILS_BY_ID_FAILURE';
export const SET_SEARCH_FILTER = 'SET_SEARCH_FILTER';
export const SET_SORT_FILTER = 'SET_SORT_FILTER';

// ---------- Get movies by search query

export interface SearchParams {
  search: string | string[];
  searchBy: string;
  sortBy: string;
  sortOrder: string;
}

interface GetMoviesBySearchAction {
  type: typeof GET_MOVIES_BY_SEARCH_QUERY;
  payload: SearchParams;
}

interface GetMoviesBySearchSuccessAction {
  type: typeof GET_MOVIES_BY_SEARCH_QUERY_SUCCESS;
  payload: {
    movies: [];
  };
}

interface GetMoviesBySearchFailureAction {
  type: typeof GET_MOVIES_BY_SEARCH_QUERY_FAILURE;
}

export type GetMoviesBySearchTypes =
  | GetMoviesBySearchAction
  | GetMoviesBySearchSuccessAction
  | GetMoviesBySearchFailureAction;

// -------------- Get movie details

interface GetMovieDetailsAction {
  type: typeof GET_MOVIE_DETAILS_BY_ID;
  payload: {
    id: number;
  };
}

interface GetMovieDetailsSuccessAction {
  type: typeof GET_MOVIE_DETAILS_BY_ID_SUCCESS;
  payload: {
    movie: {};
  };
}

interface GetMovieDetailsFailureAction {
  type: typeof GET_MOVIE_DETAILS_BY_ID_FAILURE;
}

export type GetMovieDetailsTypes =
  | GetMovieDetailsAction
  | GetMovieDetailsSuccessAction
  | GetMovieDetailsFailureAction;

// ----------- setters --------------------------------

export interface SetSearchFilterAction {
  type: typeof SET_SEARCH_FILTER;
  payload: {
    searchBy: string;
  };
}

export interface SetSortFilterAction {
  type: typeof SET_SORT_FILTER;
  payload: {
    sortBy: string;
  };
}

export interface SetSearchValueAction {
  type: typeof SET_SEARCH_VALUE;
  payload: {
    searchValue: string | string[];
  };
}
