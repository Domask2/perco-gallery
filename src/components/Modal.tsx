import React from "react";
import { Dispatch, SetStateAction } from "react";
import styled from "styled-components";

interface ModalProps {
  active: boolean;
  setActive: Dispatch<SetStateAction<boolean>>;
  children: React.ReactNode;
}

const ModalWrapperUnActive = styled.div`
  height: 100vh;
  width: 100vw;
  background-color: rgba(0,0,0, 0.5);
  position: fixed;
  top: 0;
  left: 0;
  display: flex;
  align-items: center;
  justify-content: center;
  opacity: 0;
  pointer-events: none;
  transition: 0.5s;
`;

const ModalWrapperActive = styled(ModalWrapperUnActive)`
  opacity: 1;
  pointer-events: all;
`;

const ModalContentUnActive = styled.div`
  padding: 20px;
  border-radius: 2px;
  background-color: #fff;
  max-width: 100%;
  transform: scale(0.5);
  transition: 0.5s;
`;

const ModalContentActive = styled(ModalContentUnActive)`
  transform: scale(1);
`;

const ModalConteiner = styled.div`
  width: 100%;
  display: flex;
  justify-content: center;
`;


export const Modal: React.FC<ModalProps> = ({active, setActive, children}) => {
  const ModalWrapper = active ? ModalWrapperActive : ModalWrapperUnActive;
  const ModalContent = active ? ModalContentActive : ModalContentUnActive;

  return (
    <ModalWrapper onClick={() => setActive(false)}>
      <ModalContent onClick={(e) => e.stopPropagation()}>
        <ModalConteiner>
          {children}
        </ModalConteiner>
      </ModalContent>
    </ModalWrapper>
  );
};
