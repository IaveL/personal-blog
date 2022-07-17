import React from "react";
import * as S from "./styles";
import Me from "../../assets/imgs/eu.png";
import Header from "../Header";
export default function index() {
  return (
    <S.Main>
      <S.Sidebar>
        <S.NameAndJobWrapper>
          <S.NameTitle>
            My name is <S.Name>Igor Avelino</S.Name>
          </S.NameTitle>
          <S.JobTitle>I'm a front-end developer</S.JobTitle>
        </S.NameAndJobWrapper>
      </S.Sidebar>
      <S.InfoSection>
          <Header/>
        <S.PictureWrapper>
          <S.MyPicture src={Me} alt="foto de Igor, dono do blog" />
        </S.PictureWrapper>
      </S.InfoSection>
    </S.Main>
  );
}
