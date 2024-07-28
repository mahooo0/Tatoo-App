import React, { useState } from 'react';
import { useInView } from 'react-intersection-observer';

type LazyImageProps = {
  src: string;
  alt: string;
  placeholderSrc?: string;
  calss?: string;
};

const LazyImage: React.FC<LazyImageProps> = ({ src, alt, placeholderSrc,calss="" }) => {
  const [inViewRef, inView] = useInView({
    triggerOnce: true,
    threshold: 0.1,
  });

  const [loaded, setLoaded] = useState(false);

  return (
    <div ref={inViewRef} style={{ minHeight: '200px' }} className={calss}>
      {inView ? (
        <img
          src={src}
          alt={alt}
          onLoad={() => setLoaded(true)}
          style={{ display: loaded ? 'block' : 'none' }}
        />
      ) : (
        placeholderSrc && <img src={placeholderSrc} alt="placeholder" />
      )}
    </div>
  );
};

export default LazyImage;
