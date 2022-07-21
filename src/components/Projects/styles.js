import styled from "styled-components";

export const WorkSection = styled.section`
    min-height: 100vh;
    min-width: 100vw;
    background-color: rgb(220, 220, 220);
`
export const CardsWrapper = styled.div`
    display: flex;
    flex-wrap: wrap;
    margin: 2rem 0 0 0;
    justify-content: space-evenly;
    align-items: center;
    @media(max-width: 768px){
        flex-direction: column;    
    }
`