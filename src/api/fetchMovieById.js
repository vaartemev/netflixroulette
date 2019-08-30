import 'regenerator-runtime/runtime';
import gql from 'graphql-tag';
import { client } from '../client';

const fetchMovieByIdQuery = gql`
  query($id: String!) {
    movie(id: $id) @rest(type: "Movie", path: "/{args.id}") {
      id
      title
      release_date
      tagline
      poster_path
      overview
      genres
      runtime
      vote_average
    }
  }
`;

export const fetchMovieById = async id => {
  const movie = await client.query({
    query: fetchMovieByIdQuery,
    variables: { id: String(id) },
  });

  return movie.data.movie;
};
