import * as React from "react";
import axios from "axios";
import { RouteComponentProps, Link } from "react-router-dom";
import Rating from "./Rating";
import Loading from "./Loading";
import { useDispatch } from "react-redux";
import { updateCart, ECartUpdate, TProductItem } from "../Redux/actions/cart";
import { TFetchCategoryItems } from "./Category";
import { SearchBar, SearchWrapper } from "../Style/Search";
import { CategoryListItem } from "../Style/Category";

type TSearchProps = {
    search: string;
};

const SearchProducts: React.FC<RouteComponentProps<TSearchProps>> = ({
    match: { params },
}) => {
    const { search } = params;

    const dispatch = useDispatch();
    const elemRef = React.useRef<HTMLDivElement>(null)!;

    const [result, setSearch] = React.useState<TProductItem[] | null>(null);
    const [inputText, setInputText] = React.useState<string>(search);
    const [loading, setLoading] = React.useState<boolean>(false);

    React.useEffect(() => {
        let ignore = false;

        (async () => {
            let response;
            if (!inputText) {
                response = await axios.get<TFetchCategoryItems>(
                    `/api/searchproducts/all`
                );
            } else {
                response = await axios.get<TFetchCategoryItems>(
                    `/api/searchproducts/${inputText}`
                );
            }

            if (!ignore && response.data.success) {
                setSearch(response.data.result);
            } else {
                setSearch(null);
            }
        })();

        return () => {
            ignore = true;
        };
    }, [inputText]);

    const fillCart = (item: TProductItem) => {
        dispatch(updateCart(item, ECartUpdate.Increment));
    };

    const scroll = () => {
        if (elemRef.current) {
            const scrollHeight =
                elemRef.current.getBoundingClientRect().height +
                elemRef.current.scrollTop;
            const screenHeight = elemRef.current.scrollHeight;
            if (screenHeight - 250 <= scrollHeight) {
            }
        }
    };

    return (
        <SearchWrapper ref={elemRef} onScroll={scroll}>
            <SearchBar
                type="text"
                placeholder="Search for product"
                value={inputText}
                onChange={(e: React.ChangeEvent<HTMLInputElement>) =>
                    setInputText(e.currentTarget.value)
                }
            />
            {result &&
                result.map((item) => {
                    return (
                        <CategoryListItem key={item.id}>
                            <Link to={`/product/${item.categories}/${item.id}`}>
                                <img src={item.image} alt={item.name} />
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
                            {loading && <Loading />}
                        </CategoryListItem>
                    );
                })}
        </SearchWrapper>
    );
};

export default SearchProducts;
