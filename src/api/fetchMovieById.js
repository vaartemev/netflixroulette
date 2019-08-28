import 'regenerator-runtime/runtime';
import axios from 'axios';

export const fetchMovieById = async params => {
  const movie = await axios.get(`/${params}`).then(response => {
    return response.data;
  });
  return movie;
};
