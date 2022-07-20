import React from "react";
import styled from "styled-components";
import ReactImg from "./../../images/skills/react.png";
import TypeImg from "./../../images/skills/typescript.png";
import GoImg from "./../../images/skills/go.png";
import MongoImg from "./../../images/skills/mongo.png";
import MysqlImg from "./../../images/skills/mysql.png";
import { ThemeContext } from "../../context/theme";
import { useContext } from "react";
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
const imagenes = () => {
  const { theme, handleTheme } = useContext(ThemeContext);
  return (
    <ContImg className={theme === "dark" ? "aux" : ""}>
      {[ReactImg, TypeImg, GoImg, MongoImg, MysqlImg].map((v, i) => {
        return <Img key={i} src={v} />;
      })}
    </ContImg>
  );
};

export default imagenes;
