import * as React from "react";
import axios from "axios";
import { RouteComponentProps } from "react-router-dom";
import Rating from "./Rating";
import Loading from "./Loading";
import { useDispatch, useSelector } from "react-redux";
import { updateCart, ECartUpdate, TProductItem } from "../Redux/actions/cart";
import { addToWishlist, removeFromWishlist } from "../Redux/actions/category";
import { StoreState } from "../Redux/reducers/index";
import { ProductWrapper } from "../Style/Category";

interface TProductProps {
    category: string;
    id: string;
}

interface TFetchProduct {
    success: boolean;
    result: TProductItem[];
}

const Product: React.FC<RouteComponentProps<TProductProps>> = ({
    match: { params },
}) => {
    const { category, id } = params;
    const dispatch = useDispatch();

    const onWishlist: boolean = useSelector((state: StoreState) => {
        const index = state.categories.wishlist.findIndex(
            (item) => item.id === parseInt(id)
        );
        if (index === -1) {
            return false;
        } else {
            return true;
        }
    });

    const [loading, setLoading] = React.useState<boolean>(true);
    const [item, setItem] = React.useState<TProductItem[]>();

    React.useEffect(() => {
        (async () => {
            const {
                data: { success, result },
            } = await axios.get<TFetchProduct>(
                `/api/product/${category}/${id}`
            );
            if (success && result.length === 1) {
                setItem(result);
            } else {
                setItem(undefined);
                setLoading(false);
            }
        })();
    }, []);

    const fillCart = (item: TProductItem) => {
        dispatch(updateCart(item, ECartUpdate.Increment));
    };

    if (!item || item.length === 0) {
        return loading ? <Loading /> : <div>No Product found!</div>;
    } else {
        return (
            <ProductWrapper>
                <div>
                    <img src={item[0].image} />
                    <section>
                        <h3>{item[0].name}</h3>
                        <h5>Brand: {item[0].brand}</h5>
                        <h4>{item[0].price}€</h4>
                        <aside>In stock: {item[0].stock}</aside>
                        <Rating rating={item[0].rating} />
                        <i
                            className="fas fa-cart-plus"
                            onClick={() => fillCart(item[0])}
                        ></i>
                    </section>
                </div>
                <div>
                    <p>{item[0].description}</p>
                    {!onWishlist && (
                        <button
                            onClick={() => dispatch(addToWishlist(item[0]))}
                        >
                            <i className="far fa-bookmark"></i> Add to wishlist
                        </button>
                    )}
                    {onWishlist && (
                        <button
                            onClick={() =>
                                dispatch(removeFromWishlist(item[0].id))
                            }
                        >
                            <i className="far fa-bookmark"></i> Remove from
                            wishlist
                        </button>
                    )}
                    <aside>{item[0].numReviews} Reviews</aside>
                    <aside>Kategorie: {item[0].category}</aside>
                </div>
            </ProductWrapper>
        );
    }
};

export default Product;
