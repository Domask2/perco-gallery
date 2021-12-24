import React, { useState } from "react";
import { IoMdSend } from "react-icons/io";
import { CommentValue } from "../types/types";
import styled from "styled-components";

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

  @media(max-width: ${({ theme }) => theme.width.medium}) {
    width: 180px;
  }
`;

export interface CommentInputProps {
    value: CommentValue;
    setValue: (value: CommentValue) => void,
    arrayComments: CommentValue[];
    setArrayComments: React.Dispatch<React.SetStateAction<CommentValue[]>>
}

export const CommentInput: React.FC<CommentInputProps> = ({ value, setValue, arrayComments, setArrayComments }) => {
    const [errorInput, setErrorInput] = useState('');

    const handlerValue = (e: React.ChangeEvent<HTMLInputElement>) => {
        setValue({ value: e.target.value, id: new Date().toString() })
    }

    const handlerCommit = (e: React.MouseEvent | React.KeyboardEvent) => {
        if (value.value === '') {
            setErrorInput('Напишите комментарий');
            return;
        }

        const checkCode = ('code' in e && (e?.code === "Enter" || e?.code === 'NumpadEnter'));
        const checkType = ('type' in e && (e?.type === "click"));

        if (checkType || checkCode) {
            setArrayComments([...arrayComments, { ...value }]);
            setErrorInput('');
            setValue({ value: '', id: '' });
        }
    }

    return (
        <CommentContainerInputWrapper>
            <CommentContainerInput
                onKeyDown={(e) => handlerCommit(e)}
                onChange={(e) => handlerValue(e)}
                value={value.value}
                placeholder={errorInput ? errorInput : "Написать комментарий..."}
            />
            <IoMdSend onClick={(e) => handlerCommit(e)} />
        </CommentContainerInputWrapper>
    );
};
