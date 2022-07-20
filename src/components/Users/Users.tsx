import React from "react";
import { Button, TextField } from "@mui/material";
import { NavLink } from "react-router-dom";
import s from "./Users.module.css";
import { UserType } from "../../redux/user-reducer";
import { usersApi } from "../../api/api";

type PropsType = {
    users: Array<UserType>
    pageSize: number
    totalUserCount: number
    currentPage: number
    isFething: boolean
    follow: (userId: string) => void
    unfollow: (userId: string) => void
    onPageChanged: (pageNumber: number) => void
    followTC: (userId: string) => void
    unFollowTC: (userId: string) => void
}

export let Users = (props: PropsType) => {
    // let pageCount = Math.ceil(props.totalUserCount / props.pageSize)
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
                        {
                            u.followed
                                ? <Button
                                    className={s.button + ' ' + s.grid}
                                    variant="contained"
                                    size="small"
                                    onClick={() => {
                                        props.unFollowTC(u.id)
                                    }}>Подписаться</Button>
                                : <Button
                                    className={s.button + ' ' + s.grid}
                                    onClick={() => {
                                        props.followTC(u.id)
                                    }}>Отписаться</Button>
                        }

                        <div className={s.fullName + ' ' + s.grid}>
                            {u.name}
                        </div>
                        <div className={s.status + ' ' + s.grid}>
                            {u.status}
                        </div>

                        {/*                       <div className={s.location + ' ' + s.grid}>
                                <div>Belarus</div>
                            </div> */}
                    </div>
                </div>)
            }
        </div>
    )
}