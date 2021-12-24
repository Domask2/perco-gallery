import React, { useEffect, Dispatch, SetStateAction } from "react";
import { MdClose } from "react-icons/md";
import styled from "styled-components";

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
  transition:0.5s;
  cursor: pointer;
`;

const ModalWrapperActive = styled(ModalWrapperUnActive)`
  opacity: 1;
  pointer-events: all;
`;

const ModalClose = styled.div`
  position: absolute;
  top: 10px;
  right: 10px;
  color: #fff;
  font-size:50px;
`;

const ModalContentUnActive = styled.div`
  max-width: 800px;
  height: 660px;
  border-radius: 2px;
  background-color: #fff;
  transform: scale(0.5);
  transition: 0.5s;
  cursor: auto;
  @media(max-width: ${({ theme }) => theme.width.large}) {
    max-width: 700px;
  }
  @media(max-width: ${({ theme }) => theme.width.medium}) {
    max-width: 500px;
  }
`;

const ModalContentActive = styled(ModalContentUnActive)`
  transform: scale(1);
`;

const ModalConteiner = styled.div`
  width: 100%;
  height: 100%;
  display: flex;
  justify-content: center;
`;

interface ModalProps {
  active: boolean;
  setActive: Dispatch<SetStateAction<boolean>>;
  children: React.ReactNode;
}

export const Modal: React.FC<ModalProps> = ({ active, setActive, children }) => {
  const ModalWrapper = active ? ModalWrapperActive : ModalWrapperUnActive;
  const ModalContent = active ? ModalContentActive : ModalContentUnActive;

  // не самое лучшее решение, но для тестового проекта считаю будет достаточно
  useEffect(() => {
    const body = document.querySelector('body');
    if (body) body.style.overflow = active ? 'hidden' : 'auto';
  }, [active])

  return (
    <ModalWrapper onClick={() => setActive(false)}>
      <ModalContent onClick={(e) => e.stopPropagation()}>
        <ModalConteiner>
          {children}
        </ModalConteiner>
      </ModalContent>
      <ModalClose>
        <MdClose />
      </ModalClose>
    </ModalWrapper>
  );
};
