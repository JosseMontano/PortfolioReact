import React from "react";
import ReactImg from "./../../images/skills/react.png";
import TypeImg from "./../../images/skills/typescript.png";
import GoImg from "./../../images/skills/go.png";
import MongoImg from "./../../images/skills/mongo.png";
import MysqlImg from "./../../images/skills/mysql.png";
import styled from "styled-components";

const Container = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  background-color: #f5f5f5;
`;
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
  text-align: center;
  font-size: 42px;
  display: block;
`;
const index = (): JSX.Element => {
  return (
    <Container>
      <TitleSec>Habilidades</TitleSec>
      <ContImg>
        {[ReactImg, TypeImg, GoImg, MongoImg, MysqlImg].map((v, i) => {
          return <Img src={v} />;
        })}
      </ContImg>
    </Container>
  );
};
export default index;
