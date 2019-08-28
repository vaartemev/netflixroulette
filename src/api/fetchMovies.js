import 'regenerator-runtime/runtime';
import axios from 'axios';
import { stringify } from 'query-string';

export const fetchMovies = async params => {
  const movies = await axios.get(`?${stringify(params)}`).then(response => {
    return response.data;
  });
  return movies;
};
