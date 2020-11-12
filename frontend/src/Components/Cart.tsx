import * as React from "react";
import {
    CartWrapper,
    CartItemsWrappper,
    CartNextStep,
    CartItem,
} from "../Style/cart.styles";
import { useSelector } from "react-redux";
import { StoreState } from "../Redux/reducers/index.reducer";
import { TCartState } from "../Redux/reducers/cart.reducer";
import { Link } from "react-router-dom";
import { useDispatch } from "react-redux";
import {
    updateCart,
    ECartUpdate,
    TProductItem,
} from "../Redux/actions/cart.action";

const Cart: React.FC = () => {
    const wholeCart: TCartState = useSelector(
        (state: StoreState) => state.cart
    );

    const dispatch = useDispatch();

    const update = (item: number, value: ECartUpdate) => {
        dispatch(updateCart(item, value));
    };

    return (
        <CartWrapper>
            {wholeCart.products.length === 0 ? (
                <CartItemsWrappper>
                    No products in your basket
                </CartItemsWrappper>
            ) : (
                <CartItemsWrappper>
                    {wholeCart.products.map((product) => {
                        return (
                            <CartItem key={product.id}>
                                <img src={product.image} />
                                <section>
                                    <Link
                                        to={`/product/${product.categories}/${product.id}`}
                                    >
                                        {product.name}, {product.brand}
                                    </Link>
                                    <h4>{product.price}€</h4>
                                    <div>
                                        <i
                                            className="fas fa-trash-alt"
                                            onClick={() =>
                                                update(
                                                    product.id,
                                                    ECartUpdate.Remove
                                                )
                                            }
                                        ></i>
                                        <i
                                            className="fas fa-minus-circle"
                                            onClick={() =>
                                                update(
                                                    product.id,
                                                    ECartUpdate.Decrement
                                                )
                                            }
                                        ></i>
                                        <span>{product.counter}</span>
                                        <i
                                            className="fas fa-plus-circle"
                                            onClick={() =>
                                                update(
                                                    product.id,
                                                    ECartUpdate.Increment
                                                )
                                            }
                                        ></i>
                                    </div>
                                </section>
                            </CartItem>
                        );
                    })}
                </CartItemsWrappper>
            )}
            {wholeCart.products.length !== 0 && (
                <CartNextStep>
                    <h3 className="hide">Summary:</h3>
                    <h5 className="hide">
                        {wholeCart.amountItems}{" "}
                        {wholeCart.amountItems === 1 ? "item" : "items"}
                    </h5>
                    <h5 className="hide">Subtotal: {wholeCart.amountPrice}€</h5>
                    <h5 className="hide">Shipping: 4.00€</h5>
                    <h2 className="hide">Total: {wholeCart.total}€</h2>
                    <h6 className="hide">incl. Taxes</h6>
                    <Link to="/shipping" className="hide">
                        Proceed to checkout
                    </Link>
                    <Link to="/menu" className="hide">
                        Continue shopping
                    </Link>

                    <Link to="/shipping" className="mobilehide">
                        Proceed to checkout
                        <h5>Shipping: 4.00€</h5>
                        <h2>Total: {wholeCart.amountPrice + 4}€</h2>
                    </Link>
                </CartNextStep>
            )}
        </CartWrapper>
    );
};

export default Cart;
