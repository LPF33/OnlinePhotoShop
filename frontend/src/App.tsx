import React from "react";
import styled from "styled-components";
import { BrowserRouter, Switch, Route } from "react-router-dom";

import Slider from "./Components/Slider";
import Footer from "./Components/Footer";
import Login from "./Components/Login";

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
        <BrowserRouter>
            <BodyWrapper>
                <Switch>
                    <Route exact path="/">
                        <Slider />
                    </Route>
                    <Route exact path="/login">
                        <Login />
                    </Route>
                </Switch>
                <Footer />
            </BodyWrapper>
        </BrowserRouter>
    );
};

export default App;
