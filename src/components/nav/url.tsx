import React from "react";
import { Link } from "react-router-dom";
import styled from "styled-components";
import { FaHome } from "react-icons/fa";
import { FaGithub } from "react-icons/fa";
import { FaUserGraduate } from "react-icons/fa";
const TextNav = styled.p`
  margin: 10px 10px;
  color: #fff;
  text-decoration: none;
  list-style: none;
  text-transform: uppercase;
  font-size: 44px;
`;
const url = () => {
  let data = [
    {
      url: "/",
      component: FaHome,
    },
    {
      url: "/Habilidades",
      component: FaUserGraduate,
    },
    {
      url: "/Proyectos",
      component: FaGithub,
    },
  ];
  return (
    <>
      {data.map((v, i) => (
        <Link key={i} to={v.url}>
          <TextNav>{<v.component />}</TextNav>
        </Link>
      ))}
    </>
  );
};

export default url;
