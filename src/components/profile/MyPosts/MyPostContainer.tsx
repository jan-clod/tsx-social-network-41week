import { ActionTypes, addPostAC, ProfilePageType, UpdateNewMessageAC } from "../../../redux/profile-reducer";
import MyPosts from "./MyPosts";
import { connect } from "react-redux";
import { AppStateType } from "../../../redux/redux-store";

let mapStateToProps = (state: AppStateType): ProfilePageType => {  // контекстом приходит state
    return {
        postsData: state.profilePage.postsData,
        newPostText: state.profilePage.newPostText
    }
}
let mapDispathToProps = (dispatch: (action: ActionTypes) => void) => {
    return {

        addPost: () => {
            dispatch(addPostAC())
        },
        updateNewPostChange: (text:string) => {
            dispatch(UpdateNewMessageAC(text))
        }
    }
}

export const MyPostsContainer = connect(mapStateToProps, mapDispathToProps)(MyPosts)
