import { Button } from "@mui/material";
import s from "./Users.module.css";


type UserType = {
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
}
type PropsType = {
    users: Array<UserType>
    follow: (userId: string) => void
    unfollow: (userId: string) => void
    setUsers: (users: Array<UserType>) => void
}

export const Users = (props: PropsType) => {
    return (
        <div>
            {
                props.users.map(u => <div key={u.id}>

                    <div className={s.userBlock}>
                        <div className={s.blockImg + ' ' + s.grid}>
                            <img className={s.img + ' ' + s.grid} src={u.photoUrl} alt="" />
                        </div>
                        {u.followed
                            ? <Button
                                className={s.button + ' ' + s.grid}
                                variant="outlined"
                                size="small"
                                onClick={() => { props.unfollow(u.id) }}>Подписаться</Button>
                            : <Button
                                className={s.button + ' ' + s.grid}
                                onClick={() => { props.follow(u.id) }}>Отписаться</Button>
                        }
                        <div className={s.fullName + ' ' + s.grid}>{u.fullName}</div>
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