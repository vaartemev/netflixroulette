import React from 'react';
import { useSelector } from 'react-redux';
import PropTypes from 'prop-types';
import { setSortFilter } from '../../actions';
import { ButtonType } from '../../components/button/button';
import { RadioButton } from '../radioButton';
import './resultInfo.scss';

const sortBy = [
  { key: 'release_date', title: 'release date' },
  { key: 'rating', title: 'rating' }
];

export const ResultInfo = () => {
  const { foundedMovies, genres, movie } = useSelector(state => ({
    foundedMovies: state.movie.movies.length,
    genres: state.movie.movie.genres,
    movie: state.movie.movie
  }));
  return (
    <nav className="additional">
      {'genres' in movie ? (
        <>
          <span className="founded">Movies by {genres[0]} genre</span>
        </>
      ) : (
        <>
          <span className="founded">{foundedMovies} movies founded</span>
          <div className="sort">
            <span className="sort__title">Sort by</span>
            <RadioButton
              type={ButtonType.Sort}
              array={sortBy}
              actionType={setSortFilter}
            />
          </div>
        </>
      )}
    </nav>
  );
};

ResultInfo.propTypes = {
  foundedMovies: PropTypes.number,
  genre: PropTypes.string
};
