import { v1 } from "uuid";

export type UserStateType = {
    users: Array<UserType>
    pageSize: number
    totalUserCount: number
    currentPage: number
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
    | ReturnType<typeof followAC>
    | ReturnType<typeof unfollowAC>
    | ReturnType<typeof setUsersAC>
    | ReturnType<typeof setCurrentPageAC>
    | ReturnType<typeof setTotalUserCountAC>

let initialState: UserStateType = {
    users: [
        {
            id: v1(),
            followed: false,
            photos: {
                small: "https://i.pinimg.com/550x/31/23/2f/31232fe4b51b47763282524f008d9081.jpg",
                large: ''
            },
            name: 'Anana',
            status: 'Bathing - дозирование',
            location: [{ city: 'Pinsk', country: 'Belarus' }]
        },
        {
            id: v1(),
            followed: true,
            photos: {
                small: "https://s.ws.pho.to/img/index/ai/source.jpg",
                large: ''
            },
            name: 'Oil',
            status: 'детерминированость',
            location: [{ city: 'Grodno', country: 'Belarus' }]
        },
        {
            id: v1(),
            followed: false,
            photos: {
                small: "https://images.unsplash.com/photo-1626847152272-c64724db41c4?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwcm9maWxlLXBhZ2V8Mnx8fGVufDB8fHx8&w=1000&q=80",
                large: ''
            },
            name: 'Main',
            status: 'Иммутабельность',
            location: [{ city: 'Reikiiavick', country: 'hz' }]
        },
    ],
    pageSize: 20,
    totalUserCount: 0,
    currentPage: 3
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
            return {...state, currentPage: action.currentPage}
        }
        case "SET_TOTAL_USER_COUNT": {
            return {...state, totalUserCount: action.totalCount}
        }
        default:
            return { ...state }



    }
};
export const followAC = (userId: string) => {
    return {
        type: "FOLLOW",
        userId: userId
    } as const //воспринимать объект как константу
}
export const unfollowAC = (userId: string) => {
    return {
        type: "UNFOLLOW",
        userId: userId
    } as const
}
export const setUsersAC = (users: Array<UserType>) => {
    return {
        type: "SET_USERS",
        users: users
    } as const
}
export const setCurrentPageAC = (currentPage : number) => {
    return {
        type: "SET_CURRENT_PAGE",
        currentPage: currentPage
    } as const
}
export const setTotalUserCountAC = (totalCount : number) => {
    return {
        type: "SET_TOTAL_USER_COUNT",
        totalCount: totalCount
    } as const
}