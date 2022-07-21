import styled from "styled-components";

export const Header = styled.header`
  width: 100%;
  height: 10vh;
  background-color: rgb(172, 172, 172);
  display: flex;
  justify-content: center;
  align-items: center;
  @media(max-width: 1440px){
    width: 100vw;
  }
  @media (max-width: 425px) {
        border: solid red;
    }

`;
export const Navbar = styled.ul`
  display: flex;
  justify-content: space-evenly;
  width: 75vw;
  @media(max-width: 425px){
    width: 100vw;
    justify-content: space-around;
  }
  @media (max-width: 320px) {
        justify-content: space-evenly;
    }
`;
export const NavItem = styled.li`
  border: solid rgba(0, 0, 0, 0);
  color: #fff;
  width: 10%;
  text-align: center;
  font-weight: 400;
  font-size: 1.3em;
  cursor: pointer;
  :hover {
    transition: border 1s ease-out;
    border-bottom: solid 2px yellow;
  }
  @media(max-width: 425px){
    font-size: 0.8em;
  }
`;
