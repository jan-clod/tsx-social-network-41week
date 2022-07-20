import * as React from 'react';
import { Box } from '@mui/material';
import LinearProgress from '@mui/material/LinearProgress';
import { connect } from "react-redux"
import {
    getUsersThunkCreator,
    followTC,
    unFollowTC,
    follow,
    setCurrentPage,
    setTotalUserCount,
    setUsers,
    toggleIsFetching,
    unfollow,
    UserStateType,
    UserType
} from "../../redux/user-reducer"
import { AppStateType } from "../../redux/redux-store";
import { Users } from "./Users";
import s from "./Users.module.css";
import { usersApi } from '../../api/api';

export type PropsType = {
    users: Array<UserType>
    pageSize: number
    totalUserCount: number
    currentPage: number
    isFething: boolean
    follow: (userId: string) => void
    unfollow: (userId: string) => void
    setUsers: (users: Array<UserType>) => void
    setCurrentPage: (currentPage: number) => void
    setTotalUserCount: (totalCount: number) => void
    toggleIsFetching: (isFething: boolean) => void
    getUsersThunkCreator: (currentPage: number, pageSize: number) => void
    followTC: (userId: string) => void
    unFollowTC: (userId: string) => void
}

class UsersContainersss extends React.Component<PropsType> {
    componentDidMount() {
        this.props.getUsersThunkCreator(this.props.currentPage, this.props.pageSize)
        /* this.props.toggleIsFetching(true)

        usersApi.getUsers(this.props.currentPage, this.props.pageSize).then(data => {
            this.props.toggleIsFetching(false)
            this.props.setUsers(data.items)
            this.props.setTotalUserCount(data.totalCount)
        }) */
    }
    onPageChanged = (pageNumber: number) => {
        //this.props.getUsersThunkCreator(this.props.currentPage, pageNumber)
        this.props.toggleIsFetching(true)
        this.props.setCurrentPage(pageNumber)

        usersApi.getUsers(pageNumber, this.props.pageSize).then(data => {
            this.props.setUsers(data.items)
            this.props.toggleIsFetching(false)
        })
    }
    render() {
        return (
            <>
                {
                    this.props.isFething
                        ? <Box sx={{ width: '100%' }} className={s.preloader}>
                            <LinearProgress /></Box>
                        : <Users
                            totalUserCount={this.props.totalUserCount}
                            pageSize={this.props.pageSize}
                            currentPage={this.props.currentPage}
                            onPageChanged={this.onPageChanged}
                            users={this.props.users}
                            follow={this.props.follow}
                            unfollow={this.props.unfollow}
                            isFething={this.props.isFething}
                            followTC={this.props.followTC}
                            unFollowTC={this.props.unFollowTC}
                        />

                }

            </>
        )
    }
}

let mapStateToProps = (state: AppStateType): UserStateType => { // контекстом приходит state
    return {
        users: state.UserReducer.users,
        pageSize: state.UserReducer.pageSize,
        totalUserCount: state.UserReducer.totalUserCount,
        currentPage: state.UserReducer.currentPage,
        isFething: state.UserReducer.isFething,
    }
}
let AC = { getUsersThunkCreator, followTC, unFollowTC, follow, unfollow, setUsers, setCurrentPage, setTotalUserCount, toggleIsFetching }

export const UsersContainer = connect(mapStateToProps, AC)(UsersContainersss)
//Dialogs презинтационная компонента
// в connecte у нас userConteiner а уже в нем users
//вложeнность: hoc => userConteiner => users
/* let mapDispathToProps = (dispatch: (action: ActionTypes) => void) => {
    return {
        follow: (userId: string) => {
            dispatch(follow(userId))
        },
        unfollow: (userId: string) => {
            dispatch(unfollow(userId))
        },
        setUsers: (users: Array<UserType>) => {
            dispatch(setUsers(users))
        },
        setCurrentPage: (currentPage: number) => {
            dispatch(setCurrentPage(currentPage))
        },
        setTotalUserCount: (totalCount: number) => {
            dispatch(setTotalUserCount(totalCount))
        },
        toggleIsFetching: (isFething: boolean) => {
            dispatch(toggleIsFetching(isFething))
        },
    }
} */