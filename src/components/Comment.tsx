import React, { useState } from "react";

import { CommentItem } from "./CommentItem";
import { CommentInput } from "./CommetInput";

import { CommentValue } from "../types/types";
import styled from "styled-components";

const CommentWrapper = styled.div`
  display: flex;
  flex-direction: column;
  width: 335px;
  height: 540px;
  overflow: auto;
  
  @media(max-width: ${({ theme }) => theme.width.medium}) {
    width: 230px; 
  }
`;

const CommentContainer = styled.div`
  width: 100%;
  overflow: auto;
`;

const CommentContainerText = styled.p`
  text-align: center;
  padding: 10px;
  user-select: none;
`;

export const Comment: React.FC = () => {
  const [value, setValue] = useState<CommentValue>({ value: '', id: '' });
  const [arrayComments, setArrayComments] = useState<CommentValue[]>([]);

  const handlerDelete = (id: string) => {
    const newArray = arrayComments.filter((item) => item.id !== id);
    setArrayComments(newArray);
  }

  return (
    <CommentWrapper>
      <CommentContainer>
        {
          arrayComments.length > 0 && (
            arrayComments.map((arr, index) => {
              return <CommentItem key={index} value={arr.value} id={arr.id} handlerDelete={handlerDelete} />
            })
          )
        }

        {
          arrayComments.length === 0 && <CommentContainerText>пока комментариев нет...</CommentContainerText>
        }
      </CommentContainer>

      <CommentInput
        value={value}
        setValue={setValue}
        arrayComments={arrayComments}
        setArrayComments={setArrayComments}
      />
    </CommentWrapper>
  );
};
