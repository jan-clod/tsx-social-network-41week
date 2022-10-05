import { Login } from "../login/Login"
import s from "./setting.module.css"

export const Setting = () => {
    return(
        <div className={s.settingBlock}>
            <Login/>
        </div>
    )
}