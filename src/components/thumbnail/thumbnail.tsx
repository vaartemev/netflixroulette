import React from 'react';

import './thumbnail.scss';

interface ThumbnailProps {
  src: string;
  className: string;
}

export const Thumbnail: React.FC<ThumbnailProps> = ({ src, className }) => {
  return <img src={src} alt="" className={className} />;
};
