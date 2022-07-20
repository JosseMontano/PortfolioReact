import SocialNetworks from "./socialNetworks";
import styled from 'styled-components';
const ContText = styled.div`
  width: 800px;
  @media screen and (max-width: 1040px) {
    width: 100%;
    flex-wrap: wrap;
  }
`;
const Title = styled.h2`
  font-size: 42px;
`;
const Description = styled.p`
  margin-top:10px;
  font-size: 18px;
`;
const text = () => {
  return (
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
    <SocialNetworks />
  </ContText>
  )
}

export default text