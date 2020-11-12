import styled from "styled-components";

export const SearchWrapper = styled.div`
    position: absolute;
    top: 8vh;
    left: 0;
    width: 100%;
    height: 82vh;
    background-color: rgb(0, 0, 0, 0.5);
    display: flex;
    flex-wrap: wrap;
    justify-content: center;
    align-items: center;
    padding: 10px;
    border: 10px solid black;
    border-top: 0;
    overflow: auto;
`;

export const SearchBar = styled.input`
    width: 100%;
    font-size: 1.5rem;
    text-align: center;
    margin: 2px;
    height: 2.1rem;
    align-self: flex-start;
`;

export const NoSearch = styled.h1`
    color: white;

    & > em {
        color: red;
        margin-right: 2px;
    }
`;

export const More = styled.button`
    color: white;
    display: block;
    width: 100%;
    font-size: 1.5rem;
    border: 2px solid white;

    &:hover {
        background-color: yellow;
        color: black;
    }
`;
