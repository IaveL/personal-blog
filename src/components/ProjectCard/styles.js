import styled from "styled-components";

export const Card = styled.article`
    border: solid blue;
    width: 40vw;
    margin: 1rem;
    position: relative;
    height: 40vh;
`
export const GreyBoxes = styled.div`
    background-color: black;
    width: 2vw;
    border-radius: 5px;
    height: 2vh;
`
export const GreyBWrapper = styled.div`
    position: absolute;
    display: flex;
    z-index: 5;
    justify-content: space-evenly;
    right: 0;
    top: 2%;
    width: 10vw;
`