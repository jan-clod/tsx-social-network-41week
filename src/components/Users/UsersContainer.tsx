import { connect } from "react-redux"
import { ActionTypes, followAC, setCurrentPageAC, setTotalUserCountAC, setUsersAC, unfollowAC, UserStateType, UserType } from "../../redux/user-reducer"
import { AppStateType } from "../../redux/redux-store";
import Users from "./Users";


let mapStateToProps = (state: AppStateType): UserStateType => { // контекстом приходит state
    return {
        users: state.usersPage.users,
        pageSize: state.usersPage.pageSize,
        totalUserCount: state.usersPage.totalUserCount,
        currentPage: state.usersPage.currentPage
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
        },
        setCurrentPage: (currentPage: number) => {
            dispatch(setCurrentPageAC(currentPage))
        },
        setTotalUserCount: (totalCount: number) => {
            dispatch(setTotalUserCountAC(totalCount))
        }
    }
}
export const UsersContainer = connect(mapStateToProps, mapDispathToProps)(Users)
//Dialogs презинтационная компонента