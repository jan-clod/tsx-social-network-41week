import AccountBoxIcon from '@mui/icons-material/AccountBox';
import login from './login.png'
import { Navigate, NavLink } from 'react-router-dom';

import s from './Header.module.css'
type PropsType = {
    getAuthUserDataTC: () => void
    isAuth: boolean
    login: string | null
}
export const Header = (props: PropsType) => {
   alert(props.isAuth)
/*    <NavLink className={cl.item} to="/profile">
                <AccountBoxIcon />
                <p>Profile</p>
              </NavLink> */
    return (
        <div className={s.header}>
            <div className={s.headerContainer} >
                {props.isAuth ? <h2>_Jan_clod</h2> : <p >-</p>}
                <NavLink to="/login" ><img src ={login}/></NavLink>
            </div>
        </div>
    )
}