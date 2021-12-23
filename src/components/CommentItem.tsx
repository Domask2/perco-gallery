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
  padding: 10px;
  svg {
    font-size: 50px;
  }
`;

const CommentItemContainer = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  padding: 10px;
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
  font-size: 14.5px;
  line-height: 1.36;
  color: #2a5885;
  min-height: 1.36em;
  margin-bottom: 10px;
`;

const CommentItemTextReply = styled.span`
width: 200px;
  margin-bottom: 10px;
`;

const CommentItemTextDate = styled.span`
  font-size: 12px;
  color: #939393;
`;

export interface CommentItemProps {
  value: any
}

export const CommentItem: React.FC<CommentItemProps> = ({value}) => {
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

        <CommentItemDelete>
          <MdClose />
        </CommentItemDelete>
      </CommentItemContainer>
    </CommentItemWrapper>
  );
};
