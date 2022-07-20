import React from "react";
import styled from "styled-components";
import { FaLinkedinIn } from "react-icons/fa";
import { FaGithub } from "react-icons/fa";
import { FaWhatsapp } from "react-icons/fa";
import {Modal} from "../../hooks/modal/modal";
import { UseModal } from "../../hooks/modal/useModal";
import { params } from "../../interface/modal";
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

const ContentModal = (
  <>
    <h2>Felicitaciones</h2>
    <p>
      El pedido será enviado a nuestro whatsapp. El pago se realiza en efectivo
      al momento de la entrega.
    </p>
    <input />
    <Button>Enviar</Button>
  </>
);

function SocialNetworks() {
  const {isShown, toggle} = UseModal();
  const styleIcon = {
    padding: "5px",
    fontSize: "42px",
    background: "#495057",
    borderRadius: "50%",
    color: "white",
  };
  //https://api.whatsapp.com/send?phone=59165722183

  let data = [
    {
      href: "https://www.linkedin.com/in/jos%C3%A9-zambrana-bb08501b6/",
      component: FaLinkedinIn,
    },
    {
      href: "https://github.com/JosseMontano",
      component: FaGithub,
    },
  ];
  return (
    <>
      <Modal
        isShown={isShown}
        hide={toggle}
        modalContent={ContentModal}
      />

      {data.map((v, i) => (
        <Redirect key={i} target="_blank" href={v.href}>
          <v.component style={styleIcon} />
        </Redirect>
      ))}
      <Redirect onClick={toggle}>
        <FaWhatsapp style={styleIcon} />
      </Redirect>
    </>
  );
}

export default SocialNetworks;
