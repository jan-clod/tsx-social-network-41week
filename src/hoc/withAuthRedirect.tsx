import React from "react";
import { Navigate } from "react-router-dom";
import { DialogsPropsType } from "../components/dialogs/Dialogs";

export const withAuthRedirect = (Component:typeof React.Component) => {

    class RedirectComponent extends React.Component<DialogsPropsType> {
        render() {
            console.log('redirect no working')
            if (this.props.isAuth) return <Navigate to={"/profile"} />
            return <Component {...this.props}/>
        }
    }
    return RedirectComponent

}

