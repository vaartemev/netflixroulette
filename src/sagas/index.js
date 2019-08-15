import { put, call, all, takeEvery } from 'redux-saga/effects';
import axios from 'axios';
import { baseUrl, GET_MOVIES } from '../constants';
import { getMoviesSuccess, getMoviesFailure } from '../actions';

const fetchMovies = () => {
  return axios({
    method: 'get',
    url: baseUrl
  }).then(res => {
    return res.data.data;
  });
};

function* getMovies() {
  try {
    const movies = yield call(fetchMovies);
    yield put(getMoviesSuccess(movies));
  } catch (err) {
    yield put(getMoviesFailure());
  }
}

function* watchGetMovies() {
  yield takeEvery(GET_MOVIES, getMovies);
}

export function* rootSaga() {
  yield all([watchGetMovies()]);
}
