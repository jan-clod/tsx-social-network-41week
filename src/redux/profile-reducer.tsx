import { v1 } from "uuid";

export type PostsDataType = {
    id: string;
    message: string;
    LikesCount: number;
};

export type ProfilePageType = {
    postsData: Array<PostsDataType>;
    newPostText: string;
};

export type ActionTypes =
    | ReturnType<typeof addPostAC>
    | ReturnType<typeof UpdateNewMessageAC>

let initialState = { //вначале в profilepage будет undefined, нужно прописать начальное значение  
    postsData: [
        { id: v1(), message: "Hi how are you", LikesCount: 163 },
        { id: v1(), message: "Its my Life", LikesCount: 83 },
        { id: v1(), message: "HaveAreYou", LikesCount: 1 },
    ],
    newPostText: " ",
}

export const PostReducer = (profilePage: ProfilePageType = initialState, action: ActionTypes) => {
    switch (action.type) {
        case "ADD-POST": {
            let profilePageCopy = { ...profilePage }
            const newPost = {
                id: v1(),
                message: profilePageCopy.newPostText, 
                LikesCount: 14
            }
            profilePageCopy.postsData = [...profilePage.postsData]
            newPost.message && profilePageCopy.postsData.unshift(newPost)
            debugger
            profilePageCopy.newPostText = '';
            return profilePageCopy;
        }
        case "UPDATE-NEW-TEXT": {
            return { 
                ...profilePage, 
                newPostText: action.newText 
            }
            
        }
        default: {
            return { ...profilePage }
        }

    }
};
export const addPostAC = () => {
    return {
        type: "ADD-POST"
    } as const //воспринимать объект как константу
}
export const UpdateNewMessageAC = (newText: string) => {
    return {
        type: "UPDATE-NEW-TEXT",
        newText: newText
    } as const
}