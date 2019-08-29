import axios from 'axios';

export function configureAxios() {
  axios.defaults.baseURL = 'http://react-cdp-api.herokuapp.com/movies';
  axios.interceptors.response.use(response => response, console.log);
}
