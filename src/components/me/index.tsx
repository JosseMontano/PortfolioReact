import React from "react";
import styled from "styled-components";
import Me from "../../images/me.jpeg";

const Container = styled.div`
  width: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
  gap: 10px;
  margin-top: 25px;
  padding: 1%;
  @media screen and (max-width: 880px) {
    flex-direction: column;
    flex-wrap: wrap;
    padding: 0% 10%;
  }
`;

const ContImg = styled.div``;

const ContText = styled.div`
  width: 600px;
  @media screen and (max-width: 745px) {
    width: 90%;
  }
`;
const Title = styled.h2`
  text-align: center;
  font-size: 42px;
`;
const Description = styled.p`
  margin-top: 20px;
  text-align: center;
  font-size: 18px;
`;
const Img = styled.img`
  height: 450px;
  border-radius: 10px;
  @media screen and (max-width: 890px) {
    height: 300px;
  }
`;

const index = (): JSX.Element => {
  return (
    <Container>
      <ContImg>
        <Img src={Me} />
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
      </ContText>
    </Container>
  );
};
export default index;
