import styled from "styled-components";

import Url from "./url";
import "../../app.css";
import Theme from "./theme";
const Nav = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  font-size: 25px;
`;

function index(): JSX.Element {
  return (
      <Nav>
        <Url />
        <Theme />
      </Nav>
  );
}
export default index;
