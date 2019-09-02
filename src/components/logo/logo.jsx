import React from 'react';
import Link from 'next/link';
import PropTypes from 'prop-types';
import { Button, ButtonType } from '../button';
import './logo.scss';

export const Logo = ({ text }) => {
  const ref = React.createRef();
  return (
    <Link href="/search">
      {/* <Button text={text} type={ButtonType.searchLink} ref={ref} /> */}
      <div className="logo">{text}</div>
    </Link>
  );
};

Logo.propTypes = {
  text: PropTypes.string,
};
