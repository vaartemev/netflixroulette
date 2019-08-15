import { put, call, all, takeEvery } from 'redux-saga/effects';
import { GET_MOVIES, GET_MOVIE_DETAILS_BY_ID } from '../constants';
import { getFilms } from '../services';
import { getMoviesSuccess, getMoviesFailure } from '../actions';

function* getMovies() {
  try {
    const movies = yield call(getFilms, action);
    yield put(getMoviesSuccess(movies));
  } catch (err) {
    yield put(getMoviesFailure());
  }
}

export function* watchGetMovies() {
  yield takeEvery(GET_MOVIES, getMovies);
}

function* getMovieDetailsById(action) {
  try {
    const movie = yield call(getFilms, action);
    yield put(getMovieDetailsByIdSuccess(movie));
  } catch (err) {
    yield put(getMovieDetailsByIdFailure());
  }
}

export function* watchGetMovieById() {
  yield takeEvery(GET_MOVIE_DETAILS_BY_ID, getMovieDetailsById);
}

export function* rootSaga() {
  yield all([watchGetMovies(), watchGetMovieById()]);
}
