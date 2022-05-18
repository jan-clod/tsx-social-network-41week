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
    users:Array<UserType>
    follow: (userId: string) => void
    unfollow: (userId: string) => void
    setUsers: (users: Array<UserType>) => void
}

export const Users = (props: PropsType) => {
    return (
        <div>
            {
                props.users.map(u => <div key={u.id}>
                    <span>
                        <div>
                            {u.followed 
                            ?<button onClick={()=>{props.unfollow(u.id)}}>Подписаться</button> 
                            :<button onClick={()=>{props.follow(u.id)}}>Отписаться</button>
                            }
                        </div>
                        <div className={s.blockImg}>
                            <img className={s.img} src={u.photoUrl} alt="" />
                        </div>
                    </span>
                    <span>
                        <span>
                            <div>{u.fullName}</div>
                            <div>{u.status}</div>
                        </span>
                        <span>
                            <div>Belarus</div>
                        </span>
                    </span>
                </div>)
            }
        </div>
    )

}