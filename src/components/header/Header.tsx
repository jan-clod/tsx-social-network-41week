import { useEffect } from 'react'
import LibraryMusicIcon from '@mui/icons-material/LibraryMusic';

import s from './Header.module.css'
type PropsType = {
    getAuthUserDataTC: () => void
    isAuth: boolean
    login: string | null
}
export const Header = (props: PropsType) => {

    return (
        <div className={s.header}>
            <div className={s.headerContainer}>
                {!props.isAuth ? <h2>{props.login}</h2> : <p>Войти</p>}
                <div className={s.icon}><LibraryMusicIcon /></div>
            </div>
        </div>
    )
}