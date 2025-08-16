import React from 'react';
import { LazyLoadImage } from 'react-lazy-load-image-component';
import 'react-lazy-load-image-component/src/effects/opacity.css';

const OptimizedImage = ({ src, alt, className, width, height }) => {
  return (
    <LazyLoadImage
      alt={alt || ''}
      effect="opacity"
      src={src}
      className={className}
      width={width}
      height={height}
      loading="lazy"
    />
  );
};

export default OptimizedImage;
