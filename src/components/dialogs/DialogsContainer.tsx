import {
    ActionTypes,
    DialogsPageType,
    SendMessageAC,
    UpdateNewPostAC
} from "../../redux/dialogs-reducer";
import { Dialogs, DialogsPropsType } from "./Dialogs";
import { connect } from "react-redux";
import { AppStateType } from "../../redux/redux-store";
import { Navigate } from "react-router-dom";
import { withAuthRedirect } from "../../hoc/withAuthRedirect";

export type authType = { isAuth: boolean }

let mapStateToProps = (state: AppStateType): DialogsPageType & authType => { // контекстом приходит state
    return {
        dialogsData: state.DialogsReducer.dialogsData,
        messagesData: state.DialogsReducer.messagesData,
        newMessageBody: state.DialogsReducer.newMessageBody,
        isAuth: state.AuthReducer.isAuth
    }
}
let mapDispathToProps = (dispatch: (action: ActionTypes) => void) => {
    return {
        onClickSendMessage: () => dispatch(SendMessageAC()),
        onNewMessageChange: (body: string) => dispatch(UpdateNewPostAC(body))
    }
}

export const DialogsContainer =
 connect(mapStateToProps, mapDispathToProps)(Dialogs)
//Dialogs презинтационная компонента