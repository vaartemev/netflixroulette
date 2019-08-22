import { put, call, takeEvery } from 'redux-saga/effects';
import { runSaga } from 'redux-saga';
import {
  getMoviesBySearch,
  watchGetQuery,
  getMovieDetails,
  watchGetMovieById,
} from './sagas';
import {
  getMoviesBySearchQuerySuccess,
  getMoviesBySearchQueryFailure,
  getMovieDetailsByIdSuccess,
  getMovieDetailsByIdFailure,
  getMoviesBySearchQuery,
} from '../actions';
import * as api from '../utils';

async function recordSaga(saga, initialAction) {
  const dispatched = [];

  await runSaga(
    {
      dispatch: action => dispatched.push(action),
    },
    saga,
    initialAction,
  ).done;

  return dispatched;
}

test('Should load movies and put them in case of success', async () => {
  const initialAction = { search: 'he' };
  const mockedData = { data: 'some value' };
  api.fetchMovies = jest.fn(() => Promise.resolve(mockedData));

  const dispatched = await recordSaga(getMoviesBySearch, initialAction);
  expect(api.fetchMovies.mock.calls.length).toBe(1);
  expect(dispatched).toContainEqual(
    getMoviesBySearchQuerySuccess(mockedData.data),
  );
});

test('Should handle error in case of fail', async () => {
  const initialAction = { search: 'he' };
  api.fetchMovies = jest.fn(() => Promise.reject());

  const dispatched = await recordSaga(getMoviesBySearch, initialAction);
  expect(api.fetchMovies.mock.calls.length).toBe(1);
  expect(dispatched).toContainEqual(getMoviesBySearchQueryFailure());
});

test('Should load movie details and put them to case of success', async () => {
  const initialAction = { payload: { id: 5 } };
  const mockedData = { genres: ['some', 'value'] };

  api.fetchMovieById = jest.fn(() => Promise.resolve(mockedData));

  const dispatched = await recordSaga(getMovieDetails, initialAction);
  expect(api.fetchMovieById.mock.calls.length).toBe(1);
  expect(dispatched).toContainEqual(getMovieDetailsByIdSuccess(mockedData));
});

test('Should handle error in case of fail', async () => {
  const initialAction = { payload: { id: 5 } };
  api.fetchMovieById = jest.fn(() => Promise.reject());

  const dispatched = await recordSaga(getMovieDetails, initialAction);
  expect(api.fetchMovieById.mock.calls.length).toBe(1);
  expect(dispatched).toContainEqual(getMovieDetailsByIdFailure());
});
