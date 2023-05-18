import { useEffect, useState } from 'react';
import NextImage from 'next/image';
import { twMerge } from 'tailwind-merge';
import clsx from 'clsx';

const shimmer = (w: string, h: string) => `
<svg width="${w}" height="${h}" version="1.1" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink">
  <defs>
    <linearGradient id="g">
      <stop stop-color="#fff" offset="20%" />
      <stop stop-color="#eee" offset="50%" />
      <stop stop-color="#fff" offset="70%" />
    </linearGradient>
  </defs>
  <rect width="${w}" height="${h}" fill="#fff" />
  <rect id="r" width="${w}" height="${h}" fill="url(#g)" />
  <animate xlink:href="#r" attributeName="x" from="-${w}" to="${w}" dur="1s" repeatCount="indefinite"  />
</svg>`;

const toBase64 = (str: string) =>
  typeof window === 'undefined'
    ? Buffer.from(str).toString('base64')
    : window.btoa(str);

const Image = ({
  width,
  height,
  containerStyle,
  src,
  alt = '',
  onClick,
}: {
  onClick?: () => void;
  width: string;
  height: string;
  containerStyle: string;
  src: string;
  alt: string;
}) => {
  const [imageSrc, setImageSrc] = useState('');

  useEffect(() => {
    const isValidSrc = /^(\/|http\:\/\/|https\:\/\/)/.test(src);
    setImageSrc(isValidSrc ? src : '');
  }, [src]);

  return (
    <div
      className={twMerge(clsx('relative flex-shrink-0', containerStyle))}
    >
      <NextImage
        layout="fill"
        objectFit="cover"
        placeholder="blur"
        blurDataURL={`data:image/svg+xml;base64,${toBase64(
          shimmer(width, height)
        )}`}
        src={imageSrc}
        onError={() => setImageSrc('/images/fallback_image.jpg')}
        alt={alt}
        onClick={onClick}
      />
    </div>
  );
};

export default Image;
