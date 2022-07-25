import { v1 } from "uuid";
import { profileApi, usersApi } from "../api/api";

export type PostsDataType = {
    id: string;
    message: string;
    LikesCount: number;
};
export type PhotosType = {
    small: string | null
    large: string | null
}
export type ProfileItemsType = {
    name: string
    id: number | null
    photos: PhotosType
    status: string | null
    followed: false
}
export type ProfilePageType = {
    postsData: Array<PostsDataType>
    newPostText: string
    profile: ProfileItemsType[]
    status: string
};
export type ActionTypes =
    | ReturnType<typeof addPost>
    | ReturnType<typeof updateNewMessage>
    | ReturnType<typeof setUserProFile>
    | ReturnType<typeof setStatus>

let initialState: ProfilePageType = { //вначале в profilepage будет undefined, нужно прописать начальное значение  
    postsData: [
        { id: v1(), message: "Hi how are you", LikesCount: 163 },
        { id: v1(), message: "Its my Life", LikesCount: 83 },
        { id: v1(), message: "HaveAreYou", LikesCount: 1 },
    ],
    newPostText: " ",
    profile: [
        {
            name: "",
            id: null,
            photos: {
                small: null,
                large: 'https://sun2.beltelecom-by-minsk.userapi.com/s/v1/if1/c3opGqEc6rlIs1s1heXXe6z7s3RnR_8TNCap2uGTlwJwc21_SRc6__84sSbCWToYpTxqxJJZ.jpg?size=200x200&quality=96&crop=236,0,607,607&ava=1',
            },
            status: null,
            followed: false
        }],
    status: ''
}

export const ProfileReducer = (state: ProfilePageType = initialState, action: ActionTypes): ProfilePageType => {
    switch (action.type) {
        case "ADD_POST": {
            let profilePageCopy = { ...state }
            const newPost = {
                id: v1(),
                message: profilePageCopy.newPostText,
                LikesCount: 14
            }
            profilePageCopy.postsData = [...state.postsData]
            newPost.message && profilePageCopy.postsData.unshift(newPost)
            debugger
            profilePageCopy.newPostText = '';
            return profilePageCopy;
        }
        case "UPDATE_NEW_TEXT": {
            return {
                ...state,
                newPostText: action.newText
            }

        }
        case "SET_USERS_PROFILE": {
            return {
                ...state,
                profile: action.profile
            }

        }
        case "SET_STATUS": {
            return { ...state, status: action.status }
        }
        default: {
            return { ...state }
        }
    }
};

export const addPost = () => {
    return {
        type: "ADD_POST"
    } as const //воспринимать объект как константу
}
export const updateNewMessage = (newText: string) => {
    return {
        type: "UPDATE_NEW_TEXT",
        newText: newText
    } as const
}
export const setUserProFile = (profile: ProfileItemsType[]) => {
    return {
        type: "SET_USERS_PROFILE",
        profile: profile
    } as const
}
export function setStatus(status: string) {
    return {
        type: "SET_STATUS",
        status
    } as const
}

export function getUserProFileTC(userId: number) {
    return (dispatch: (param: ActionTypes) => void) => {
        usersApi.getProfile(userId)
            .then(response => {
                if (response.data.resultCode === 0) {
                    dispatch(setUserProFile(response.data))
                }
            })
    }
}
export function getStatusTC(userId: number) {
    return (dispatch: (param: ActionTypes) => void) => {
        profileApi.getStatus(userId)
            .then(response => {
                dispatch(setStatus(response.data))
            })
    }
}
export function updateStatusTC(status: string) {
    return (dispatch: (param: ActionTypes) => void) => {
        profileApi.updateStatus(status)
            .then(response => {
                if(response.data === 0)
                {dispatch(setStatus(response.data))}
            })
    }
}