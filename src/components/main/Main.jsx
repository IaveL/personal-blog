import React from "react";
import * as S from "./styles";
import Me from "../../assets/imgs/eu.png";
import Header from "../Header";

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
            <S.SocialMedia src="https://img.shields.io/badge/HTML5-E34F26?style=for-the-badge&logo=html5&logoColor=white" alt="" />
            <S.SocialMedia src="https://img.shields.io/badge/CSS3-1572B6?style=for-the-badge&logo=css3&logoColor=white" alt="" />
            <S.SocialMedia src="https://img.shields.io/badge/JavaScript-F7DF1E?style=for-the-badge&logo=javascript&logoColor=black" alt="" />
            <S.SocialMedia src="https://img.shields.io/badge/React-20232A?style=for-the-badge&logo=react&logoColor=61DAFB" alt="" />
            <S.SocialMedia src="https://img.shields.io/badge/styled--components-DB7093?style=for-the-badge&logo=styled-components&logoColor=white" alt="" />
            <S.SocialMedia src="https://img.shields.io/badge/Git-E34F26?style=for-the-badge&logo=git&logoColor=white" alt="" />
            
          </S.SocialMediaWrapper>
        </S.PictureWrapper>
      </S.InfoSection>
    </S.Main>
  );
}
