import React, { useState } from "react";
import { FcLike } from 'react-icons/fc';
import styled from "styled-components";

const LikeWrapper = styled.div`
  padding: 15px 15px;
  border-bottom: 1px solid rgba(0,0,0, 0.2);
  position: relative;
  display: flex;
  align-items: center;
`;

interface LikeSvgProps {
  selectlike: boolean;
}

const LikeSvg = styled.div<LikeSvgProps>`
  cursor: pointer;

  svg {
    font-size: 30px;
    margin-right: 20px;
    
    path {
      fill: ${props => props.selectlike ? 'red' : 'black'};
    }
  }

  span {
    pointer-events: none;
    user-select: none;  
    position: absolute;
    top: 25px;
    left: 60px;
    line-height: 16px;
  }
`;

export const Like: React.FC = () => {
  const [selectLike, setSelectLike] = useState(false);
  const [scoreLike, setScoreLike] = useState(0);

  const handleLike = () => {
    setSelectLike(!selectLike);
    selectLike ? setScoreLike(scoreLike - 1) : setScoreLike(scoreLike + 1)
  }

  return (
    <LikeWrapper >
      <LikeSvg selectlike={selectLike} onClick={handleLike}>
        <FcLike /><span>{scoreLike}</span>
      </LikeSvg>
    </LikeWrapper>
  );
};
