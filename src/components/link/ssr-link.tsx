import React from 'react';
import { useRouter } from 'next/router';

interface Props {
  children: React.ReactChild;
  href: string;
}

export const SSRLink = ({ children, href }: Props) => {
  const router = useRouter();

  const handleClick = (e: Event): void => {
    e.preventDefault();
    router.push(href);
  };

  return (
    <a href={href} onClick={() => handleClick}>
      {children}
    </a>
  );
};
