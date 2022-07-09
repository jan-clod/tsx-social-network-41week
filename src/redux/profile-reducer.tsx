import { v1 } from "uuid";

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
};
export type ActionTypes =
    | ReturnType<typeof addPost>
    | ReturnType<typeof updateNewMessage>
    | ReturnType<typeof setUserProFile>

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
                large: 'https://sun2.beltelecom-by-minsk.userapi.com/s/v1/if1/c3opGqEc6rlIs1s1heXXe6z7s3RnR_8TNCap2uGTlwJwc21_SRc6__84sSbCWToYpTxqxJJZ.jpg?size=200x200&quality=96&crop=236,0,607,607&ava=1' ,
            },
            status: null,
            followed: false
        }]
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