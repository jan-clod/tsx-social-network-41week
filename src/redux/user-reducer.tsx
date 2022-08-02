import { usersApi } from "../api/api"

export type UserStateType = {
    users: Array<UserType>
    pageSize: number
    totalUserCount: number
    currentPage: number
    isFething: boolean
}
export type PhotoType = {
    small: string
    large: string
}
export type UserType = {
    id: string
    followed: boolean
    photos: PhotoType
    name: string
    status: string
    location: Array<LocationType>;
}
export type LocationType = {
    city: string
    country: string
}
export type ActionTypes =
    | ReturnType<typeof follow>
    | ReturnType<typeof unfollow>
    | ReturnType<typeof setUsers>
    | ReturnType<typeof setCurrentPage>
    | ReturnType<typeof setTotalUserCount>
    | ReturnType<typeof toggleIsFetching>

let initialState: UserStateType = {
    users: [],
    pageSize: 20,
    totalUserCount: 0,
    currentPage: 1,
    isFething: true
}

export const UserReducer = (state: UserStateType = initialState, action: ActionTypes): UserStateType => {
    switch (action.type) {
        case "FOLLOW":
            return {
                ...state,
                users: state.users.map(u => u.id === action.userId ? { ...u, followed: true } : u)
            }
        case "UNFOLLOW":
            return {
                ...state,
                users: state.users.map(u => u.id === action.userId ? { ...u, followed: false } : u)
            }
        case "SET_USERS":
            return {
                ...state, users: [...action.users]
            }
        case "SET_CURRENT_PAGE": {
            return { ...state, currentPage: action.currentPage }
        }
        case "SET_TOTAL_USER_COUNT": {
            return { ...state, totalUserCount: action.totalCount }
        }
        case "TOGGLE_IS_FETCHING": {
            return { ...state, isFething: action.isFething }
        }
        default:
            return { ...state }
    }
};

//action creators
export const follow = (userId: string) => {
    return {
        type: "FOLLOW",
        userId: userId
    } as const //воспринимать объект как константу
}
export const unfollow = (userId: string) => {
    return {
        type: "UNFOLLOW",
        userId: userId
    } as const
}
export const setUsers = (users: Array<UserType>) => {
    return {
        type: "SET_USERS",
        users: users
    } as const
}
export const setCurrentPage = (currentPage: number) => {
    return {
        type: "SET_CURRENT_PAGE",
        currentPage: currentPage
    } as const
}
export const setTotalUserCount = (totalCount: number) => {
    return {
        type: "SET_TOTAL_USER_COUNT",
        totalCount: totalCount
    } as const
}
export const toggleIsFetching = (isFething: boolean) => {
    return {
        type: "TOGGLE_IS_FETCHING",
        isFething: isFething
    } as const
}

//thunci 
export function getUsersThunkCreator(currentPage: number, pageSize: number, term: string) {
    return (dispatch: (param: ActionTypes) => void) => {
        dispatch(toggleIsFetching(true))

        usersApi.getUsers(currentPage, pageSize).then(data => {
            dispatch(toggleIsFetching(false))
            dispatch(setUsers(data.items))
            dispatch(setTotalUserCount(data.totalCount))
        })
    }
}
export function followTC(userId: string) {
    return (dispatch: (param: ActionTypes) => void) => {
        usersApi.followUsers(userId)
            .then(response => {
                if (response.data.resultCode === 0) {
                    dispatch(follow(userId))
                }
            })
    }
}
export function unFollowTC(userId: string) {
    return (dispatch: (param: ActionTypes) => void) => {
        usersApi.unfollowUsers(userId)
            .then(response => {
                if (response.data.resultCode === 0) {
                    dispatch(unfollow(userId))
                }
            })
    }
}