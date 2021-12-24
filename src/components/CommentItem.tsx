import React from "react";
import { FaRegUserCircle } from "react-icons/fa";
import { MdClose } from "react-icons/md";
import styled from "styled-components";

const CommentItemWrapper = styled.div`
  display: flex;
  width: 100%;
  position: relative;
  border-bottom: 1px solid rgba(0, 0, 0, 0.2);
`;

const CommentItemLogo = styled.div`
  display: flex;
  align-items: center;
  padding: 6px;
  svg {
    font-size: 30px;
  }
`;

const CommentItemContainer = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  padding: 6px 6px;
`;

const CommentItemText = styled.div`
  display: flex;
  flex-direction: column;
`;

const CommentItemDelete = styled.div`
  font-size: 20px;
`;

const CommentItemTextAuth = styled.span`
  font-weight: 500;
  font-size: 11px;
  line-height: 1.36;
  color: ${({ theme }) => theme.colors.accent};
  min-height: 1.36em;
  margin-bottom: 10px;
`;

const CommentItemTextReply = styled.p`
  width: 240px;
  margin-bottom: 10px;
  font-size: 12px;
  @media(max-width: ${({ theme }) => theme.width.medium}) {
    width: 135px; 
  }
`;

const CommentItemTextDate = styled.span`
  font-size: 12px;
  color: #939393;
`;

interface CommentItemProps {
  value: string;
  id: string
  handlerDelete: (value: string) => void;
}

export const CommentItem: React.FC<CommentItemProps> = ({ value, id, handlerDelete }) => {
  return (
    <CommentItemWrapper>
      <CommentItemLogo>
        <FaRegUserCircle />
      </CommentItemLogo>

      <CommentItemContainer>
        <CommentItemText>
          <CommentItemTextAuth>First Name</CommentItemTextAuth>
          <CommentItemTextReply>
            {value}
          </CommentItemTextReply>
          <CommentItemTextDate>
            {new Date().toLocaleDateString()}
          </CommentItemTextDate>
        </CommentItemText>

        <CommentItemDelete onClick={() => handlerDelete(id)}>
          <MdClose />
        </CommentItemDelete>
      </CommentItemContainer>
    </CommentItemWrapper>
  );
};
