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
  filter: saturate(0)
`;
export const InfoSection = styled.section`
  background-color: rgb(191, 193, 194);
  width: 75vw;
  display: flex;
  flex-direction: column;
  align-items: center;
`;
export const PictureWrapper = styled.div`
    width: fit-content;
`
export const Main = styled.main`
    display: flex;
`