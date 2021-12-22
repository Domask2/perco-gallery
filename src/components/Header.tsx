import React from "react";
import styled from "styled-components";

const HeaderWrapper = styled.header`
  max-width: 70rem;
  margin: 2rem auto;
  text-align: center;
  display: flex;
  flex-direction: column;
  align-items: center;
`;

const H1 = styled.h1`
  margin-bottom: 2rem;
  text-transform: uppercase;
`;

const P = styled.p`
  padding: 0 5rem;
`;

export const Header: React.FC = () => {
  return (
    <HeaderWrapper>
      <H1>Галлерия Изображений</H1>
      <P>
        Небольшая галерея для тестового задания компании ПЭРКо. Изображения
        взяты с UnSplash. С помощью кнопки возможно включить бесконечный скролл.
      </P>
    </HeaderWrapper>
  );
};
