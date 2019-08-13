import React from 'react';
import PropTypes from 'prop-types';
import './button.scss';

export const Button = ({ classNames }) => {
  return <div className={classNames}>Search</div>;
};

Button.propTypes = {
  classNames: PropTypes.string
};
