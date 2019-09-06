import React from 'react';
import './logo.scss';

interface Props {
  text: string;
}

export const Logo = ({ text }: Props) => {
  return <div className="logo">{text}</div>;
};
