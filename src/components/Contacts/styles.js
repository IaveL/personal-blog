import styled from "styled-components";

export const ContactBox = styled.section`
    background-color: rgb(220,220,220);
    min-width: 100vw;
    min-height: 100vh;
`
export const ContactInfo = styled.article`
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    height: 90vh;
    @media (max-width: 320px) {
        height: 100vh;
        font-size: 1.2em;
    }
`
export const Socials = styled.img`
    width: 5vw;
    :hover{
        transform: scale(1.1);
    }
    @media (max-width: 425px) {
        width: 10vw;
    }
`
export const SocialsWrapper = styled.div`
    display: flex;
    width: 25vw;
    margin: 2rem 0 0 0;
    justify-content: space-evenly;
    @media (max-width: 425px) {
        width: 40vw;
    }
`