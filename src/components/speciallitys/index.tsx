import styled from "styled-components";
import { ThemeContext } from "../../context/theme";
import { useContext } from "react";
import Images from "./imagenes";
const Container = styled.div`
  display: flex;
  align-items: center;
  height: 100vh;
  background-color: #f2f2f2;
  margin-left: 200px;
  padding: 20px;
  width: calc(100%-220px);
  @media screen and (max-width: 900px) {
    margin-left: 100px;
  }
  @media screen and (max-width: 600px) {
    margin-left: 50px;
  }
`;
const ContainerSoon = styled.div``;

export const TitleSec = styled.h2`
  font-size: 42px;
  display: block;
`;
const index = (): JSX.Element => {
  const { theme, handleTheme } = useContext(ThemeContext);
  return (
    <>
      <Container className={theme}>
        <ContainerSoon>
          <TitleSec>Habilidades</TitleSec>
          <Images />
        </ContainerSoon>
      </Container>
    </>
  );
};
export default index;
