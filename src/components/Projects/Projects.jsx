import Header from "../Header";
import * as S from "./styles";
import Card from "../ProjectCard";
import projetos from "./projetos";

export default function Projetos() {
  return (
    <>
      <Header />
      <S.WorkSection>
        <h1 style={{textAlign: "center"}}>Meus projetos:</h1>
        <S.CardsWrapper>
          {projetos.map((projeto) => (
            <Card key={projeto.id}
             name={projeto.name} 
             img={projeto.img}
             link={projeto.link} 
             />
          ))}
        </S.CardsWrapper>
      </S.WorkSection>
    </>
  );
}
