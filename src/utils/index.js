import 'regenerator-runtime/runtime';
import axios from 'axios';
import { stringify } from 'query-string';

const instance = axios.create({
  baseURL: 'http://react-cdp-api.herokuapp.com/movies',
});

export const fetchMovies = async params => {
  const movies = await instance
    .get(`?${stringify(params)}`)
    .then(response => {
      return response.data;
    })
    .catch(error => console.error(error));
  return movies;
};

export const fetchMovieById = async params => {
  const movie = await instance
    .get(`/${params}`)
    .then(response => {
      return response.data;
    })
    .catch(error => console.error(error));
  return movie;
};
