import React from 'react';
import {useSelector} from 'react-redux';
import PropTypes from 'prop-types';
import {setSortFilter} from '../../actions';
import { ButtonType } from '../button/button';
import { RadioButton } from '../../containers/radioButton';
import './resultInfo.scss';

const sortBy = [{ key: 'release_date', title: 'release date' }, { key: 'rating', title: 'rating' }];

export const ResultInfo = () => {
  const foundedMovies = useSelector(state => (state.movie.movies).length);
  return (
    <nav className="additional">
      <span className="founded">{foundedMovies} movies founded</span>
      <div className="sort">
        <span className="sort__title">Sort by</span>
        <RadioButton type={ButtonType.Sort} array={sortBy} actionType={setSortFilter}/>
      </div>
    </nav>
  );
};

ResultInfo.propTypes = {
  foundedMovies: PropTypes.number
};
