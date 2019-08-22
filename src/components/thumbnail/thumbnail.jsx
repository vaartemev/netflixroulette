import React from 'react';
import PropTypes from 'prop-types';

import './thumbnail.scss';

export const Thumbnail = ({ src, className, handleOnClick }) => {
  return <img src={src} alt="" className={className} onClick={handleOnClick} />;
};

Thumbnail.propTypes = {
  src: PropTypes.string.isRequired,
  className: PropTypes.string.isRequired,
};
