import React, { useContext } from 'react'
import styled from 'styled-components';
import Me from "../../images/me.jpeg";
import { ThemeContext } from "../../context/theme";
const ContImg = styled.div``;
const Img = styled.img`
  height: 300px;
  border-radius: 10px;
  @media screen and (max-width: 375px) {
    height: 200px;
  }
`;
const img = () => {
  const { theme, handleTheme } = useContext(ThemeContext);

  return (
    <ContImg>
    <Img src={Me} className={theme === "dark" ? "aux" : ""} />
  </ContImg>
  )
}

export default img