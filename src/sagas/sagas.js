import { put, call, all, takeEvery } from 'redux-saga/effects';
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

function* getMoviesBySearch({ payload }) {
  try {
    const response = yield call(fetchMovies, payload);
    const movies = response.data;
    yield put(getMoviesBySearchQuerySuccess(movies));
  } catch (err) {
    yield put(getMoviesBySearchQueryFailure());
  }
}

function* watchGetQuery() {
  yield takeEvery(GET_MOVIES_BY_SEARCH_QUERY, getMoviesBySearch);
}

function* getMovieDetails({ payload: { id } }) {
  try {
    const movie = yield call(fetchMovieById, id);
    const genre = movie.genres[0];
    yield put(getMovieDetailsByIdSuccess(movie));
    yield put(getMoviesBySearchQuery(genre, 'genres'));
  } catch (err) {
    yield put(getMovieDetailsByIdFailure());
  }
}

function* watchGetMovieById() {
  yield takeEvery(GET_MOVIE_DETAILS_BY_ID, getMovieDetails);
}

export function* rootSaga() {
  yield all([watchGetMovieById(), watchGetQuery()]);
}
