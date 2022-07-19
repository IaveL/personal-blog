import styled, { keyframes } from "styled-components";

export const Appear = keyframes`
  to {
    left: 100%;
  }
`;
export const Sidebar = styled.aside`
  background-color: black;
  min-height: 100vh;
  position: relative;
  width: 25vw;
`;
export const NameTitle = styled.h1`
  color: #fff;
  font-size: 3.5em;
  width: 20vw;
  margin: 0 0 1rem 1rem;
  position: relative;
  ::before,
  ::after {
    content: "";
    position: absolute;
    top: 0px;
    right: 0;
    left: 0;
    bottom: 0;
  }
  ::before {
    background-color: black;
    animation: ${Appear} 1.5s 1s forwards;
  }
  ::after {
    width: 0.125em;
    animation: ${Appear} 1.5s 1s forwards, blink 450ms infinite;
  }
`;
export const NameAndJobWrapper = styled.section`
  /* padding: 1rem; */
  border-radius: 5px;
  width: 30vw;
  position: absolute;
  bottom: 15%;
  left: 15%;
`;

export const JobTitle = styled.h2`
  background-color: yellow;
  font-size: 1.7em;
  text-align: center;
  padding: 0.5rem;
  position: relative;

  ::before,
  ::after {
    content: "";
    position: absolute;
    top: 0;
    right: 0;
    left: 0;
    bottom: 0;
  }
  ::before {
    background-color: yellow;
    animation: ${Appear} 3s 2.5s forwards;
  }
  ::after {
    width: 0.125em;
    animation: ${Appear} 3s 2.5s forwards, blink 450ms infinite;
  }
`;
export const Name = styled.span`
  text-decoration: underline;
`;
export const MyPicture = styled.img`
  width: 25vw;
  padding: 1rem;
  background-color:  rgb(244,202,22);
  border-radius: 50%;
  height: 70vh;
`;
export const InfoSection = styled.section`
  background-color: rgb(191, 193, 194);
  width: 75vw;
  display: flex;
  flex-direction: column;
  align-items: center;
`;
export const PictureWrapper = styled.div`
  width: 45vw;
  display: flex;
  justify-content: space-evenly;
`;
export const Main = styled.main`
  display: flex;
`;
export const SocialMedia = styled.img`
  width: 5vw;
  padding: 0.5rem;
  cursor: pointer;
  :hover {
    transition: background-color 0.5s ease-in;
    background-color: wheat;
  }
`;
export const SocialMediaWrapper = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: space-evenly;
`;
