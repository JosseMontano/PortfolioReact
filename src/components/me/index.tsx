import React from "react";
import styled from "styled-components";
import Me from "../../images/me.jpeg";
import { useContext } from "react";
import { ThemeContext } from "../../context/theme";
import { FaLinkedinIn } from "react-icons/fa";
import { FaGithub } from "react-icons/fa";
import { FaWhatsapp } from "react-icons/fa";
const Container = styled.div`
  margin-left: 200px;
  padding-right: 20px;
  background-color: #f2f2f2;
  width: calc(100%-220px);
  display: flex;
  flex-direction: column;
  justify-content: center;
  gap: 10px;
  height: 100vh;
  margin-left: 220px;
  @media screen and (max-width: 1075px) {
    flex-direction: column;
    flex-wrap: wrap;
  }
  @media screen and (max-width: 900px) {
    margin-left: 120px;
  }
  @media screen and (max-width: 600px) {
    margin-left: 70px;
  }
`;

const ContImg = styled.div``;

const ContText = styled.div`
  width: 500px;
  @media screen and (max-width: 787px) {
    width: 100%;
  }
`;
const Title = styled.h2`
  font-size: 42px;
`;
const Description = styled.p`
  margin-top: 20px;
  font-size: 18px;
`;
const Img = styled.img`
  height: 300px;
  border-radius: 10px;
`;

const index = (): JSX.Element => {
  const { theme, handleTheme } = useContext(ThemeContext);
  return (
    <Container className={theme}>
      <ContImg>
        <Img src={Me} className={theme === "dark" ? "aux" : ""} />
      </ContImg>
      <ContText>
        <Title>Jose Zambrana</Title>
        <Description>
          Estudié Ingeniería de sistemas, me encuentro enfocado en el
          aprendizaje continuo y en crear aplicaciones que hagan la diferencia,
          he desarrollado varios proyectos tanto individuales como en equipo. Me
          considero una persona resolutiva y capaz de afrontar los problemas de
          forma práctica y eficaz. Actualmente React, Laravel, MySQL y SCRUM son
          las tecnologías con las cuales trabajo en el día a día.
        </Description>

        <FaLinkedinIn
          style={{
            padding: "5px",
            fontSize: "42px",
            background: "#495057",
            borderRadius: "50%",
            color: "white",
          }}
        />

        <FaWhatsapp
          style={{
            padding: "5px",
            fontSize: "42px",
            background: "#495057",
            borderRadius: "50%",
            color: "white",
          }}
        />
        <FaGithub
          style={{
            padding: "5px",
            fontSize: "42px",
            background: "#495057",
            borderRadius: "50%",
            color: "white",
          }}
        />
      </ContText>
    </Container>
  );
};
export default index;
