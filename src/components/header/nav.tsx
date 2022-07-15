import styled from "styled-components";
import { Link } from "react-router-dom";
import { FaHome } from 'react-icons/fa';
import { FaGithub } from 'react-icons/fa';
import { FaUserGraduate } from 'react-icons/fa';
import { FaSun } from 'react-icons/fa';
import { FaMoon } from 'react-icons/fa';
import { useContext } from 'react'
import {ThemeContext} from "../../context/theme";
import "../../app.css"
const Container = styled.div`
  background-color: rgba(0,0,0,.9);
  height: 100%;
  position: fixed;
  top: 0;
  left: 0;
  display: grid;
  place-content: center;
  padding: 0px 20px;
  width: 200px;

  @media screen and (max-width:900px) {
    width: 100px;
  }
  @media screen and (max-width:600px) {
    width: 50px;
  }
`;
const Nav = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  font-size: 25px;
`;
const TextNav = styled.p`
  margin: 10px 10px;
  color: #fff;
  text-decoration: none;
  list-style: none;
  text-transform: uppercase;
  font-size: 44px;
`;
const ContTheme = styled.div`
  border-top:3px solid #fff ;
  padding:10px 10px;
`;
function index(): JSX.Element {
 
  const {theme, handleTheme} = useContext(ThemeContext);

  return (
    <Container className={theme}>
      <Nav>
        <Link to="/">
          <TextNav><FaHome /></TextNav>
        </Link>
        <Link to="/Habilidades">
          <TextNav><FaUserGraduate /></TextNav>
        </Link>{" "}
        <Link to="/Proyectos">
          <TextNav><FaGithub /></TextNav>
        </Link>
        <ContTheme>
          <FaSun style={{color:"yellow"}} onClick={() => handleTheme("light")} />
          <FaMoon style={{color:"#103b78"}} onClick={() => handleTheme("dark")} />
        </ContTheme>
      </Nav>
    </Container>
  );
}
export default index;
