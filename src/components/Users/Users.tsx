import React from "react";
import { Button, TextField } from "@mui/material";
import { NavLink } from "react-router-dom";
import s from "./Users.module.css";
import { UserType } from "../../redux/user-reducer";
import axios from "axios";

type PropsType = {
    users: Array<UserType>
    pageSize: number
    totalUserCount: number
    currentPage: number
    isFething: boolean
    follow: (userId: string) => void
    unfollow: (userId: string) => void
    onPageChanged: (pageNumber: number) => void
}

export let Users = (props: PropsType) => {

    let pageCount = Math.ceil(props.totalUserCount / props.pageSize)
    let pages = []
    for (let i = 1; i <= 37; i++) {
        pages.push(i)
    }

    return (
        <div>
            <div className={s.TextField}>
                <TextField
                    focused
                    fullWidth
                    label="Поиск пользователей"
                    id="fullWidth" />
            </div>
            <div>
                {
                    pages.map(p => {
                        return <span
                            onClick={() => { props.onPageChanged(p) }}
                            className={
                                props.currentPage === p
                                    ? s.selectedPage
                                    : s.noSelectPage
                            }>{p}</span>
                    })
                }
            </div>
            {
                props.users.map(u => <div key={u.id}>

                    <div className={s.userBlock}>
                        <div className={s.blockImg + ' ' + s.grid}>
                            <NavLink to={'/profile/' + u.id}>
                                <img
                                    className={s.img + ' ' + s.grid}
                                    src={u.photos.small == null ? "https://www.clipartmax.com/png/middle/247-2470496_what-do-people-think-round-icon-user-png.png" : u.photos.small}
                                    alt="" />
                            </NavLink>
                        </div>
                        {u.followed
                            ? <Button
                                className={s.button + ' ' + s.grid}
                                variant="contained"
                                color="error"
                                size="small"
                                onClick={() => {
                                    axios
                                        .delete(`https://social-network.samuraijs.com/api/1.0/follow/${u.id}`, {
                                            withCredentials: true,
                                            headers: {
                                                'API-KEY': ' 9ccf0b02-7ebc-48a8-afa1-03312505ce4a'
                                            }
                                        })
                                        .then(response => {
                                            if (response.data.resultCode === 0) {
                                                props.unfollow(u.id)
                                            }
                                        })
                                }}>Подписаться</Button>
                            : <Button
                                className={s.button + ' ' + s.grid}
                                onClick={() => {
                                    axios
                                        .post(`https://social-network.samuraijs.com/api/1.0/follow/${u.id}`, {}, {
                                            withCredentials: true,
                                            headers: {
                                                'API-KEY': ' 9ccf0b02-7ebc-48a8-afa1-03312505ce4a'
                                            }
                                        })
                                        .then(response => {
                                            if (response.data.resultCode === 0) {
                                                props.follow(u.id)
                                            }
                                        })
                                }}>Отписаться</Button>
                        }
                        <div className={s.fullName + ' ' + s.grid}>{u.name}</div>
                        <div className={s.status + ' ' + s.grid}>{u.status}</div>

                        {/*                       <div className={s.location + ' ' + s.grid}>
                                <div>Belarus</div>
                            </div> */}
                    </div>
                </div>)
            }
        </div>
    )
}