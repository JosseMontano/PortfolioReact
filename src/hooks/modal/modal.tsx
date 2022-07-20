import React from "react";
import styled from "styled-components";
import {params} from '../../interface/modal'
import ReactDOM from 'react-dom';

const Container = styled.div<{ open: boolean }>`
  position: fixed;
  z-index: 99999;
  top: 0;
  left: 0;
  width: 100%;
  min-height: 100vh;
  background-color: rgba(0, 0, 0, 0.5);
  display: ${(props) => (props.open ? "flex" : "none")};
  justify-content: center;
  align-items: center;
`;
const ContainerSoon = styled.div`
  background: #ffffff;
  box-shadow: 0px 4px 4px rgba(0, 0, 0, 0.05), 0px 4px 6px rgba(0, 0, 0, 0.08);
  border-radius: 16px;
  color: #000;
  padding: 1rem;
  position: relative;
  display: flex;
  flex-direction: column;
  align-items: center;
`;
const Close = styled.p`
  position: absolute;
  top: 1rem;
  right: 1rem;
`;

export const Modal = ({isShown, hide, modalContent}:params) => {

  const handleModalContainerClick = (
    e: React.MouseEvent<HTMLDivElement, MouseEvent>
  ) => e.stopPropagation();

  const modal = (
    <Container open={isShown} onClick={hide}>
      <ContainerSoon onClick={(e) => handleModalContainerClick(e)}>
        <Close onClick={hide}>X</Close>
        {modalContent}
      </ContainerSoon>
    </Container>
  );
  return isShown ? ReactDOM.createPortal(modal, document.body) : null;
};
