import React from "react";

import { Like } from "./Like";
import { Img } from "./UnsplashImage";
import { Comment } from "./Comment"; 

import { ImageProps } from "../types/types";
import styled from "styled-components";

export const ModalContentWrapper = styled.div`
    display: flex;
`;

export const ModalContentImg = styled.div`
    max-width: 600px;
`;

export const ModalContentComment = styled.div`
    display: flex;
    flex-direction: column;
`;

export const ModalContent: React.FC<ImageProps> = ({ url, alt }) => {
    return (
        <ModalContentWrapper>
            <ModalContentImg>
                <Img src={url} alt={alt} />
            </ModalContentImg>

            <ModalContentComment>
                <Like/>
                <Comment/>
            </ModalContentComment>  
        </ModalContentWrapper>
    );
};
