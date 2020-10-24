import * as React from "react";
import { Link } from "react-router-dom";
import Rating from "./Rating";
import { useDispatch, useSelector } from "react-redux";
import { StoreState } from "../Redux/reducers/index";
import { TCategoryState } from "../Redux/reducers/category";
import { updateCart, ECartUpdate, TProductItem } from "../Redux/actions/cart";
import { removeFromWishlist } from "../Redux/actions/category";
import {
    CategoryWrapper,
    CategoryListItem,
    RemoveItemWishlist,
    WishlistNoItem,
} from "../Style/Category";

const Wishlist: React.FC = () => {
    const dispatch = useDispatch();

    const state: TCategoryState = useSelector(
        (state: StoreState) => state.categories
    );

    const fillCart = (item: number) => {
        dispatch(updateCart(item, ECartUpdate.Increment));
    };

    return (
        <CategoryWrapper>
            {state.wishlist.length === 0 ? (
                <WishlistNoItem>No items in your wishlist</WishlistNoItem>
            ) : (
                state.wishlist.map((item) => {
                    return (
                        <CategoryListItem key={item.id}>
                            <Link to={`/product/${item.categories}/${item.id}`}>
                                <img src={item.image} />
                                <div>{item.name}</div>
                            </Link>
                            {item.rating > 0 && <Rating rating={item.rating} />}
                            <p>
                                <em>{item.price}€</em>
                                <i
                                    className="fas fa-cart-plus"
                                    onClick={() => fillCart(item.id)}
                                ></i>
                            </p>
                            <RemoveItemWishlist
                                onClick={() =>
                                    dispatch(removeFromWishlist(item.id))
                                }
                            >
                                <i className="fas fa-trash-alt"></i>
                            </RemoveItemWishlist>
                        </CategoryListItem>
                    );
                })
            )}
        </CategoryWrapper>
    );
};

export default Wishlist;
