import styled from "styled-components";

export const About = styled.section`
  background-color: rgb(220, 220, 220);
  width: 100vw;
  min-height: 100vh;
  overflow: hidden;
`;

export const AboutContainer = styled.section`
  display: flex;
  margin: 3rem 0 0 0;
  align-items: center;
  justify-content: space-evenly;
  @media (max-width: 1440px) {
    justify-content: space-evenly;
  }
  @media (max-width: 1024px) {
    height: 100vh;
  }

  @media (max-width: 768px) {
    flex-direction: column;
    justify-content: space-between;
    height: 150vh;
  }
  @media(max-width: 425px){
    height: 200vh;
  }
  @media(max-width: 375px){
    height: 220vh;
  }
  @media (max-width: 320px) {
      height: 280vh;
  }
`;

export const AboutTextContainer = styled.section`
  height: 65vh;
  color: white;
  position: relative;
  display: flex;
  flex-direction: column;
  align-items: flex-end;
  justify-content: space-between;
  padding: 1rem;
  background-color: black;
  width: 60vw;
  overflow: hidden;
  @media (max-width: 1440px) {
    width: 50vw;
    height: 75vh;
  }
  @media (max-width: 1024px) {
    width: 65vw;
  }

  @media (max-width: 768px) {
    width: 85vw;
    font-size: 1.2em;
    height: 85vh;
  }
  @media(max-width: 425px){
    width: 95vw;
    height: 130vh;
  }
  @media(max-width: 375px){
    width: 95vw;
    height: 160vh;
  }
  @media (max-width: 320px) {
      height: 200vh;
  }
`;

export const My2ndPic = styled.img`
  border-radius: 0;
  width: 25vw;
  z-index: 999;
  filter: saturate(0);
  background-color: rgb(128, 128, 128);
  position: relative;
  @media (max-width: 1440px) {
    width: 20vw;
  }
  @media (max-width: 1024px) {
    width: 25vw;
    height: 50vh;
  }

  @media (max-width: 768px) {
    width: 60vw;
  }
  @media(max-width: 425px){
    width: 80vw;
  }
`;
export const H2 = styled.h2`
  background-color: rgb(128, 128, 128);
  padding: 0.6rem;
  font-size: 3em;
  text-align: center;
`;
export const PictureWrapper = styled.div`
  position: relative;
  top: 3rem;
`;
export const BlackBox = styled.div`
  position: absolute;
  top: -10%;
  left: -15%;
  background-color: black;
  width: 100%;
  height: 100%;
`;
export const AboutMeText = styled.p`
  font-size: 1.2em;
  background-color: rgb(128, 128, 128);
  border-radius: 5px;
  padding: 0.75rem;
`;
export const InstagramLink = styled.a`
  background-color: black;
`;
export const WhiteBoxes = styled.div`
  background-color: white;
  height: 3vh;
  border-radius: 5px;
  border: solid yellow;
  width: 2vw;
`;
export const WhiteBoxesWrapper = styled.div`
  position: absolute;
  left: 0;
  display: flex;
  justify-content: space-around;
  width: 10vw;
`;
