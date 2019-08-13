import React from 'react';
import PropTypes from 'prop-types';
import './resultInfo.scss';

export const ResultInfo = ({ foundedMovies }) => {
  return (
    <nav className="additional">
      <span className="founded">{foundedMovies} movies founded</span>
      <div className="sort">
        <span className="sort__title">Sort by</span>
        <a href="" className="sort__toggle sort__toggle-active sort__release">
          release date
        </a>
        <a href="" className="sort__toggle sort__rating">
          rating
        </a>
      </div>
    </nav>
  );
};

ResultInfo.propTypes = {
  foundedMovies: PropTypes.number.isRequired
};
