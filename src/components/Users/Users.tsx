import React from "react";
import { Button, TextField } from "@mui/material";
import axios from "axios";
import { NavLink } from "react-router-dom";
import s from "./Users.module.css";
import { UserType } from "../../redux/user-reducer";

/* type UserType = {
    id: string
    followed: boolean
    photoUrl: string
    fullName: string
    status: string
    location: Array<LocationType>;
}
type LocationType = {
    city: string
    country: string
} */
type PropsType = {
    users: Array<UserType>
    follow: (userId: string) => void
    unfollow: (userId: string) => void
    setUsers: (users: Array<UserType>) => void
}
class Users extends React.Component<PropsType> {
    constructor(props: PropsType) {
        super(props)
            axios.get("https://social-network.samuraijs.com/api/1.0/users").then(response => {
                console.log(response.data);
                this.props.setUsers(response.data.items)
            })
    }

    render() {
        return (
            <div>
                <div className={s.TextField}>
                    <TextField
                        focused
                        fullWidth
                        label="Поиск пользователей"
                        id="fullWidth" />
                </div>
                {
                    this.props.users.map(u => <div key={u.id}>

                        <div className={s.userBlock}>
                            <div className={s.blockImg + ' ' + s.grid}>
                                <NavLink to={'/profile/' + u.id}>
                                    <img 
                                    className={s.img + ' ' + s.grid} 
                                    src={u.photos.small == null ?  "https://www.clipartmax.com/png/middle/247-2470496_what-do-people-think-round-icon-user-png.png" : u.photos.small} 
                                    alt="" />
                                </NavLink>
                            </div>
                            {u.followed
                                ? <Button
                                    className={s.button + ' ' + s.grid}
                                    variant="contained"
                                    color="error"
                                    size="small"
                                    onClick={() => { this.props.unfollow(u.id) }}>Подписаться</Button>
                                : <Button
                                    className={s.button + ' ' + s.grid}
                                    onClick={() => { this.props.follow(u.id) }}>Отписаться</Button>
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
}

export default Users