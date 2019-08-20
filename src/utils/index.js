import axios from 'axios';
import { stringify } from 'query-string';
import { baseUrl } from '../constants';

export const fetchMovies = async params => {
  const movies = await axios
    .get(`${baseUrl}?${stringify(params)}`)
    .then(response => {
      return response.data;
    })
    .catch(error => console.error);
  return movies;
};

export const fetchMovieById = async params => {
  const movie = await axios
    .get(`${baseUrl}/${params}`)
    .then(response => {
      return response.data;
    })
    .catch(error => console.error);
  return movie;
};
