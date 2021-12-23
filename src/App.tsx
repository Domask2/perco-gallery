import React, { useState, useEffect } from 'react';
import { Header } from './components/Header';
import { Gallery } from './components/Gallery';
import { createGlobalStyle } from 'styled-components';
import { fetchImages } from './utils/fetchImages';

export interface ImagesProps {
  id: number;
  alt_description: string | null;
  width: number;
  height: number;
  urls: { full: string; raw: string; regular: string; small: string; thumb: string };
  color: string | null;
  user: {
    instagram_username: string;
    name: string;
  };
}

const GlobalStyle = createGlobalStyle`
  * {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
  }

  body {
    font-family: 'Montserrat', sans-serif;
  }
`;

export const App:React.FC = () => {
  const [images, setImages] = useState<ImagesProps[]>([]);

  useEffect(() => {
    fetchImages()
    .then(res => setImages(res))
    .catch(err => console.error(err))
    
  }, [])

  return (
    <div className="App">
      <GlobalStyle/>
      <Header/>
      <Gallery images={images}/>
    </div>
  );
}

