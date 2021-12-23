import React, { useState } from "react";
import { IoMdSend } from "react-icons/io";
import { CommentItem, CommentItemProps } from "./CommentItem";
import styled from "styled-components";

const CommentWrapper = styled.div`
  display: flex;
  flex-direction: column;
`;

const CommentContainer = styled.div`
  width: 100%;
  overflow: auto;
`;

const CommentContainerInputWrapper = styled.div`
  position: absolute;
  bottom: 0;
  display: flex;
  align-items: center;
  justify-content: center;
  border-top: solid 1px #f2f2f2;

  svg {
    cursor: pointer;
    margin: 10px;
    font-size: 30px;
  }
`;

const CommentContainerInput = styled.input`
  width: 250px;
  padding: 24px 5px 16px 20px;
  outline: none;
  border: none;
  resize:none;
  overflow: auto;

`;

export const Comment: React.FC = () => {
  const [value, setValue] = useState<any>("");
  const [arrayComments, setArrayComments] = useState<CommentItemProps[]>([]);

  return (
    <CommentWrapper>
      <CommentContainer>
        {
          arrayComments.length>0 && arrayComments.map(arr => {
            return <CommentItem value={arr} />
          })
        }
        
      </CommentContainer>

      <CommentContainerInputWrapper>
        <CommentContainerInput
          onChange={(e) => setValue(e.target.value)}
          value={value}
          placeholder="Написать комментарий..."
        />
        <IoMdSend onClick={() => setArrayComments([...arrayComments, value])}/>
      </CommentContainerInputWrapper>
    </CommentWrapper>
  );
};
