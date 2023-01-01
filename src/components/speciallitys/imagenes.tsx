import React from "react";
import styled from "styled-components";
import ReactImg from "./../../images/skills/react.png";
import TypeImg from "./../../images/skills/typescript.png";
import Redux from "./../../images/skills/redux.png";
import Graphql from "./../../images/skills/GraphQL.png";
import Firebase from "./../../images/skills/firebase.png";
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
  const { theme } = useContext(ThemeContext);
  const dataImg = [ReactImg, Redux, TypeImg, Graphql, Firebase];
  return (
    <ContImg className={theme === "dark" ? "aux" : ""}>
      {dataImg.map((v, i) => {
        return <Img key={i} src={v} />;
      })}
    </ContImg>
  );
};

export default imagenes;
