import { put, call, all, takeEvery } from 'redux-saga/effects';
import {
  GET_MOVIE_DETAILS_BY_ID,
  GET_MOVIES_BY_SEARCH_QUERY,
  GET_MOVIES_BY_SAME_GENRE
} from '../constants';
import { getFilms } from '../utils';
import {
  getMoviesBySearchQuerySuccess,
  getMoviesBySearchQueryFailure,
  getMovieDetailsByIdSuccess,
  getMovieDetailsByIdFailure,
  getMoviesBySearchQuery
} from '../actions';

function* getMoviesBySearch(action) {
  try {
    const response = yield call(getFilms, action);
    const movies = response.data;
    yield put(getMoviesBySearchQuerySuccess(movies));
  } catch (err) {
    yield put(getMoviesBySearchQueryFailure());
  }
}

function* watchGetQuery() {
  yield takeEvery(GET_MOVIES_BY_SEARCH_QUERY, getMoviesBySearch);
}

function* getMovieDetails(action) {
  try {
    const movie = yield call(getFilms, action);
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
