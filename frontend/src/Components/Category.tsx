import * as React from "react";
import axios from "axios";
import { RouteComponentProps, Link } from "react-router-dom";
import Rating from "./Rating";
import { useDispatch } from "react-redux";
import { updateCart, ECartUpdate, TProductItem } from "../Redux/actions/cart";

import { CategoryWrapper, CategoryListItem } from "../Style/Category";

interface TFetchCategoryItems {
    success: boolean;
    result: TProductItem[];
}

type CategoryProps = {
    category: string;
};

const Category: React.FC<RouteComponentProps<CategoryProps>> = ({
    match: { params },
}) => {
    const [loading, setLoading] = React.useState<boolean>(true);
    const [items, setItems] = React.useState<TProductItem[]>();
    const dispatch = useDispatch();

    React.useEffect(() => {
        (async () => {
            const {
                data: { success, result },
            } = await axios.get<TFetchCategoryItems>(
                `/api/category/${params.category}`
            );
            if (success && result.length > 0) {
                setItems(result);
            } else {
                setItems(undefined);
                setLoading(false);
            }
        })();
    }, [params]);

    const fillCart = (item: TProductItem) => {
        dispatch(updateCart(item, ECartUpdate.Increment));
    };

    if (!items || items.length === 0) {
        return loading ? (
            <div>Loading</div>
        ) : (
            <div>No items in this category</div>
        );
    } else {
        return (
            <CategoryWrapper>
                {items.map((item) => {
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
                                    onClick={() => fillCart(item)}
                                ></i>
                            </p>
                        </CategoryListItem>
                    );
                })}
            </CategoryWrapper>
        );
    }
};

export default Category;
