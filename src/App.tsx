
import { HashRouter, Routes, Route } from "react-router-dom";

import Me from "./components/me/index";
import Speciallity from "./components/speciallitys/index";
import Project from "./components/projects";
import Nav from './components/header/nav'


function App(): JSX.Element {
  return (
    <HashRouter>
      <Nav />
    <Routes>
      <Route path="/" element={<Me />} />
      <Route path="/Habilidades" element={<Speciallity />} />
      <Route path="/Proyectos" element={<Project />} />
    </Routes>
  </HashRouter>
  );
}

export default App;
