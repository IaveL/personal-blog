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
  @media(max-width: 1440px){
    width: 20vw; 
  }
  @media (max-width: 768px) {
    width: 10vw;
  }
  
  @media (max-width: 425px) {
    width: 0; 
  }
`;
export const NameTitle = styled.h1`
  color: #fff;
  font-size: 3.5em;
  width: 20vw;
  margin: 0 0 1rem 1rem;
  position: relative;
  @media(max-width: 1440px){
    width: 30vw;
  }
  @media (max-width: 1024px) {
      width: 35vw; 
  }
  
  @media (max-width: 768px) {
    width: 50vw; 
  }
  
  @media (max-width: 425px) {
    width: 95vw; 
    font-size: 3em;
  }
  @media(max-width: 375px){
    width: 100vw;
    font-size: 3em;
    top: 5%;
  }
  @media(max-width: 320px){
    font-size: 2.5em;
  }
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
    
  @media (max-width: 425px) {
    background-color:  rgb(191, 193, 194);
  }
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
  @media (max-width: 1024px) {
    left: 5%; 
  }
  @media (max-width: 768px) {
    top: 10%;
    width: 65vw;
  }
  @media(max-width: 425px){
    width: 75vw;
  }
  @media(max-width: 375px){
    width: 85vw;
    top: 12%;
  }
`;

export const JobTitle = styled.h2`
  background-color: yellow;
  font-size: 1.7em;
  text-align: center;
  padding: 0.5rem;
  position: relative;

  @media (max-width: 768px) {
    top: 45vh;
  }
  
  @media (max-width: 425px) {
    top: 55vh; 
  }
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
  @media(max-width: 1440px){
   width: 20vw;
   height: 40vh;
  }
  @media (max-width: 1024px) {
      width: 35vw;
      height: 50vh; 
  }
  @media (max-width: 768px) {
      width: 50vw;
  }
  
  @media (max-width: 425px) {
    width: 75vw; 
  }
  @media(max-width: 375px){
    width: 100vw;
  }
`;
export const InfoSection = styled.section`
  background-color: rgb(191, 193, 194);
  width: 75vw;
  display: flex;
  flex-direction: column;
  align-items: center;
  overflow: hidden;
  @media(max-width: 1440px){
   width: 80vw; 
  }
  
  @media (max-width: 768px) {
    width: 90vw;
  }
  
  @media (max-width: 425px) {
    width: 100vw; 
  }
  @media(max-width: 425px){
    height: 100vh;
  }
`;
export const PictureWrapper = styled.div`
  width: 45vw;
  height: 100%;
  display: flex;
  align-items: center;
  justify-content: space-evenly;
`;
export const Main = styled.main`
  display: flex;
`;
export const SocialMedia = styled.img`
  width: 5vw;
  padding: 0.5rem;
  cursor: pointer;
  
  @media (max-width: 768px) {
    width: 8vw; 
  }
  
  @media (max-width: 425px) {
    display: none; 
  }
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
