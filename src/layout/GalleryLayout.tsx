import React, { useState, useEffect } from 'react';

import { GlobalStyle } from '../styles/Globals.style';
import { ThemeProvider } from "styled-components";
import { theme } from '../styles/theme';

import { Header } from '../components/Header';
import { Gallery } from '../components/Gallery';

import { fetchImages } from '../utils/fetchImages';
import { ImagesProps } from '../types/types';

export const GalleryLayout: React.FC = () => {
  const [images, setImages] = useState<ImagesProps[]>([]);

  useEffect(() => {
    fetchImages()
      .then(res => setImages(res))
      .catch(err => console.error(err))

  }, [])

  return (
    <>
      <ThemeProvider theme={theme}>
        <GlobalStyle />
        <Header />
        <Gallery images={images} />
      </ThemeProvider>

    </>
  );
}

