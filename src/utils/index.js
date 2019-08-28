import 'regenerator-runtime/runtime';
import axios from 'axios';
import { stringify } from 'query-string';
import gql from 'graphql-tag';
import { client } from '../client';

const fetchMovieByIdQuery = gql`
  query($id: String!) {
    movie(id: $id) @rest(type: "Movie", path: "/{args.id}") {
      id
      title
      release_date
      poster_path
      overview
      genres
      runtime
    }
  }
`;

// const fetchMoviesQuery = gql`
//   query($id: String!) {
//     movie(id: $id) @rest(type: "Movie", path: "/{args.id}") {
//       id
//       title
//       release_date
//       poster_path
//       overview
//       genres
//       runtime
//     }
//   }
// `;

// export const fetchMovies = async params => {
//   const searchParams = `?${stringify(params)}`;
// };

export const fetchMovieById = async params => {
  const movie = await client.query({
    query: fetchMovieByIdQuery,
    variables: { id: String(params) },
  });
  console.log(movie.data.movie);
  return movie.data.movie;
};
