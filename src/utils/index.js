import axios from 'axios';
import {
	stringify
} from 'query-string';
import {
	GET_MOVIE_DETAILS_BY_ID
} from '../constants'
import {
	baseUrl
} from '../constants';

export const fetchMovies = ({
	type,
	payload
}) => {
	let url = baseUrl;
	switch (type) {
		case GET_MOVIE_DETAILS_BY_ID: {
			url = `${url}/${payload.id}`;
			break;
		}
		default:
			url += `?${stringify(payload)}`
			break
	}
	return axios({
		method: 'get',
		url: url
	}).then(response => {
		return response.data;
	});
};

export const getFilms = (action) => {
	try {
		return fetchMovies(action);
	} catch (err) {
		console.err(err);
	}
};