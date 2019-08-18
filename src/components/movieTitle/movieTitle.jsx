import React from 'react';
import PropTypes from 'prop-types';

import './movieTitle.scss';

export const MovieTitle = ({ className, title }) => {
  return <h2 className={className}>{title}</h2>;
};

MovieTitle.propTypes = {
  className: PropTypes.string,
  title: PropTypes.string.isRequired
};
