import React from 'react';

import './thumbnail.scss';

interface ThumbnailProps {
  src: string;
  className: string;
}

export const Thumbnail = ({ src, className }: ThumbnailProps): JSX.Element => {
  return <img src={src} alt="" className={className} />;
};
