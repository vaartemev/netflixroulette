import React from 'react';
import { withRouter } from 'react-router-dom';
import { useSelector } from 'react-redux';
import { setSortFilter } from '../../actions';
import { ButtonType } from '../../components';
import { RadioButton } from '../radioButton';
import './resultInfo.scss';

const sortBy = [
  { key: 'release_date', title: 'release date' },
  { key: 'rating', title: 'rating' },
];

export const ResultInfo = withRouter(({ match }) => {
  const { foundedMovies, genre } = useSelector(state => ({
    foundedMovies: state.movie.get('movies'),
    genre: state.movie.get('searchQuery'),
  }));

  return (
    <nav className="additional">
      {match.params.id ? (
        <span className="founded">Movies by {genre} genre</span>
      ) : (
        <>
          <span className="founded">{foundedMovies.length} movies founded</span>
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
});
