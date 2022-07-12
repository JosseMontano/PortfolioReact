import { useState } from "react";
import Header from "./components/header/index";
import Me from "./components/me/index";
import styled from "styled-components";
import Speciallity from "./components/speciallitys/index";
import Project from "./components/projects";
const Container = styled.div`
  width: 100%;
`;
function App(): JSX.Element {
  return (
    <Container>
      <Header />
      <Me />
      <Speciallity />
      <Project />
    </Container>
  );
}

export default App;
