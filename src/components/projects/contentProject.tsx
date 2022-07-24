import React from "react";
import styled from "styled-components";
import { Project } from "../../interface/project";
const ContainerProject = styled.div`
  width: 800px;
  margin-top: 10px;
  @media screen and (max-width: 1040px) {
    width: 100%;
    flex-wrap: wrap;
  }
`;
const Title = styled.p`
  text-transform: uppercase;
  font-weight: 700;
`;
const Short = styled.p`
  font-weight: 500;
`;
const Description = styled.p``;
const ContainerLinksProject = styled.div`
  text-align: end;
`;
const LinksProject = styled.span`
  color: #bd5d38;
  margin: 0px 10px 0px 0px;
  text-transform: uppercase;
`;

interface Props {
  projects: Project[];
}

const contentProject = ({ projects }: Props) => {
  return (
    <>
      {projects.map((v, i) => (
        <ContainerProject key={i}>
          <Title>{v.title}</Title>
          <Short>{v.technologies}</Short>
          <Description>{v.description}</Description>
          <ContainerLinksProject>
            <LinksProject>{v.video}</LinksProject>
            <LinksProject>{v.code}</LinksProject>
          </ContainerLinksProject>
        </ContainerProject>
      ))}
    </>
  );
};

export default contentProject;
