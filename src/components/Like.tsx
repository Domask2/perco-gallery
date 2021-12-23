import React from "react";
import styled from "styled-components";
import { FcLike } from 'react-icons/fc';

const LikeWrapper = styled.div`
  
`;

export const Like: React.FC = () => {
  return (
    <LikeWrapper>
      <FcLike/>
      <p>поставлю сердечко и буду рад</p>
    </LikeWrapper>
  );
};
