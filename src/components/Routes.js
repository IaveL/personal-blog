import { Routes, Route } from "react-router-dom";
import Home from "../pages/home"
import About from "../pages/about";
import Projects from "../pages/projects";

export default function AppRoutes() {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/projetos" element={<Projects />} />
      <Route path="/sobre" element={<About />} />
      {/* <Route path="/contato" element={<Contact />} /> */}
    </Routes>
  );
}
