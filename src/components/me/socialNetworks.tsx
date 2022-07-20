import React from "react";
import styled from "styled-components";
import { FaLinkedinIn } from "react-icons/fa";
import { FaGithub } from "react-icons/fa";
import { FaWhatsapp } from "react-icons/fa";
import Modal from "../../hooks/modal/modal";
import { UseModal } from "../../hooks/modal/useModal";
import {params} from '../../interface/modal'
const Redirect = styled.a``;

const Button = styled.button`
  width: 457px;
  height: 48px;
  left: 181px;
  top: 306px;
  background: #e74423;
  border-radius: 20px;
  color: #fff;
  display: flex;
  flex-direction: row;
  justify-content: center;
  align-items: center;
  margin-top: 30px;
`;

function SocialNetworks() {
  const [isOpenModal1, openModal1, closeModal1] = UseModal();
  const styleIcon = {
    padding: "5px",
    fontSize: "42px",
    background: "#495057",
    borderRadius: "50%",
    color: "white",
  };
  //https://api.whatsapp.com/send?phone=59165722183
  const handleModalWhtsapp = () => {
    openModal1();
  };
  return (
    <>
      <Modal isOpen={isOpenModal1} closeModal={closeModal1}>
        <>
          <h2>Felicitaciones</h2>
          <p>
            El pedido será enviado a nuestro whatsapp. El pago se realiza en
            efectivo al momento de la entrega.
          </p>
          <button>ver pedido</button>
          <Button>Enviar</Button>
        </>
      </Modal>
      <Redirect
        target="_blank"
        href="https://www.linkedin.com/in/jos%C3%A9-zambrana-bb08501b6/"
      >
        <FaLinkedinIn style={styleIcon} />
      </Redirect>
      <Redirect onClick={() => handleModalWhtsapp()}>
        <FaWhatsapp style={styleIcon} />
      </Redirect>
      <Redirect target="_blank" href="https://github.com/JosseMontano">
        <FaGithub style={styleIcon} />
      </Redirect>
    </>
  );
}

export default SocialNetworks;
