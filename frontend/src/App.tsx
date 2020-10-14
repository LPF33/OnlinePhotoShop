import React from "react";
import styled from "styled-components";
import { BrowserRouter, Switch, Route, Redirect } from "react-router-dom";

import Header from "./Components/Header";
import Slider from "./Components/Slider";
import NavMenu from "./Components/NavMenu";
import Menu from "./Components/Menu";
import Login from "./Components/Login";
import Category from "./Components/Category";
import Product from "./Components/Product";
import Cart from "./Components/Cart";
import Shipping from "./Components/Shipping";
import BillingAddress from "./Components/BillingAddress";
import Payment from "./Components/Payment";
import Order from "./Components/Order";

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
                <Header />
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
                    <Route
                        exact
                        path="/product/:category/:id"
                        component={Product}
                    />
                    <Route exact path="/mybasket" component={Cart} />
                    <Route exact path="/shipping" component={Shipping} />
                    <Route
                        exact
                        path="/billingaddress"
                        component={BillingAddress}
                    />
                    <Route exact path="/payment" component={Payment} />
                    <Route exact path="/order" component={Order} />
                    <Route render={() => <Redirect to="/" />}></Route>
                </Switch>
                <NavMenu />
            </BodyWrapper>
        </BrowserRouter>
    );
};

export default App;
