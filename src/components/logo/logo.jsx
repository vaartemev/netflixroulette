import React from 'react';
import PropTypes from 'prop-types';
import './logo.scss';

export const Logo = ({ text }) => {
  return <div className="logo">{text}</div>;
};

Logo.propTypes = {
  text: PropTypes.string,
};
