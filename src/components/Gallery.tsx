import React, { useState } from "react";
import { UnsplashImage, Img } from "./UnsplashImage";
import { ImagesProps } from "../App";
import { Modal } from "./Modal";

import styled from "styled-components";

interface GalleryProps {
  images: ImagesProps[];
}

interface ImageProps {
  url: string;
  alt: string;
}

const GalleryWrapper = styled.div`
  max-width: 70rem;
  margin: 4rem auto;
  display: grid;
  grid-gap: 1em;
  grid-template-columns: repeat(auto-fit, minmax(250px, 1fr));
  grid-auto-rows: 300px;
`;

export const Gallery: React.FC<GalleryProps> = ({ images }) => {
  const [active, setActive] = useState<boolean>(false);
  const [image, setImange] = useState<ImageProps>();
  
  const getImage = (url:string, alt:string) => {
    setImange({url, alt});
    setActive(true);
  }

  return (
    <GalleryWrapper>
      {images.length > 0 &&
        images.map((image) => (
          <UnsplashImage
            key={image.id}
            handleClick={getImage}
            url={image.urls.small}
            index={image.id}
            alt={image.user.instagram_username}
          />
        ))}

        <Modal active={active} setActive={setActive}>
          {
            image && (
              <div style={{flexDirection:'column'}}>
                <Img src={image.url} alt={image.alt} />
                <p>поставлю сердечко и буду рад</p>
                <input type="text" placeholder="оставь отзыв" />
                <p>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Voluptas, eius!</p>
                <p>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Voluptas, eius!</p>
                <p>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Voluptas, eius!</p>
                <p>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Voluptas, eius!</p>
                <p>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Voluptas, eius!</p>
                <p>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Voluptas, eius!</p>
              </div>
            
            )
          }
        </Modal>
    </GalleryWrapper>
  );
};
