import styled from "styled-components";

export const MainContainer = styled.section`
    display: flex;
    flex-direction: column;
    align-items: center;
`;

export const CharacterListContainer = styled.div`
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    width: 100%;
    border-top: dashed black 1px;
`;

export const SearchForm = styled.form`
    display: flex;
    justify-content: space-evenly;
    margin-bottom: 1%;
    width: 350px;
`;

export const Card = styled.div`
    border: solid black 1px;
    margin: 1%;
    display: flex;
    flex-direction: column;
    background-color: beige;
`;

export const IndividualList = styled.div`
    width: 100%;
    text-decoration: none;
    color: black;
    margin: 0.2%;
`;

export const StatContainer = styled.div`
    font-weight: bold;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    margin: 1%;
    font-size: 1.5rem;
`;

export const Stat = styled.span`
    font-weight: normal;
    font-size: 1rem;
`;