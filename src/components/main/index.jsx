import React from "react";
import * as S from "./styles";
import Me from "../../assets/imgs/eu.png";
import Header from "../Header";
import Github from "../../assets/imgs/github.svg";
import Instagram from "../../assets/imgs/instagram.svg";
export default function Main() {
  return (
    <S.Main>
      <S.Sidebar>
        <S.NameAndJobWrapper>
          <S.NameTitle>
            My name is <S.Name>Igor Avelino</S.Name>
          </S.NameTitle>
          <S.JobTitle>I'm a front-end developer.</S.JobTitle>
        </S.NameAndJobWrapper>
      </S.Sidebar>
      <S.InfoSection>
        <div>
          <Header />
        </div>
        <S.PictureWrapper>
          <S.MyPicture src={Me} alt="foto de Igor, dono do blog" />
          <S.SocialMediaWrapper>
            <S.SocialMedia src={Github} alt="" />
            <S.SocialMedia src={Instagram} alt="" />
          </S.SocialMediaWrapper>
        </S.PictureWrapper>
      </S.InfoSection>
    </S.Main>
  );
}
