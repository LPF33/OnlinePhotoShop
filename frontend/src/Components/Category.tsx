import * as React from "react";
import axios from "axios";
import { RouteComponentProps } from "react-router-dom";

interface TCategoryItem {
    id: number;
    name: string;
    image: string;
    description: string;
    brand: string;
    category: string;
    price: number;
    stock: number;
    rating: number;
    numReviews: number;
    categories: string;
}

interface TFetchCategoryItems {
    success: boolean;
    result: TCategoryItem[];
}

type CategoryProps = {
    category: string;
};

const Category: React.FC<RouteComponentProps<CategoryProps>> = ({
    match: { params },
}) => {
    const [loading, setLoading] = React.useState<boolean>(true);
    const [items, setItems] = React.useState<TCategoryItem[]>();

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

    if (!items || items.length === 0) {
        return loading ? (
            <div>Loading</div>
        ) : (
            <div>No items in this category</div>
        );
    } else {
        return (
            <div>
                {items.map((item) => {
                    return (
                        <div key={item.id}>
                            <div>{item.name}</div>
                        </div>
                    );
                })}
            </div>
        );
    }
};

export default Category;
