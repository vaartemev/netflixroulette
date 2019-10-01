import React from 'react';

import { Link } from 'react-router-dom';

interface Props {
  children: React.ReactNode;
  href: string;
}

export const CSRLink = ({ children, href }: Props) => {
  console.log(href);
  return <Link to={href}>{children}</Link>;
};
