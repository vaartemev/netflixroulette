import 'regenerator-runtime/runtime';
import { stringify } from 'query-string';
import gql from 'graphql-tag';
import { client } from '../client';

const fetchMoviesQuery = gql`
  query($searchQuery: String!) {
    movies(searchQuery: $searchQuery)
      @rest(type: "Movies", path: "/?{args.searchQuery}") {
      data
    }
  }
`;

export const fetchMovies = async params => {
  const searchQuery = `${stringify(params)}`;

  const movies = await client.query({
    query: fetchMoviesQuery,
    variables: { searchQuery },
  });

  return movies.data.movies;
};
