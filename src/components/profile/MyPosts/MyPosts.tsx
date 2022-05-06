import React, { ChangeEvent, KeyboardEvent, useState } from "react";
import { ActionTypes } from "../../../redux/state";
import { addPostAC, UpdateNewMessageAC } from "../../dialogs/profile-reducer";
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
const MyPosts = (props: MyPostsType) => {
  const [disabled, SetDisabled] = useState(false)

  const onChangeHandler = (e: ChangeEvent<HTMLTextAreaElement>) => {
    let events = e.currentTarget.value
    props.dispatch(UpdateNewMessageAC(events))
  }

  const onKeyPressHandler = (e: KeyboardEvent<HTMLTextAreaElement>) => {
    if (e.key === 'Enter') {
      props.dispatch(addPostAC())
    }
  }

  let postsElements =
    props.postsData.map((p) => (
      <Post
        key={p.id}
        like={1}
        message={p.message}
        LikesCount={p.LikesCount}
      />
    ));

  return (
    <div className={s.MyPost}>
      <div className={s.postsBlock}>My Post</div>
      <div>
        <textarea
          value={props.newPostText}
          onChange={onChangeHandler}
          onKeyPress={onKeyPressHandler}>
        </textarea>
      </div>
      <div>
        <button disabled={disabled} onClick={() => props.dispatch(addPostAC())}>Add Post</button> *
      </div>
      <div className={s.posts}>{postsElements}</div>
    </div>
  );
};

export default MyPosts;
