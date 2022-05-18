import { connect } from "react-redux"
import { ActionTypes, followAC,  setUsersAC,  unfollowAC, UserStateType, UserType } from "../../redux/user-reducer"
import { Users } from "./Users"
import { AppStateType } from "../../redux/redux-store";


let mapStateToProps = (state: AppStateType):UserStateType => { // контекстом приходит state
    return {
        users: state.usersPage.users
    }
}
let mapDispathToProps = (dispatch: (action: ActionTypes) => void) => {
    return {
        follow: (userId: string) => {
           dispatch(followAC(userId))
        },
        unfollow: (userId: string) => {
           dispatch(unfollowAC(userId))
        },
        setUsers: (users: Array<UserType>) => {
            dispatch(setUsersAC(users))
         }
    }
}
export const UsersContainer = connect(mapStateToProps, mapDispathToProps)(Users)
//Dialogs презинтационная компонента