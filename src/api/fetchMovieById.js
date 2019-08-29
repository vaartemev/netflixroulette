import 'regenerator-runtime/runtime';
import axios from 'axios';

export const fetchMovieById = async params => {
  const res = await axios.get(`/${params}`);
  const movie = await res.data;
  return movie;
};
