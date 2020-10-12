import * as React from "react";
import {
    MainScreenWrapper,
    MainGoLink,
    MainFlex,
    FormElement,
} from "../Style/MainScreen";
import Header from "./Header";
import useNoResizeOnFocus from "../CustomHooks/NoResizeOnInput";

interface TLogin {
    email: string;
    password: string;
}

const Login: React.FC = () => {
    const [data, setData] = React.useState<TLogin>({ email: "", password: "" });

    useNoResizeOnFocus();

    const handleChange = (e: React.FormEvent<HTMLInputElement>): void => {
        const newData = {
            ...data,
            [e.currentTarget.name]: e.currentTarget.value,
        };
        setData(newData);
    };

    return (
        <MainScreenWrapper>
            <Header />
            <MainFlex>
                <FormElement>
                    <h1>
                        LOGIN <i className="fas fa-sign-in-alt"></i>
                    </h1>
                    <input
                        type="text"
                        name="email"
                        placeholder="Your email"
                        onChange={handleChange}
                        value={data.email}
                    />
                    <input
                        type="password"
                        name="password"
                        placeholder="Your password"
                        value={data.password}
                        onChange={handleChange}
                        autoComplete="off"
                        // onKeyDown={(e) => {
                        //     if (e.keyCode === 13) {
                        //         handleSubmit(e);
                        //     }
                        // }}
                    />
                    <input type="submit" value="Login" />
                </FormElement>
                <MainGoLink to="/">No Account? Register today!</MainGoLink>
            </MainFlex>
        </MainScreenWrapper>
    );
};

export default Login;
