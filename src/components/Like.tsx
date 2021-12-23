import React, { useState } from "react";
import styled from "styled-components";
import { FcLike } from 'react-icons/fc';

interface LikeWrapperProps {
  selectLike: boolean;
}

const LikeWrapper = styled.div<LikeWrapperProps>`
  padding: 15px 15px;
  border-bottom: 1px solid rgba(0,0,0, 0.2);
  position: relative;
  display: flex;
  align-items: center;

  div {
    cursor: pointer;
  }

  svg {
    font-size: 30px;
    margin-right: 20px;
    
    path {
      fill: ${props => props.selectLike ? 'red' : 'black'};
    }
  }

  span {
    position: absolute;
    top: 25px;
    left: 60px;
    line-height: 16px;
  }
`;

export const Like: React.FC = () => {
  const [selectLike, setSelectLike] = useState<boolean>(false);
  const [scoreLike, setScoreLike] = useState<number>(0);

  const handleLike = () => {
    setSelectLike(!selectLike);
    selectLike ?  setScoreLike(scoreLike - 1) :  setScoreLike(scoreLike + 1)
  }

  return (
    <LikeWrapper selectLike={selectLike}>
      <div onClick={handleLike}>
        <FcLike  /> <span>{scoreLike}</span> 
      </div>
    </LikeWrapper>
  );
};
