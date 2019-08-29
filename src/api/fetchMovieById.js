import 'regenerator-runtime/runtime';
import axios from 'axios';

export const fetchMovieById = async id => {
  const res = await axios.get(`/${id}`);
  const movie = await res.data;
  return movie;
};
