import React from "react";
import * as S from "./styles";

export default function Project({ name, img, link }) {
  return (
    <a href={link} target="_blank" rel="noopener noreferrer">
      <S.Card img={img}>
        <S.GreyBoxes></S.GreyBoxes>
        <S.ProjectName>{name}</S.ProjectName>
      </S.Card>
    </a>
  );
}
