import React from "react";
import * as S from "./styles";

export default function Project({ name, img, link }) {
  return (
    <S.Card>
      <S.GreyBWrapper>
        <S.GreyBoxes></S.GreyBoxes>
        <S.GreyBoxes></S.GreyBoxes>
        <S.GreyBoxes></S.GreyBoxes>
      </S.GreyBWrapper>
      <h2>{name}</h2>
    </S.Card>
  );
}
