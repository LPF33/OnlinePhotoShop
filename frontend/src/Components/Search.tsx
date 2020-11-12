import * as React from "react";
import axios, { Canceler, CancelTokenStatic } from "axios";
import { RouteComponentProps, Link } from "react-router-dom";
import Rating from "./Rating";
import Loading from "./Loading";
import { useDispatch } from "react-redux";
import {
    updateCart,
    ECartUpdate,
    TProductItem,
} from "../Redux/actions/cart.action";
import { TFetchCategoryItems } from "./Category";
import {
    SearchBar,
    SearchWrapper,
    NoSearch,
    More,
} from "../Style/Search.styles";
import { CategoryListItem } from "../Style/Category.styles";

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

    // Cancel axios requests when new input
    const CancelToken: CancelTokenStatic = axios.CancelToken;
    const cancelAxios = React.useRef<Canceler | null>(null);

    const [result, setSearch] = React.useState<TProductItem[]>([]);
    const [inputText, setInputText] = React.useState<string>(search);
    const [loading, setLoading] = React.useState<boolean>(true);
    const [noMoreProducts, setNoMore] = React.useState<boolean>(false);
    const [scroll, setScroll] = React.useState<boolean>(false);

    React.useEffect(() => {
        setNoMore(false);
        setScroll(false);

        (async () => {
            let response: TResponse | null = null;

            try {
                response = await axios.get<TFetchCategoryItems>(
                    !inputText
                        ? `/api/searchproducts/all`
                        : `/api/searchproducts/${inputText}`,
                    {
                        cancelToken: new CancelToken(function executor(c) {
                            cancelAxios.current = c;
                        }),
                    }
                );
            } catch (error) {
                if (axios.isCancel(error)) {
                    setLoading(false);
                    return setSearch([]);
                }
            }

            setLoading(false);
            if (response && response.data.success) {
                return setSearch(response.data.result);
            } else {
                return setSearch([]);
            }
        })();

        return () => {
            if (cancelAxios.current) {
                cancelAxios.current();
                cancelAxios.current = null;
            }
        };
    }, [inputText]);

    const fillCart = (item: number): void => {
        dispatch(updateCart(item, ECartUpdate.Increment));
    };

    const loadData = async (): Promise<void> => {
        setLoading(true);
        const response: TResponse = await axios.get<TFetchCategoryItems>(
            !inputText
                ? `/api/searchproducts/all/${result[result.length - 1].id}`
                : `/api/searchproducts/${inputText}/${
                      result[result.length - 1].id
                  }`,
            {
                cancelToken: new CancelToken(function executor(c) {
                    cancelAxios.current = c;
                }),
            }
        );

        setLoading(false);
        if (response.data.success && response.data.result) {
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
                                    onClick={() => fillCart(item.id)}
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
