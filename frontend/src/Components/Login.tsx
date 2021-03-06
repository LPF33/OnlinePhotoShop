import * as React from "react";
import {
    MainScreenWrapper,
    MainGoLink,
    FormElement,
    Error,
    Headline,
} from "../Style/AuthScreen.styles";
import Loading from "./Loading";
import useNoResizeOnFocus from "../CustomHooks/NoResizeOnInput";
import { useDispatch, useSelector } from "react-redux";
import { login, setError } from "../Redux/actions/auth.action";
import { StoreState } from "../Redux/reducers/index.reducer";
import { TLoginState } from "../Redux/reducers/auth.reducer";
import { RouteComponentProps } from "react-router-dom";

interface TLogin {
    email: string;
    password: string;
}

const Login: React.FC<RouteComponentProps> = ({ location, history }) => {
    const [data, setData] = React.useState<TLogin>({ email: "", password: "" });
    const emailRef = React.useRef<HTMLInputElement>(null);
    const redirect = location.search
        ? location.search.split("=")[1]
        : "/profile";
    const dispatch = useDispatch();

    const loginState: TLoginState = useSelector(
        (state: StoreState) => state.login
    );

    React.useEffect(() => {
        if (!loginState.loading) {
            emailRef.current!.focus();
        }
        dispatch(setError(""));
    }, []);

    React.useEffect(() => {
        if (loginState.token) {
            history.push(redirect);
        }
    }, [loginState.token, redirect]);

    useNoResizeOnFocus();

    const handleChange = (e: React.ChangeEvent<HTMLInputElement>): void => {
        const newData = {
            ...data,
            [e.currentTarget.name]: e.currentTarget.value,
        };
        setData(newData);
    };

    const handleSubmit = (e: React.FormEvent<HTMLFormElement>): void => {
        e.preventDefault();
        dispatch(login(data.email, data.password));
    };

    return (
        <MainScreenWrapper>
            {loginState.loading ? (
                <Loading />
            ) : (
                <>
                    <Headline>
                        LOGIN <i className="fas fa-sign-in-alt"></i>
                    </Headline>
                    {loginState.error && <Error>{loginState.error}</Error>}
                    <FormElement onSubmit={handleSubmit}>
                        <input
                            type="text"
                            name="email"
                            placeholder="Your email"
                            onChange={handleChange}
                            value={data.email}
                            ref={emailRef}
                        />
                        <input
                            type="password"
                            name="password"
                            placeholder="Your password"
                            value={data.password}
                            onChange={handleChange}
                            autoComplete="off"
                        />
                        <input type="submit" value="Login" />
                    </FormElement>
                    <MainGoLink to="/registration">
                        No Account? Register today!
                    </MainGoLink>
                </>
            )}
        </MainScreenWrapper>
    );
};

export default Login;
