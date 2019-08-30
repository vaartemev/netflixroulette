import { combineReducers } from 'redux-immutable';
import { movieReducer } from './movieReducer';

export const rootReducer = combineReducers({
  movie: movieReducer,
});
