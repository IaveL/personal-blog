import styled from "styled-components";

export const About = styled.section`
  background-color: rgb(220, 220, 220);
  min-height: 100vh;
  display: flex;
  align-items: center;
  justify-content: space-evenly;
`;
export const AboutTextContainer = styled.section`
  font-size: 1.4em;
  height: 55vh;
  display: flex;
  flex-direction: column;
  align-items: flex-end;
  justify-content: space-around;
  padding: 1rem;
  width: 55vw;
`;

export const My2ndPic = styled.img`
  border-radius: 0;
  width: 25vw;
  z-index: 999;
  filter: saturate(0);
  background-color: rgb(220, 220, 220);
  position: relative;
`;
export const H2 = styled.h2`
  background-color: yellow;
  padding: 0.6rem;
  width: 5vw;
  
  text-align: center;
`;
export const PictureWrapper = styled.div`
    position: relative;
    top: 3rem;
`
export const BlackBox = styled.div`
    position: absolute;
    top: -10%;
    left: -15%;
    background-color: black;
    width: 100%;
    height: 100%;
`