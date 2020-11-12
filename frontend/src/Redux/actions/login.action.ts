import { Dispatch } from "redux";
import axios from "axios";

export enum ELoginActions {
    Login_Loading = "loading",
    Login_Success = "login succeded",
    Login_Error = "error while login",
    Logout = "user logout",
}

export interface TFetchLoginData {
    success: boolean;
    token: string;
    error: string;
}

export interface TLoginLoadingAction {
    type: ELoginActions.Login_Loading;
}

export interface TLoginErrorAction {
    type: ELoginActions.Login_Error;
    payload: string;
}

export interface TLoginSuccessAction {
    type: ELoginActions.Login_Success;
    payload: string;
}

export const login = (email: string, password: string) => {
    return async (dispatch: Dispatch) => {
        try {
            dispatch<TLoginLoadingAction>({
                type: ELoginActions.Login_Loading,
            });

            const {
                data: { token, error, success },
            } = await axios.post<TFetchLoginData>("/api/auth/login", {
                email,
                password,
            });

            if (error) {
                throw new Error(error);
            }

            if (token) {
                dispatch<TLoginSuccessAction>({
                    type: ELoginActions.Login_Success,
                    payload: token,
                });
            }
        } catch (err) {
            dispatch<TLoginErrorAction>({
                type: ELoginActions.Login_Error,
                payload: err.message,
            });
        }
    };
};

export interface TLogoutAction {
    type: ELoginActions.Logout;
}

export const logout = (): TLogoutAction => {
    return {
        type: ELoginActions.Logout,
    };
};
