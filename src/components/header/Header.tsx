import login from './login.png'
import { NavLink } from 'react-router-dom';

import s from './Header.module.css'
import { loginOutTC } from '../../redux/auth-reducer';

type PropsType = {
    getAuthUserDataTC: () => void
    isAuth: boolean
    login: string | null
}
export const Header = (props: PropsType) => {
    return (
        <div className={s.header}>
            <div className={s.headerContainer} >
                {props.isAuth ? <h2>_Jan_clod</h2> : <p >-</p>}
                <NavLink to="/login" ><img onClick={loginOutTC} src={login} alt={'404'} /></NavLink>
            </div>
        </div>
    )

}