import React from "react";
import styled from "styled-components";
import { BrowserRouter, Switch, Route } from "react-router-dom";

import Slider from "./Components/Slider";
import NavMenu from "./Components/NavMenu";
import Menu from "./Components/Menu";
import Login from "./Components/Login";
import Category from "./Components/Category";

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

const App: React.FC = (): JSX.Element => {
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
                    <Route exact path="/menu">
                        <Menu />
                    </Route>
                    <Route
                        exact
                        path="/products/:category"
                        component={Category}
                    />
                </Switch>
                <NavMenu />
            </BodyWrapper>
        </BrowserRouter>
    );
};

export default App;
