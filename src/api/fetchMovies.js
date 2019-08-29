import 'regenerator-runtime/runtime';
import axios from 'axios';
import { stringify } from 'query-string';

export const fetchMovies = async params => {
  const res = await axios.get(`?${stringify(params)}`);
  const movies = await res.data;
  return movies;
};
