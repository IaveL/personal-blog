import styled from "styled-components";

export const Header = styled.header`
  width: 100%;
  height: 10vh;
  background-color: rgb(172, 172, 172);
  margin: 0 0 5rem 0;
  display: flex;
  align-items: center;
`;
export const Navbar = styled.ul`
  display: flex;
  justify-content: space-evenly;
  width: 75vw;
`;
export const NavItem = styled.li`
  border: solid rgba(0, 0, 0, 0);
  color: #fff;
  width: 10%;
  text-align: center;
  font-weight: 400;
  font-size: 1.5em;
  cursor: pointer;
  :hover {
    transition: border 1s ease-out;
    border-bottom: solid 2px yellow;
  }
`;
