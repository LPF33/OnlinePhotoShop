import styled, { css } from "styled-components";

function createCSS() {
    let styles: string = "";

    for (let i: number = 0; i <= 5; i++) {
        styles += `
       .loading-circle${i}{
        width: 20px;
        height: 30vw;
        max-height: 120px;
        position: absolute;
        top:-20px;
        left:50%;
        animation: rotate 3s linear forwards infinite ;
        animation-delay: ${0.15 * i}s;
        transform-origin: bottom center;

        .circle${i}{
            width: 20px;
            height: 20px;
            transform: scale(0.4);
            background-color: rgb(165, 110, 110);
            border-radius: 50%;
            animation: circle 3s linear forwards infinite alternate;
            animation-delay: ${0.5 * i}s;
        }
    }        
       `;
    }

    return css`
        ${styles}
    `;
}

export const LoadingElement = styled.div`
    position: absolute;
    top: 50%;
    left: 50%;
    width: 50vw;
    max-width: 200px;
    height: 50vw;
    max-height: 200px;
    transform: translate(-50%, -50%);
    z-index: 5;

    ${createCSS()}

    @keyframes rotate {
        0% {
            transform: translateX(-50%) rotate(0deg);
        }
        100% {
            transform: translateX(-50%) rotate(360deg);
        }
    }

    @keyframes circle {
        0% {
            transform: scale(0.4);
        }
        100% {
            transform: scale(1.2);
        }
    }
`;

export const Text = styled.p`
    position: absolute;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);
    width: 90%;
    height: 90%;
    font-size: 1.5em;
    color: white;
    background-color: rgba(255, 255, 255, 0.2);
    border-radius: 50%;
    display: flex;
    align-items: center;
    justify-content: center;
`;
