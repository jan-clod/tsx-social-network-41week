import React from "react";
import { connect, ConnectProps } from "react-redux";
import { Profile, ProfilePropsType } from "./Profile";
import s from "./Profile.module.css"
import {
    addPost,
    updateNewMessage,
    setUserProFile,
    getUserProFileTC
} from "../../redux/profile-reducer"
import { AppStateType } from "../../redux/redux-store";
import { Navigate, useMatch, useParams } from "react-router-dom";
import { authType } from "../dialogs/DialogsContainer";
import { withAuthRedirect } from "../../hoc/withAuthRedirect";
import { compose } from "redux";


export const withRouter = (Component: any) => {
    let RouterComponent = (props: ProfilePropsType) => {
        const match = useMatch('/profile/:userId/');
        const params = useParams()
        return <Component
            {...props}
            match={match}
            param={params} />;
    }
    return RouterComponent;
}

class ProfileContainers extends React.Component<ProfilePropsType & authType> {

    componentDidMount() {
        let userId = this.props.userId;
        if (!userId) {
            userId = 2;
        }
        this.props.getUserProFileTC(userId)
    }

    render = () => {
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

export const ProfileContainerConnect:any= compose(
    withAuthRedirect,
    withRouter,
    connect(mapStateToProps, { getUserProFileTC, addPost, updateNewMessage, setUserProFile })
)(ProfileContainers)    