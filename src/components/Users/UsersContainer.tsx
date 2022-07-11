import * as React from 'react';
import Box from '@mui/material/Box';
import LinearProgress from '@mui/material/LinearProgress';
import { connect } from "react-redux"
import {
    ActionTypes,
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
import axios from "axios";
import s from "./Users.module.css";

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
}

class UsersContainersss extends React.Component<PropsType> {
    componentDidMount() {
        this.props.toggleIsFetching(true)
        axios
            .get(`https://social-network.samuraijs.com/api/1.0/users?page=${this.props.currentPage}&count=${this.props.pageSize}`, {
                withCredentials: true,
            })
            .then(response => {
                console.log(response.data);
                this.props.toggleIsFetching(false)
                this.props.setUsers(response.data.items)
                this.props.setTotalUserCount(response.data.totalCount)
            })
    }
    onPageChanged = (pageNumber: number) => {
        this.props.toggleIsFetching(true)
        this.props.setCurrentPage(pageNumber)
        axios
            .get(`https://social-network.samuraijs.com/api/1.0/users?page=${pageNumber}&count=${this.props.pageSize}`, {
                withCredentials: true,
            })
            .then(response => {
                console.log(response.data);
                this.props.setUsers(response.data.items)
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

export const UsersContainer = connect(mapStateToProps, { follow, unfollow, setUsers, setCurrentPage, setTotalUserCount, toggleIsFetching })(UsersContainersss)
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