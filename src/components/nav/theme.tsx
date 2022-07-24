import styled from "styled-components";
import { FaSun } from "react-icons/fa";
import { FaMoon } from "react-icons/fa";
import { useContext } from "react";
import { ThemeContext } from "../../context/theme";
const ContTheme = styled.div`
  border-top: 3px solid #fff;
  padding: 10px 10px;
`;
const theme = () => {
  const { handleTheme } = useContext(ThemeContext);
  let data = [
    {
      color: "yellow",
      component: FaSun,
      onclick: () => handleTheme("light"),
    },
    {
      color: "#103b78",
      component: FaMoon,
      onclick: () => handleTheme("dark"),
    },
  ];
  return (
    <ContTheme>
      {data.map((v, i) => (
        <v.component key={i} style={{ color: v.color }} onClick={v.onclick} />
      ))}
    </ContTheme>
  );
};
export default theme;
