import React from "react";
import { connect } from "react-redux";
import { Profile, ProfilePropsType } from "./Profile";
import s from "./Profile.module.css"
import {
    addPost,
    updateNewMessage,
    setUserProFile,
    getUserProFileTC
} from "../../redux/profile-reducer"
import { AppStateType } from "../../redux/redux-store";
import { Navigate, useParams } from "react-router-dom";
import { authType } from "../dialogs/DialogsContainer";

const withRouter = (Component: any) => (props: ProfilePropsType) => {
    const params = useParams();
    return (
        <Component
            {...props}
        />
    );
};
class ProfileContainers extends React.Component<ProfilePropsType & authType> {

    componentDidMount() {
        let userId = this.props.userId;
        if (!userId) {
            userId = 2;
        }
        this.props.getUserProFileTC(userId)
    }

    render = () => {
        if (!this.props.isAuth) return <Navigate to={"/login"} />

        return (
            <div className={s.ProfileContainer}>
                <Profile {...this.props} />
            </div>
        )
    }
}
let mapStateToProps = (state: AppStateType) => ({
    profile: state.ProfileReducer.profile,
    isAuth: state.AuthReducer.isAuth
})

export const ProfileContainer =
    connect(mapStateToProps, { getUserProFileTC, addPost, updateNewMessage, setUserProFile })
        (withRouter(ProfileContainers))