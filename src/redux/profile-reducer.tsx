import { v1 } from "uuid";
import { ActionTypes, ProfilePageType } from "./state";

let initialState = { //вначале в profilepage будет undefined, нужно прописать начальное значение  
    postsData: [
        { id: v1(), message: "Hi how are you", LikesCount: 163 },
        { id: v1(), message: "Its my Life", LikesCount: 83 },
        { id: v1(), message: "HaveAreYou", LikesCount: 1 },
    ],
    newPostText: " ",
}

export const PostReducer = (profilePage : ProfilePageType = initialState, action: ActionTypes) => {
    switch (action.type) {
        case "ADD-POST":
            const newPost = {
                id: v1(),
                message: profilePage.newPostText,
                LikesCount: 14
            }
            profilePage.postsData.unshift(newPost)
            profilePage.newPostText = '';
            return profilePage;
        case "UPDATE-NEW-TEXT":
            profilePage.newPostText = action.newText
            return profilePage
        default:
            return profilePage;
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