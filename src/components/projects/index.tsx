import styled from "styled-components";
import { TitleSec } from "../speciallitys";
import { ThemeContext } from "../../context/theme";
import { useContext, useState } from "react";
import ContentProject from "./contentProject";
import {Project} from '../../interface/project'
const Container = styled.div`
  display: flex;
  background-color: #f2f2f2;
  flex-direction: column;
  justify-content: center;
  padding: 20px;
  height: 100vh;
  padding-right: 20px;
  width: calc(100%-220px);
  margin-left: 200px;
  @media screen and (max-width: 900px) {
    margin-left: 100px;
  }
  @media screen and (max-width: 600px) {
    margin-left: 50px;
  }
`;

const index = (): JSX.Element => {
  const { theme, handleTheme } = useContext(ThemeContext);
  const [projects, setProjects] = useState<Project[]>([
    {
      title: "Senior Web Developer",
      technologies: "[Intelitec] [Solutions]",
      description: `Bring to the table win-win survival strategies to ensure proactive
    domination. At the end of the day, going forward, a new normal that
    has evolved from generation X is on the runway heading towards a
    streamlined cloud solution. User generated content in real-time will
    have multiple touchpoints for offshoring.`,
      video: "youtube",
      code: "code",
    },
    {
      title: "Senior Web Developer",
      technologies: "[Intelitec] [Solutions]",
      description: `Bring to the table win-win survival strategies to ensure proactive
    domination. At the end of the day, going forward, a new normal that
    has evolved from generation X is on the runway heading towards a
    streamlined cloud solution. User generated content in real-time will
    have multiple touchpoints for offshoring.`,
      video: "youtube",
      code: "code",
    },
  ]);
  return (
    <Container className={theme}>
      <TitleSec>Proyectos</TitleSec>
      <ContentProject projects={projects} />
    </Container>
  );
};
export default index;
