import {
    TLoginErrorAction,
    TLoginLoadingAction,
    TLoginSuccessAction,
    TLogoutAction,
    ELoginActions,
} from "../actions/auth.action";

interface TJWToken {
    id: number;
    name: string;
    isAdmin: boolean;
    exp: number;
    iat: number;
}

export interface TLoginState {
    loading: boolean;
    token: string;
    error: string;
    id: number | null;
    name: string;
    isAdmin: boolean;
}

export const initialState: TLoginState = {
    loading: false,
    token: "",
    error: "",
    id: null,
    name: "",
    isAdmin: false,
};

export const loginReducer = (
    state = initialState,
    action:
        | TLoginErrorAction
        | TLoginLoadingAction
        | TLoginSuccessAction
        | TLogoutAction
): TLoginState => {
    let newState: TLoginState = { ...state };

    switch (action.type) {
        case ELoginActions.Login_Loading:
            newState.loading = true;
            break;
        case ELoginActions.Login_Success:
            const { id, name, isAdmin } = JSON.parse(
                atob(action.payload.split(".")[1])
            ) as TJWToken;
            newState = {
                loading: false,
                token: action.payload,
                error: "",
                id,
                name,
                isAdmin,
            };
            break;
        case ELoginActions.Login_Error:
            newState.loading = false;
            newState.error = action.payload;
            break;
        case ELoginActions.Logout:
            newState = {
                loading: false,
                token: "",
                error: "",
                id: null,
                name: "",
                isAdmin: false,
            };
            break;
        default:
            break;
    }

    return newState;
};
