import { all } from 'redux-saga/effects';
import { watchFetchMovieById } from './fetchMovieById';

export function* rootSaga() {
  yield all([watchFetchMovieById()]);
}
