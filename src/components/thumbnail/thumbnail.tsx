import React from 'react';

import './thumbnail.scss';

interface Props {
  src: string;
  className: string;
}
export const Thumbnail = ({ src, className }: Props) => {
  return <img src={src} alt="" className={className} />;
};
