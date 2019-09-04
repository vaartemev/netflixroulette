import 'regenerator-runtime/runtime';
import gql from 'graphql-tag';
import { client } from '../client';

const stringify = require('query-string');

const fetchMoviesQuery = gql`
  query($searchQuery: String!) {
    movies(searchQuery: $searchQuery)
      @rest(type: "Movies", path: "/?{args.searchQuery}") {
      data
    }
  }
`;

export const fetchMovies = async (params: object) => {
  const searchQuery = `${stringify(params)}`;
  console.log(searchQuery);
  const movies = await client.query({
    query: fetchMoviesQuery,
    variables: { searchQuery },
  });

  return movies.data.movies;
};
