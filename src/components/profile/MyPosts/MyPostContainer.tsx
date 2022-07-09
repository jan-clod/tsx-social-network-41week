import { ActionTypes, addPost, ProfilePageType, updateNewMessage } from "../../../redux/profile-reducer";
import MyPosts from "./MyPosts";
import { connect } from "react-redux";
import { AppStateType } from "../../../redux/redux-store";

let mapStateToProps = (state: AppStateType): ProfilePageType => {  // контекстом приходит state
    return {
        postsData: state.ProfileReducer.postsData,
        newPostText: state.ProfileReducer.newPostText,
        profile:state.ProfileReducer.profile
    }
}
let mapDispathToProps = (dispatch: (action: ActionTypes) => void) => {
    return {

        addPost: () => {
            dispatch(addPost())
        },
        updateNewPostChange: (text:string) => {
            dispatch(updateNewMessage(text))
        }
    } 
}

export const MyPostsContainer = connect(mapStateToProps, mapDispathToProps)(MyPosts)
