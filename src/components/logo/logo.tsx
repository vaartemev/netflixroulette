import React from 'react';
import './logo.scss';

interface LogoProps {
  text: string;
}

export const Logo: React.FC<LogoProps> = ({
  text,
}) => {
  return <div className="logo">{text}</div>;
};
