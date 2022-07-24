import styled from "styled-components";

import { useContext } from "react";
import { ThemeContext } from "../../context/theme";
import AboutMe from "./aboutMe";

const Container = styled.div`
  padding: 20px;
  background-color: #f2f2f2;
  width: calc(100%-220px);
  display: flex;
  flex-direction: column;
  justify-content: center;
  gap: 10px;
  height: 100vh;
  margin-left: 200px;
  @media screen and (max-width: 1075px) {
    flex-direction: column;
    flex-wrap: wrap;
  }
  @media screen and (max-width: 900px) {
    margin-left: 100px;
  }
  @media screen and (max-width: 600px) {
    margin-left: 50px;
  }
`;

const index = (): JSX.Element => {
  const { theme, handleTheme } = useContext(ThemeContext);
  return (
    <Container className={theme}>
      <AboutMe />
    </Container>
  );
};
export default index;
