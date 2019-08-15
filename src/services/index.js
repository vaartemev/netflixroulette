import axios from 'axios';
import { baseUrl } from '../constants';

export const fetchMovies = ({ type, payload }) => {
  let url = baseUrl;
  switch (type) {
    case GET_MOVIE_DETAILS_BY_ID: {
      url = `${baseUrl}${payload.id}`;
      break;
    }
    default:
      return url;
  }
  return axios(url).then(res => {
    return res.data.data;
  });
};

export const getFilms = action => {
  try {
    return fetchMovies(action);
  } catch (err) {
    console.err();
  }
};
