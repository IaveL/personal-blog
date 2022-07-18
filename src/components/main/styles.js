import styled from "styled-components";

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
`;
export const NameAndJobWrapper = styled.section`
  padding: 1rem;
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
`;
export const Name = styled.span`
  text-decoration: underline;
`;
export const MyPicture = styled.img`
  width: 25vw;
  height: 70vh;
`;
export const InfoSection = styled.section`
    background-color: rgb(191, 193, 194);
    border: solid red;
    width: 75vw;
    display: flex;
    flex-direction: column;
    align-items: center;
`;
export const PictureWrapper = styled.div`
    width: 45vw;
    display: flex;
    justify-content: space-evenly;
`
export const Main = styled.main`
    display: flex;
` 
export const SocialMedia = styled.img`
  width: 5vw;
  padding: 0.5rem;
  cursor: pointer;
  :hover{
    transition: background-color 0.5s ease-in;
    background-color: wheat;
  }
`
export const SocialMediaWrapper = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: space-evenly;
`