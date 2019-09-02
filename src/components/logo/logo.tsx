import React from 'react';
import './logo.scss';

interface LogoProps {
  text: string;
}

export const Logo: React.FunctionComponent<LogoProps> = ({
  text,
}: LogoProps): JSX.Element => {
  return <div className="logo">{text}</div>;
};
