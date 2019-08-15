import React from 'react';
import PropTypes from 'prop-types';
import { ButtonType } from '../button/button';
import { RadioButton } from '../../containers/radioButton';
import './resultInfo.scss';

const sortBy = [{ key: 'release date' }, { key: 'rating' }];

export const ResultInfo = ({ foundedMovies }) => {
  return (
    <nav className="additional">
      <span className="founded">{foundedMovies}
{' '}
movies founded
</span>
      <div className="sort">
        <span className="sort__title">Sort by</span>
        <RadioButton type={ButtonType.Sort} array={sortBy} />
      </div>
    </nav>
  );
};

ResultInfo.propTypes = {
  foundedMovies: PropTypes.number.isRequired
};
