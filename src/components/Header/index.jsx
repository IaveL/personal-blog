import React from "react";
import * as S from "./styles"

function Header() {
  return (
    <S.Header>
    <nav>
      <S.Navbar>
        <S.NavItem>Projetos</S.NavItem>
        <S.NavItem>Sobre</S.NavItem>
        <S.NavItem>Contato</S.NavItem>
      </S.Navbar>
    </nav>
    </S.Header>
  );
}
export default Header;