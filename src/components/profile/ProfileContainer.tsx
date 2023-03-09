import React from "react";
import { connect } from "react-redux";
import { Profile, ProfilePropsType } from "./Profile";
import s from "./Profile.module.css"
import {
    addPost,
    updateNewMessage,
    setUserProFile,
    getUserProFileTC,
    getStatusTC,
    updateStatusTC
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
        console.log(this.props.isAuth)

        if (!userId) {
            userId = 24600;
        }
        this.props.getUserProFileTC(userId)
        this.props.getStatusTC(userId)
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
    isAuth: state.AuthReducer.isAuth,
    status: state.ProfileReducer.status
})
let mapDispath = {
    getUserProFileTC,
    addPost,
    updateNewMessage,
    setUserProFile,
    getStatusTC,
    updateStatusTC,
}

export const ProfileContainerConnect: any = compose(
    withAuthRedirect,
    withRouter,
    connect(mapStateToProps, mapDispath)
)(ProfileContainers)    