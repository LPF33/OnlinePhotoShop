import React from "react";
import Slider from "./Components/Slider";
import Footer from "./Components/Footer";
import styled from "styled-components";

const BodyWrapper = styled.div`
    position: relative;
    width: 100vw;
    height: 100vh;
    background-image: radial-gradient(circle, black, rgb(1, 103, 187));
    background-image: -o-radial-gradient(circle, black, rgb(1, 103, 187));
    overflow: hidden;

    display: flex;
    flex-direction: column;
    align-items: center;
`;

const App: React.FC = () => {
    return (
        <BodyWrapper>
            <Slider />
            <Footer />
        </BodyWrapper>
    );
};

export default App;
