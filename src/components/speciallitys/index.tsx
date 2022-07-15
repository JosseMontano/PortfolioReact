import React from "react";
import ReactImg from "./../../images/skills/react.png";
import TypeImg from "./../../images/skills/typescript.png";
import GoImg from "./../../images/skills/go.png";
import MongoImg from "./../../images/skills/mongo.png";
import MysqlImg from "./../../images/skills/mysql.png";
import styled from "styled-components";
import {ThemeContext} from "../../context/theme";
import { useContext } from 'react'
const Container = styled.div`
  display: flex;
  align-items: center;
  height: 100vh;
  background-color: #f2f2f2;
  margin-left: 200px;
padding-right: 20px;
  width: calc(100%-220px);
  @media screen and (max-width: 900px) {
    margin-left: 120px;
  }
  @media screen and (max-width: 600px) {
    margin-left: 70px;
  }
`;
const ContainerSoon = styled.div`
`
const ContImg = styled.div`
  display: flex;
  justify-content: center;
  flex-wrap: wrap;
`;
const Img = styled.img`
  height: 100px;
  object-fit: cover;
  margin: 0px 10px;
  margin-top: 20px;
`;
export const TitleSec = styled.h2`
  font-size: 42px;
  display: block;
`;
const index = (): JSX.Element => {
  const {theme, handleTheme} = useContext(ThemeContext);
  return (
<>

    <Container className={theme}>
   <ContainerSoon>
   <TitleSec>Habilidades</TitleSec>
      <ContImg className={theme === 'dark' ? 'aux' : ''}>
        {[ReactImg, TypeImg, GoImg, MongoImg, MysqlImg].map((v, i) => {
          return <Img src={v} />;
        })}
      </ContImg>
   </ContainerSoon>
    </Container>
</>
  );
};
export default index;
