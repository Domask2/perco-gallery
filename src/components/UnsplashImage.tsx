import React from "react";
import styled from "styled-components";

export const Img = styled.img`
  width: 100%;
  height: 100%;
  object-fit: cover;
`;

interface UnsplashImageProps {
  url: string;
  index: number;
  alt: string;
  handleClick: (url: string, alt: string) => void;
}

export const UnsplashImage: React.FC<UnsplashImageProps> = ({
  url,
  index,
  alt,
  handleClick,
}) => {
  return (
    <Img
      onClick={() => { handleClick(url, alt) }}
      key={index}
      src={url}
      alt={alt}
    />
  );
};
