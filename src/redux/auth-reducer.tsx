import { authApi, usersApi } from "../api/api"

export type trackType = {
    name: string
    preview_url: string
}
export type musicType = {
    track: trackType,
}
export type authType = {

    email: string | null
    login: string | null
    isAuth: boolean
    userId?: number | null
}
export type ActionTypes = ReturnType<typeof SetUserDataAC> | ReturnType<typeof isAuthAC> 

let initialState: authType = {

    email: null,
    login: null,
    isAuth: false,
    userId: null,
}

export const AuthReducer = (state: authType = initialState, action: ActionTypes): authType => {
    switch (action.type) {
        case "SET_USER_DATA": {

            return {
                ...state,
                ...action.data,
                isAuth: true,
            }
        }
        case "IS_AUTH_REDIRECT": {
            return {
                ...state,
                isAuth: !state.isAuth
            }
        }
        default: {

            return state;
        }
    };
}

export const SetUserDataAC = (
    email: string | null,
    nicName: string | null,
    isAuth: boolean,
    userId?: number | null,
) => {
    return {
        type: "SET_USER_DATA",
        data: {
            email,
            nicName,
            isAuth,
            userId,
        }
    } as const; //воспринимать объект как константу
}
export const isAuthAC = (
    isAuth: boolean,
) => {
    return {
        type: "IS_AUTH_REDIRECT",
        data: {
            isAuth,
        }
    } as const; //воспринимать объект как константу
}

export function getAuthUserDataTC() {
    return (dispatch: (param: ActionTypes) => void) => {
        authApi.me()
            .then(response => {
                if (response.data.resultCode === 0) {
                    let { id, email, nikName} = response.data.data
                    dispatch(SetUserDataAC( email, nikName, id))
                   
                }
            })
    }
}

export const logInTC = (email: string, password: string, rememberMe: boolean) => (dispath: any) => {
    authApi.login(email, password, rememberMe)
        .then(response => {
            if (response.data.resultCode === 0) {
                dispath(getAuthUserDataTC())
                dispath(isAuthAC(rememberMe))
            }
        })
}

export const loginOutTC = () => (dispath: any) => {
    authApi.logout()
        .then(response => {
            alert(JSON.stringify(response.data))
            if (response.data.resultCode === 0) {
                dispath(SetUserDataAC( null, null, false, null))
                dispath(isAuthAC(false))
            }
        })
}