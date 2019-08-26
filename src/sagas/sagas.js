import { put, call, all, takeLatest, takeEvery } from 'redux-saga/effects';
import {
  GET_MOVIE_DETAILS_BY_ID,
  GET_MOVIES_BY_SEARCH_QUERY,
} from '../constants';
import { fetchMovieById, fetchMovies } from '../utils';
import {
  getMoviesBySearchQuerySuccess,
  getMoviesBySearchQueryFailure,
  getMovieDetailsByIdSuccess,
  getMovieDetailsByIdFailure,
  getMoviesBySearchQuery,
} from '../actions';

export function* getMoviesBySearch(action) {
  try {
    const movies = yield call(fetchMovies, action.payload);
    yield put(getMoviesBySearchQuerySuccess(movies.data));
  } catch (err) {
    yield put(getMoviesBySearchQueryFailure());
  }
}

export function* watchGetQuery() {
  yield takeEvery(GET_MOVIES_BY_SEARCH_QUERY, getMoviesBySearch);
}

export function* getMovieDetails({ payload: { id } }) {
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
  yield takeLatest(GET_MOVIE_DETAILS_BY_ID, getMovieDetails);
}

export function* rootSaga() {
  yield all([watchGetMovieById(), watchGetQuery()]);
}
