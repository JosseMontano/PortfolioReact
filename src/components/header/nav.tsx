import styled from "styled-components";
const Container = styled.div`
width: 100%;
  background-color: white;
  color: #000;
  height: 70px;
  position: fixed;
  top: 0;
  left: 0;
`;
const Nav = styled.div`
  display: flex;
  justify-content: center;
  font-size: 25px;  height: 70px;
  align-items: center;
`;
const TextNav = styled.p`
margin: 0px 30px;
padding: 0px;
;
`;

function index(): JSX.Element {
  return (
    <Container>
      <Nav>
        <TextNav>Inicio</TextNav>
        <TextNav>Yo</TextNav>
        <TextNav>Proyectos</TextNav>
      </Nav>
    </Container>
  );
}
export default index;
