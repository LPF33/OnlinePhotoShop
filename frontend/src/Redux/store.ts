import { createStore, applyMiddleware } from "redux";
import { composeWithDevTools } from "redux-devtools-extension";
import thunk from "redux-thunk";
import { reducers } from "./reducers/index";

const initalState = localStorage.getItem("cart")
    ? localStorage.getItem("address")
        ? {
              cart: JSON.parse(localStorage.getItem("cart")!),
              address: JSON.parse(localStorage.getItem("address")!),
          }
        : { cart: JSON.parse(localStorage.getItem("cart")!) }
    : undefined;

const store = createStore(
    reducers,
    initalState,
    composeWithDevTools(applyMiddleware(thunk))
);

export default store;
