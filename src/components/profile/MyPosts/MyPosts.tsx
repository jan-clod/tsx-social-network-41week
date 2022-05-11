import React, { ChangeEvent, KeyboardEvent, useState } from "react";
import s from "./MyPosts.module.css";
import Post from "./Post/Post";

type MyPostsType = {
  postsData: Array<PostsData>
  newPostText?: string
  updateNewPostChange: (text:string)=>void
  addPost: ()=>void
}
type PostsData = {
  id: string
  message: string
  LikesCount: number
}
const MyPosts = (props: MyPostsType) => {
  const [disabled, SetDisabled] = useState(false)
  const addPostHandler = () => {
    props.addPost()
  }
  const onPostChangeHandler = (e: ChangeEvent<HTMLTextAreaElement>) => {
    let text = e.currentTarget.value
    props.updateNewPostChange(text)
  }
  const onKeyPressHandler = (e: KeyboardEvent<HTMLTextAreaElement>) => {
    if (e.key === 'Enter') {
      props.addPost()
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
          onChange={onPostChangeHandler}
          onKeyPress={onKeyPressHandler}>
        </textarea>
      </div>
      <div>
        <button disabled={disabled} onClick={addPostHandler}>Add Post</button> *
      </div>
      <div className={s.posts}>{postsElements}</div>
    </div>
  );
};

export default MyPosts;
