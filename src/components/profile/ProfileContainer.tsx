import axios from "axios";
import React from "react";
import { connect } from "react-redux";
import { Profile, ProfilePropsType } from "./Profile";
import s from "./Profile.module.css"
import {
    addPost,
    updateNewMessage,
    setUserProFile
} from "../../redux/profile-reducer"
import { AppStateType } from "../../redux/redux-store";
import { useLocation, useNavigate, useParams } from "react-router-dom";
 
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
        axios
        .get(`https://social-network.samuraijs.com/api/1.0/profile/`+userId)
            .then(response => {
                console.log(response.data);
            })
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
    connect(mapStateToProps, { addPost, updateNewMessage, setUserProFile })
        (withRouter(ProfileContainers))