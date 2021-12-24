import React, { useState } from "react";

import { IoMdSend } from "react-icons/io";
import { CommentItem } from "./CommentItem";

import styled from "styled-components";

const CommentWrapper = styled.div`
  display: flex;
  flex-direction: column;
  width: 320px;
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

const CommentContainerText = styled.p`
  text-align: center;
  padding: 10px;
  user-select: none;
`;

export interface CommentValue {
  value: string;
}

export const Comment: React.FC = () => {
  const [value, setValue] = useState<CommentValue>({ value: '' });
  const [arrayComments, setArrayComments] = useState<CommentValue[]>([]);
  const [errorInpur, setErrorInput] = useState('');

  const handlerValue = (e: React.ChangeEvent<HTMLInputElement>) => {
    setValue({ value: e.target.value })
  }

  const initState = () => {
    setErrorInput('');
    setValue({ value: '' });
  }

  const errorInput = () => {
    if (value.value === '') {
      setErrorInput('Напишите комментарий');
      return;
    }
  }

  const handlerComments = (e: React.MouseEvent) => {
    errorInput()

    if (e?.type === 'click') {
      setArrayComments([ ...arrayComments, {...value} ]);
      initState();
    }
  }

  const handlerKeyDown = (e: React.KeyboardEvent<HTMLInputElement>) => {
    errorInput()

    if (e?.code === "Enter" || e.code === 'NumpadEnter') {
      setArrayComments([ ...arrayComments, {...value} ]);
      initState();
    };
  }

  const handlerDelete = (value: string) => {
    const newArray =  arrayComments.filter((item) => item.value !== value);
    setArrayComments(newArray);
  }

  return (
    <CommentWrapper>
      <CommentContainer>
        {
          arrayComments.length > 0 ? (arrayComments.map((arr, index) => {
            return <CommentItem key={index} value={arr.value} handlerDelete={handlerDelete} />
          })) :
            <CommentContainerText>пока комментариев нет...</CommentContainerText>
        }

      </CommentContainer>

      <CommentContainerInputWrapper>
        <CommentContainerInput
          onKeyDown={(e) => handlerKeyDown(e)}
          onChange={(e) => handlerValue(e)}
          value={value.value}
          placeholder={errorInpur ? errorInpur : "Написать комментарий..."}
        />
        <IoMdSend onClick={(e) => handlerComments(e)} />
      </CommentContainerInputWrapper>
    </CommentWrapper>
  );
};
