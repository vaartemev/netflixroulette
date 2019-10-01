import { put, call, all, takeEvery } from 'redux-saga/effects';
import {
  GET_MOVIE_DETAILS_BY_ID,
  GET_MOVIES_BY_SEARCH_QUERY,
  getMoviesBySearchQuerySuccess,
  getMoviesBySearchQueryFailure,
  getMovieDetailsByIdSuccess,
  getMovieDetailsByIdFailure,
  getMoviesBySearchQuery,
  SearchParams,
} from '../actions';
import { fetchMovieById, fetchMovies } from '../api';

interface Payload {
  payload: {
    id: string;
  };
}

interface Action {
  payload: SearchParams;
}

export function* getMoviesBySearch(action: Action) {
  try {
    const movies = yield call(fetchMovies, action.payload);
    yield put(getMoviesBySearchQuerySuccess(movies.data));
  } catch (err) {
    yield put(getMoviesBySearchQueryFailure());
  }
}

export function* watchGetQuery() {
  yield takeEvery(GET_MOVIES_BY_SEARCH_QUERY as any, getMoviesBySearch);
}

export function* getMovieDetails({ payload: { id } }: Payload) {
  try {
    const movie = yield call(fetchMovieById, id);
    const genre = movie.genres[0];
    yield put(getMovieDetailsByIdSuccess(movie));
    yield put(getMoviesBySearchQuery(genre, 'genres'));
  } catch (err) {
    yield put(getMovieDetailsByIdFailure());
  }
}

export function* watchGetMovieById() {
  yield takeEvery(GET_MOVIE_DETAILS_BY_ID as any, getMovieDetails);
}

export function* rootSaga() {
  yield all([watchGetMovieById(), watchGetQuery()]);
}
