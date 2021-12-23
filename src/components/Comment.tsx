import React from "react";
import styled from "styled-components";

const CommentWrapper = styled.div`
  display: flex;
  flex-direction: column;
  width: 100%;
`;

const CommentContainer = styled.div`
  width: 100%;
  overflow: auto
`;

export const Comment: React.FC = () => {
    return (
        <CommentWrapper>
            <CommentContainer>
                <p>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Voluptas, eius!</p>
                <p>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Voluptas, eius!</p>
                <p>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Voluptas, eius!</p>
                <p>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Voluptas, eius!</p>
                <p>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Voluptas, eius!</p>
                <p>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Voluptas, eius!</p>
            </CommentContainer>
            <div style={{overflow:'auto'}}>
                
            </div>

            <input style={{position:'absolute', bottom: '20px' }} type="text" placeholder="оставь отзыв" />

        </CommentWrapper>
    );
};
