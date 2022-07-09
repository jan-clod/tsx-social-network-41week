import { v1 } from "uuid";

export type trackType = {
    name: string
    preview_url: string
}

export type musicType = {
    track: trackType,
}

export type authType = {
    userId: number | null
    email: string | null
    login: string | null
    isAuth: boolean
}
export type ActionTypes = ReturnType<typeof SetUserDataAC>


let initialState: authType = {
    userId: null,
    email: null,
    login: null,
    isAuth:false
}

export const AuthReducer = (state: authType = initialState, action: ActionTypes): authType => {
    switch (action.type) {
        case "SET_USER_DATA": {

            return {
                ...state,
                ...action.data,
                isAuth: true
            }
        }
        default: {

            return state;
        }
    };
}


export const SetUserDataAC = (
    userId: number | null,
    email: string | null,
    login: string | null,
) => {
    return {
        type: "SET_USER_DATA",
        data: {
            userId,
            email,
            login,
        }
    } as const; //воспринимать объект как константу
}
