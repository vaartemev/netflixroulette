import React, { useState, useEffect } from 'react';
import { MovieItem } from '../movieItem/movieItem';
import './resultBody.scss';

export const ResultBody = () => {
  const [movies, setMovies] = useState([]);

  useEffect(() => {
    fetch('http://react-cdp-api.herokuapp.com/movies')
      .then(res => res.json())
      .then(json => {
        const fetchedMovies = json.data.map(
          ({ title, poster_path, release_date, genres, id }) => (
            <MovieItem
              key={id}
              title={title}
              src={poster_path}
              year={release_date}
              genre={genres}
            />
          )
        );
        setMovies(fetchedMovies);
      });
  }, setMovies);
  return (
    <div className="content">
	  <div className="films-list">
	  {movies}
	  </div>
    </div>
  );
};