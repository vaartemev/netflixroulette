import React from 'react';
import PropTypes from 'prop-types';
import './searchButton.scss';

export const SearchButton = ({ classNames }) => {
  return <div className={classNames}>Search</div>;
};

SearchButton.propTypes = {
  classNames: PropTypes.string
};
