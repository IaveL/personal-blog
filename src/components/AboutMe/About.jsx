import * as S from "./styles";
import Header from "../Header"
import MyPic2 from "../../assets/imgs/eu2.png";
export default function About() {
  return (
    <S.About>
      <Header/>
      <S.AboutContainer>
      <S.PictureWrapper>
        <S.My2ndPic src={MyPic2} alt="" />
        <S.BlackBox></S.BlackBox>
      </S.PictureWrapper>
      <S.AboutTextContainer>
        <S.WhiteBoxesWrapper>
        <S.WhiteBoxes></S.WhiteBoxes>
        <S.WhiteBoxes></S.WhiteBoxes>
        <S.WhiteBoxes></S.WhiteBoxes>
        </S.WhiteBoxesWrapper>
        <S.H2>Oi!</S.H2>
        <S.AboutMeText>
          Me chamo Igor, tenho 21 anos e sou desenvolvedor front end.{" "}
        </S.AboutMeText>
        <S.AboutMeText>
          Fui jovem aprendiz administrativo por 3 anos e meio, estudante de
          psicologia por 1 ano e meio, hoje consegui ingressar na UERJ em
          Ciência da Computação e sou mais feliz que nunca!
        </S.AboutMeText>
        <S.AboutMeText>Hoje tenho a sorte de atuar como desenvolvedor Front-end JR. no estúdio vai na web.</S.AboutMeText>
        <S.AboutMeText>
          No meu tempo livre eu escuto bastante música, assisto série (minha
          favorita é Better Call Saul), e jogo algumas coisas online. Ah, também
          escrevo! Se quiser,{" "}
          <S.InstagramLink
            href="https://www.instagram.com/poesiacicatrizada/"
            target="_blank"
            rel="noopener noreferrer"
          >
            siga minha página no instagram!
          </S.InstagramLink>
        </S.AboutMeText>
      </S.AboutTextContainer>
      </S.AboutContainer>
    </S.About>
  );
}
