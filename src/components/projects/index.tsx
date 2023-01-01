import styled from "styled-components";
import { TitleSec } from "../speciallitys";
import { ThemeContext } from "../../context/theme";
import { useContext, useState } from "react";
import ContentProject from "./contentProject";
import { Project } from "../../interface/project";
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
  const { theme } = useContext(ThemeContext);
  const [projects, setProjects] = useState<Project[]>([
    {
      title: "Carrito de compras",
      technologies: "[React] [Laravel] [Mysql]",
      description: `Aplicacion caractertizada por permitir a los usuarios enviar 
      al whatsapp una lista de productos farmaceuticos que se desea comprar, la logica 
      del carrito funciona con useReducer. y los datos de los productos se obtiene de una api
      construida con laravel.`,
      video: "youtube",
      code: "https://github.com/JosseMontano/pharmacy-react-laravel.git",
    },
    {
      title: "Inmuebles en la nube",
      technologies: "[React] [Express] [Typescript]",
      description: `Es una red social la cual permite a las personas 
      compartir informacion de inmuebles para que usuarios puedan alquilar o comprar. Entre 
      sus caracteristicas mas destacables esta la traduccion de ingles a español, el funcionamiento
      de la misma sin internet y las operaciones como añadir o eliminar funcionan en tiempo real.
      `,
      video: "youtube",
      code: "https://github.com/JosseMontano/estateInTheCloud.git",
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
