import * as React from "react";
import axios from "axios";
import { RouteComponentProps, Link } from "react-router-dom";
import Rating from "./Rating";
import Loading from "./Loading";
import { useDispatch } from "react-redux";
import { updateCart, ECartUpdate, TProductItem } from "../Redux/actions/cart";
import { TFetchCategoryItems } from "./Category";
import { SearchBar, SearchWrapper, NoSearch, More } from "../Style/Search";
import { CategoryListItem } from "../Style/Category";

type TSearchProps = {
    search: string;
};

type TResponse = { data: TFetchCategoryItems };

const SearchProducts: React.FC<RouteComponentProps<TSearchProps>> = ({
    match: { params },
}) => {
    const { search } = params;

    const dispatch = useDispatch();
    const elemRef = React.useRef<HTMLDivElement>(null)!;
    const ignoreAxios = React.useRef<boolean>(false);

    const [result, setSearch] = React.useState<TProductItem[]>([]);
    const [inputText, setInputText] = React.useState<string>(search);
    const [loading, setLoading] = React.useState<boolean>(true);
    const [noMoreProducts, setNoMore] = React.useState<boolean>(false);
    const [scroll, setScroll] = React.useState<boolean>(false);

    React.useEffect(() => {
        ignoreAxios.current = false;
        setNoMore(false);
        setScroll(false);

        (async () => {
            let response: TResponse;
            if (!inputText) {
                response = await axios.get<TFetchCategoryItems>(
                    `/api/searchproducts/all`
                );
            } else {
                response = await axios.get<TFetchCategoryItems>(
                    `/api/searchproducts/${inputText}`
                );
            }

            setLoading(false);
            if (!ignoreAxios.current && response.data.success) {
                setSearch(response.data.result);
            } else {
                setSearch([]);
            }
        })();

        return () => {
            ignoreAxios.current = true;
        };
    }, [inputText]);

    React.useEffect(() => {
        if (elemRef.current) {
            console.log(
                elemRef.current.scrollHeight,
                elemRef.current.clientHeight
            );
        }
    });

    const fillCart = (item: TProductItem): void => {
        dispatch(updateCart(item, ECartUpdate.Increment));
    };

    const loadData = async (): Promise<void> => {
        setLoading(true);
        let response: TResponse;
        if (!inputText) {
            response = await axios.get<TFetchCategoryItems>(
                `/api/searchproducts/all/${result[result.length - 1].id}`
            );
        } else {
            response = await axios.get<TFetchCategoryItems>(
                `/api/searchproducts/${inputText}/${
                    result[result.length - 1].id
                }`
            );
        }

        setLoading(false);
        if (
            response.data.success &&
            response.data.result &&
            !ignoreAxios.current
        ) {
            setSearch((prev) => [...prev, ...response.data.result]);
        } else {
            setNoMore(true);
        }
    };

    const scrollMore = () => {
        if (elemRef.current) {
            setScroll(true);
            const scrollHeight =
                elemRef.current.getBoundingClientRect().height +
                elemRef.current.scrollTop;
            const screenHeight = elemRef.current.scrollHeight;
            if (
                screenHeight - 250 <= scrollHeight &&
                !loading &&
                result.length > 0 &&
                !noMoreProducts
            ) {
                loadData();
            }
        }
    };

    const getMoreData = () => {
        if (!loading && result.length > 0 && !noMoreProducts) {
            loadData();
        }
    };

    return (
        <SearchWrapper ref={elemRef} onScroll={scrollMore}>
            <SearchBar
                type="text"
                placeholder="Search for product"
                value={inputText}
                onChange={(e: React.ChangeEvent<HTMLInputElement>) =>
                    setInputText(e.currentTarget.value)
                }
            />
            {result.length === 0 && (
                <NoSearch>
                    No products found for <em>{inputText}</em> !
                </NoSearch>
            )}
            {result.length > 0 &&
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
                        </CategoryListItem>
                    );
                })}
            {!noMoreProducts &&
                result.length > 0 &&
                !scroll &&
                result.length % 10 === 0 && (
                    <More onClick={getMoreData}>More</More>
                )}
            {loading && <Loading />}
        </SearchWrapper>
    );
};

export default SearchProducts;
