import axios from "axios";
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
import { useLocation, useNavigate, useParams } from "react-router-dom";
import { usersApi } from "../../api/api";
 
const withRouter = (Component:any)  => (props:ProfilePropsType) => {
    const params = useParams();
    return (
        <Component
            {...props}
        />
    );
};
class ProfileContainers extends React.Component<ProfilePropsType> {

    componentDidMount() {
        let userId = this.props.userId;
        if (!userId){
            userId=2;
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
    profile: state.ProfileReducer.profile
})

export const ProfileContainer =
    connect(mapStateToProps, { getUserProFileTC, addPost, updateNewMessage, setUserProFile })
        (withRouter(ProfileContainers))