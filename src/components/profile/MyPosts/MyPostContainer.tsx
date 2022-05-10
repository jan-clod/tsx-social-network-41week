import React, { ChangeEvent, KeyboardEvent, useState } from "react";
import { ActionTypes } from "../../../redux/state";
import { addPostAC, UpdateNewMessageAC } from "../../dialogs/profile-reducer";
import MyPosts from "./MyPosts";
import s from "./MyPosts.module.css";
import Post from "./Post/Post";

type MyPostsType = {
    postsData: Array<PostsData>
    newPostText: string
    dispatch: (action: ActionTypes) => void
}
type PostsData = {
    id: string
    message: string
    LikesCount: number
}
export const MyPostsContainer = (props: MyPostsType) => {

    const addPost = () => {
        addPostAC()
        props.dispatch(addPostAC())
    }
    const onPostChange = (text:string) => {
        let action = UpdateNewMessageAC(text)
        props.dispatch(action)
    }
    return (
        {/* <MyPosts updateNewPostChange={onPostChange} addPost={addPost} /> */}
    );
};

