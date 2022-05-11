import { ActionTypes } from "../../../redux/state";
import { addPostAC, UpdateNewMessageAC } from "../../../redux/profile-reducer";
import MyPosts from "./MyPosts";

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
    const onPostChange = (text: string) => {
        props.dispatch(UpdateNewMessageAC(text))
    }
    return (
        <MyPosts postsData={props.postsData} updateNewPostChange={onPostChange} addPost={addPost} />
    );
};

