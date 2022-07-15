import styled from "styled-components";
import { TitleSec } from "../speciallitys";
import Proj1 from "./../../images/projects/project1.png";
import {ThemeContext} from "../../context/theme";
import { useContext } from 'react'
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
    margin-left: 120px;
  }
  @media screen and (max-width: 600px) {
    margin-left: 70px;
  }
`;
const ContCar = styled.div`
  margin-top: 20px;
  display: flex;
  flex-wrap: wrap;
  gap:10px;
`;
const Cart = styled.div`
  width: 400px;
  background-color: #f9f9f9;
  color: #000;
`;
const Img = styled.img`
  width: 100%;
`;
const MainCart = styled.div`
margin:20px 0px;
  display: grid;
  justify-content: center;  
  padding:0px 25px;
`;
const FooterCart = styled.div`
margin-top: 10px;
  background-color: #f00263;
  color: #fff;
  border: 1px solid rgba(0, 0, 0, 0.5);
  display: grid;
  grid-template-columns: 1fr 1fr;
  height: 60px;
  width: 100%;
`;
const TextFoot = styled.p`
  display: inline-block;
  border-right: 1px solid rgba(0, 0, 0, 0.5);
  text-align: center;
  display: flex;
  justify-content: center;
  align-items: center;
  font-weight: bold;
  text-transform: uppercase;
  font-size: 20px;
`;
const Title = styled.h3`
  font-size: 34px;
  text-align: center;
`;
const Description = styled.p`
  font-size: 20px;
  text-align: center;
`;
const index = (): JSX.Element => {
  const {theme, handleTheme} = useContext(ThemeContext);
  return (
    <Container className={theme}>
      <TitleSec>Proyectos</TitleSec>
      <ContCar>
        <Cart>
          <Img className={theme === 'dark' ? 'aux' : ''} src={Proj1} />
          <MainCart>
            <Title>Carrito de compras</Title>
            <Description>
              Construdio con laravel y react, toda la logica del carrito se
              encuentra en laravel, Construdio con laravel y react, toda la
        
            </Description>
          </MainCart>
          <FooterCart>
            <TextFoot>video</TextFoot>
            <TextFoot>codigo</TextFoot>
          </FooterCart>
        </Cart>

        <Cart>
          <Img className={theme === 'dark' ? 'aux' : ''} src={Proj1} />
          <MainCart>
            <Title>Carrito de compras</Title>
            <Description>
              Construdio con laravel y react, toda la logica del carrito se
              encuentra en laravel, Construdio con laravel y react, toda la
        
            </Description>
          </MainCart>
          <FooterCart>
            <TextFoot>video</TextFoot>
            <TextFoot>codigo</TextFoot>
          </FooterCart>
        </Cart>

      </ContCar>
    </Container>
  );
};
export default index;
