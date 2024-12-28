import React, { useState, useEffect, useRef } from 'react';
import './image-loader.css'

interface ImageProps {
  src: string;
  alt?: string;
  width?: string;
  height?: string;
}

const ImageLoader: React.FC<ImageProps> = ({ src, alt = '', width = '100%', height = 'auto' }) => {
  const [isLoading, setIsLoading] = useState(true);
  const imageRef = useRef<HTMLImageElement | null>(null);

  const onImageLoaded = () => {
    setIsLoading(false);
  };

  const onImageError = () => {
    setIsLoading(false);
    console.error('Image failed to load:', src);
  };

  useEffect(() => {
    if (imageRef.current) {
      imageRef.current.src = src;
      imageRef.current.onload = onImageLoaded;
      imageRef.current.onerror = onImageError;
    }
  }, [src]);

  return (
    <div className="image-container" style={{ width, height }}>
      {isLoading && (
        <div className="loading-overlay">
          <div className="loading-spinner"></div>
        </div>
      )}
      <img
        ref={imageRef}
        src={src}
        alt={alt}
        style={{ opacity: isLoading ? 0 : 1 }}
        onLoad={onImageLoaded}
        onError={onImageError}
      />
    </div>
  );
};

export default ImageLoader;