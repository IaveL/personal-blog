import styled from "styled-components";

export const Card = styled.article`
    width: 33vw;
    background-image: url(${props => props.img});
    background-size: contain;
    background-repeat: no-repeat;
    background-position: center;
    margin: 1rem;
    position: relative;
    height: 40vh;
    :hover{
        transform: scale(1.1);
    }
    @media(max-width: 768px){
        width: 45vw;
        height: 50vh;   
    }
    @media(max-width: 425px){
        width: 85vw;
    }
    @media(max-width: 320px){
        height: 60vh;
    }
`
export const GreyBoxes = styled.div`
    background-color: rgb(220, 220, 220);
    width: 2vw;
    position: absolute;
    top: 0.5rem;
    left: 0.5rem;
    height: 2vh;
`

export const ProjectName = styled.h2`
    color: white;
    text-align: center;
    background-color: grey;
    position: absolute;
    bottom: 0;
    width: 100%;
`