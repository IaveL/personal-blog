import * as S from "./styles";
import Header from "../Header";
import Instagram from "../../assets/imgs/instagram.svg";
import Linkedin from "../../assets/imgs/linkedin.png";
import Github from "../../assets/imgs/github.svg";
export default function Contato() {
  return (
    <S.ContactBox>
      <Header />
      <S.ContactInfo>
        <h2>You can find me here! :)</h2>
        <S.SocialsWrapper>
          <a
            href="https://www.linkedin.com/in/igor-santos-avelino-4a47b919b/"
            target="_blank"
            rel="noreferrer"
          >
            <S.Socials src={Linkedin} alt="linkedin" />
          </a>
          <a
            href="https://www.instagram.com/avelinocrf/"
            target="_blank"
            rel="noreferrer"
          >
            <S.Socials src={Instagram} alt="Instagram" />
          </a>
          <a
            href="https://github.com/IaveL/igor-flix/"
            target="_blank"
            rel="noreferrer"
          >
            <S.Socials src={Github} alt="Github" />
          </a>
        </S.SocialsWrapper>
      </S.ContactInfo>
    </S.ContactBox>
  );
}
