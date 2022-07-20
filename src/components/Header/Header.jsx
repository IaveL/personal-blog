import React from "react";
import * as S from "./styles";
import { Link } from "react-router-dom";
export default function Header() {
  return (
    <S.Header>
      <nav>
        <S.Navbar>
          <S.NavItem><Link to="/">Início</Link></S.NavItem>
          <S.NavItem><Link to="/projetos">Projetos</Link></S.NavItem>
          <S.NavItem><Link to="/sobre">Sobre</Link></S.NavItem>
          <S.NavItem><Link to="/contato">Contato</Link></S.NavItem>
        </S.Navbar>
      </nav>
    </S.Header>
  );
}
