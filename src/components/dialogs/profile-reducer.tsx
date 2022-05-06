import {v1} from "uuid";
import { ActionTypes, ProfilePageType } from '../../redux/state';

export const PostReducer = (profilePage:ProfilePageType, action: ActionTypes ) => {
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
        case "UPDATE-NEW-TEXT" :
            profilePage.newPostText = action.newText
            return profilePage
        default:
            return profilePage;
    }
};
export const addPostAC =() => {
    return {
        type: "ADD-POST"
    } as const //воспринимать объект как константу
}
export const UpdateNewMessageAC =(newText:string) => {
    return {
        type: "UPDATE-NEW-TEXT",
        newText: newText
    } as const
}