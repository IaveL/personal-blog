import * as S from "./styles";
import MyPic2 from "../../assets/imgs/eu2.png";
export default function About() {
  return (
    <S.About>
      <S.PictureWrapper>
      <S.My2ndPic src={MyPic2} alt="" />
      <S.BlackBox></S.BlackBox>
      </S.PictureWrapper>
      <S.AboutTextContainer>
        <S.H2>Oi!</S.H2>
        <p>
          Lorem Ipsum é simplesmente uma simulação de texto da indústria
          tipográfica e de impressos, e vem sendo utilizado desde o século XVI,
          quando um impressor desconhecido pegou uma bandeja de tipos e os
          embaralhou para fazer um livro de modelos de tipos. Lorem Ipsum
          sobreviveu não só a cinco séculos, como também ao salto para a
          editoração eletrônica, permanecendo essencialmente inalterado.{" "}
        </p>
        <p>
          Se popularizou na década de 60, quando a Letraset lançou decalques
          contendo passagens de Lorem Ipsum, e mais recentemente quando passou a
          ser integrado a softwares de editoração eletrônica como Aldus
          PageMaker.
        </p>
      </S.AboutTextContainer>
    </S.About>
  );
}
