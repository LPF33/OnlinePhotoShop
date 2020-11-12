import React from "react";
import {
    MainScreenWrapper,
    MainGoLink,
    FormElement,
    Error,
    Headline,
} from "../Style/AuthScreen.styles";
import Loading from "./Loading";
import useNoResizeOnFocus from "../CustomHooks/NoResizeOnInput";
import {
    checkEmail,
    checkName,
    checkPassword,
} from "../CustomHooks/HelperFunctions";
import { useDispatch, useSelector } from "react-redux";
import { registration, setError } from "../Redux/actions/auth.action";
import { StoreState } from "../Redux/reducers/index.reducer";
import { TLoginState } from "../Redux/reducers/auth.reducer";
import { RouteComponentProps } from "react-router-dom";

interface TStateRegistration {
    email: string;
    name: string;
    password: string;
}

const Registration: React.FC<RouteComponentProps> = ({ location, history }) => {
    const [data, setData] = React.useState<TStateRegistration>({
        email: "",
        name: "",
        password: "",
    });
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
        const emailCheck = checkEmail(data.email);
        if (!emailCheck[0]) {
            dispatch(setError(emailCheck[1]));
            return;
        }
        const nameCheck = checkName("name", data.name);
        if (!nameCheck[0]) {
            dispatch(setError(nameCheck[1]));
            return;
        }
        const passwordCheck = checkPassword(data.password);
        if (!passwordCheck[0]) {
            dispatch(setError(passwordCheck[1]));
            return;
        }
        dispatch(registration(data.email, data.name, data.password));
    };

    return (
        <MainScreenWrapper>
            {loginState.loading ? (
                <Loading />
            ) : (
                <>
                    <Headline>
                        Registration <i className="fas fa-registered"></i>
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
                            type="text"
                            name="name"
                            placeholder="Your name"
                            onChange={handleChange}
                            value={data.name}
                        />
                        <input
                            type="password"
                            name="password"
                            placeholder="Your password"
                            value={data.password}
                            onChange={handleChange}
                            autoComplete="off"
                        />
                        <input type="submit" value="Register" />
                    </FormElement>
                    <MainGoLink to="/login">You have an Account?</MainGoLink>
                </>
            )}
        </MainScreenWrapper>
    );
};

export default Registration;
