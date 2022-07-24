import styled from "styled-components";
import { useContext } from "react";
import { ThemeContext } from "../../context/theme";
import "../../app.css";
import Nav from "./nav";
const Container = styled.div`
  background-color: rgba(0, 0, 0, 0.9);
  height: 100%;
  position: fixed;
  top: 0;
  left: 0;
  display: grid;
  place-content: center;
  padding: 0px 20px;
  width: 200px;

  @media screen and (max-width: 900px) {
    width: 100px;
  }
  @media screen and (max-width: 600px) {
    width: 50px;
  }
`;

function index(): JSX.Element {
  const { theme } = useContext(ThemeContext);
  return (
    <Container className={theme}>
      <Nav />
    </Container>
  );
}
export default index;
