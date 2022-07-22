import React from "react";
import { Navigate } from "react-router-dom";
import { DialogsPropsType } from "../components/dialogs/Dialogs";
import { authType } from "../redux/auth-reducer";
import { DialogsPageType, MessagesDataType } from "../redux/dialogs-reducer";

export const withAuthRedirect = (Component:typeof React.Component) => {

    class RedirectComponent extends React.Component<DialogsPropsType> {
        render() {
            if (this.props.isAuth) return <Navigate to={"/login"} />
            return <Component {...this.props}/>
        }
    }
    return RedirectComponent

}


