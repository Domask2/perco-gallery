import React, { useState } from "react";

import { UnsplashImage } from "./UnsplashImage";
import { Modal } from "./Modal";
import { ModalContent } from "./ModalContent";

import { ImageProps, ImagesProps } from '../types/types';
import styled from "styled-components";

const GalleryWrapper = styled.div`
  max-width: 70rem;
  margin: 4rem auto;
  display: grid;
  grid-gap: 1em;
  grid-template-columns: repeat(auto-fit, minmax(250px, 1fr));
  grid-auto-rows: 300px;
`;

interface GalleryProps {
  images: ImagesProps[];
}

export const Gallery: React.FC<GalleryProps> = ({ images }) => {
  const [active, setActive] = useState(false);
  const [image, setImange] = useState<ImageProps>();

  const getImage = (url: string, alt: string) => {
    setImange({ url, alt });
    setActive(true);
  }

  return (
    <GalleryWrapper>
      {images.length > 0 &&
        images.map((image) => (
          <UnsplashImage
            key={image.id}
            handleClick={getImage}
            url={image.urls.thumb}
            index={image.id}
            alt={image.user.instagram_username}
          />
        ))}

      <Modal active={active} setActive={setActive}>
        {
          image && <ModalContent url={image.url} alt={image.alt} />
        }
      </Modal>
    </GalleryWrapper>
  );
};
