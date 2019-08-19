import axios from 'axios';
import { stringify } from 'query-string';
import { baseUrl } from '../constants';

export const fetchMovies = async args => {
  const movies = await axios
    .get(`${baseUrl}?${stringify(args)}`)
    .then(response => {
      return response.data;
    });
  return movies;
};

export const fetchMovieById = async args => {
  const movie = await axios.get(`${baseUrl}/${args}`).then(response => {
    return response.data;
  });
  return movie;
};
