import styled from "styled-components";

export const CategoryWrapper = styled.div`
    position: absolute;
    top: 8vh;
    left: 0;
    width: 100%;
    height: 82vh;
    background-color: rgb(0, 0, 0, 0.5);
    display: flex;
    flex-wrap: wrap;
    justify-content: center;
    padding: 10px;
    border: 10px solid black;
    border-top: 0;
    overflow: auto;
`;

export const CategoryListItem = styled.article`
    width: 50%;
    max-width: 300px;
    max-height: 70vh;
    font-size: 1.5rem;
    text-align: center;
    color: white;
    border-bottom: 1px solid black;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    margin: 5px 0;
    padding: 0.5rem 0;
    transition: transform ease-in 0.5s;

    &:hover {
        background-color: rgb(165, 110, 110);
        color: rgb(255, 255, 255, 0.6);
        transform: scale(1.05);
    }

    & > a {
        color: white;
        cursor: pointer;
        & > img {
            width: 50%;
            max-width: 300px;
        }
    }

    & > p {
        width: 100%;
        display: flex;
        justify-content: space-evenly;

        & > em {
            font-size: 0.9rem;
        }

        & > i {
            font-size: 1.6rem;
            color: white;
            cursor: pointer;

            &:hover {
                color: yellow;
            }
        }
    }
`;

export const ProductWrapper = styled.div`
    position: absolute;
    top: 8vh;
    left: 0;
    width: 100%;
    height: calc(82vh);
    background-color: rgb(0, 0, 0, 0.5);
    display: flex;
    flex-direction: row;
    flex-wrap: wrap;
    justify-content: center;
    align-items: center;
    padding: 10px;    
    border: 10px solid black;
    border-top: 0;
    overflow: auto;
    color: white;

    & > div:first-child {
        display: flex;
        flex-direction: column;  

        & > img {
            width: 100%;
            order: 2;
        }

        & >section{
            order: 1;

            & > h3{
                background-color: black;
                text-align: center;
                padding: 5px;
            }

            & >h4 {
                background-color: red;
                display: table;
                padding: 2px 5px;
            }

            & > i {
                font-size: 1.6rem;
                color: white;
                cursor: pointer;
    
                &:hover {
                    color: yellow;
                }
            }
        }  

    }

    &>div:nth-child(2){
        margin-top: 10px;
        display: block;

        &>button{
            margin-top: 5px;
            background-color: white;
            padding: 5px;
            border-radius: 5px;
            font-size: 1rem;
            &:hover{
                background-color: yellow;
            }
        }

        &>aside{
            margin-top: 5px;
            border-top: 0.5px solid white;
            color: yellow;
        }
    }

    @media screen and (min-width: 768px) {
        flex-direction: column;
        & > div:first-child {
            display: flex;
            flex-direction: row;
    
            & > img {
                max-width: 300px;
                width: 90%;
                order: 1;
                margin-right: 10vw;
            }

            & >section{
                order: 2;
            }
    }
`;

export const RemoveItemWishlist = styled.button`
    font-size: 1.3rem;
    color: red;
    cursor: pointer;

    &:hover {
        color: yellow;
    }
`;
