import React from 'react';
import { useSelector } from 'react-redux';
import { setSortFilter } from '../../actions';
import { ButtonType } from '../../components/button/button';
import { RadioButton } from '../radioButton';
import { MoviesByGenre } from '../../components/moviesByGenre/moviesByGenre';
import './resultInfo.scss';

const sortBy = [
  { key: 'release_date', title: 'release date' },
  { key: 'rating', title: 'rating' },
];

export const ResultInfo = ({ match }) => {
  const { foundedMovies, genre } = useSelector(state => ({
    genre: state.movie.searchQuery,
    foundedMovies: state.movie.movies.length,
  }));
  return (
    <nav className="additional">
      {match ? (
        <MoviesByGenre genre={genre} />
      ) : (
        <>
          <span className="founded">{foundedMovies} movies founded</span>
          <div className="sort">
            <span className="sort__title">Sort by</span>
            <RadioButton
              type={ButtonType.Sort}
              filters={sortBy}
              filter={setSortFilter}
            />
          </div>
        </>
      )}
    </nav>
  );
};
