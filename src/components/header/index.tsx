import styled from "styled-components";
import Nav from "./nav";
import Back from "../../images/backgroundBig.jpg";
const Container = styled.div`
  position: relative;
  top: 0;
  left: 0;
  width: 100%;
`;
const ContImg = styled.div<{ img: string }>`
  background-image: url(${(props) => props.img});
  background-size: cover;
  background-attachment: fixed;
  background-position: center center;
  height: 100vh;
  width: 100%;
  filter: brightness(90%);
`;

function index(): JSX.Element {
  return (
    <Container>
      <ContImg img={Back}></ContImg>
      <Nav />
    </Container>
  );
}
export default index;
