import {
    ActionTypes,
    DialogsPageType,
    SendMessageAC,
    UpdateNewPostAC
} from "../../redux/dialogs-reducer";
import { Dialogs } from "./Dialogs";
import { connect } from "react-redux";
import { AppStateType } from "../../redux/redux-store";

type authType = { isAuth: boolean }
type mapStateToPropsType = DialogsPageType & authType


let mapStateToProps = (state: AppStateType): mapStateToPropsType => { // контекстом приходит state
    return {
        dialogsData: state.DialogsReducer.dialogsData,
        messagesData: state.DialogsReducer.messagesData,
        newMessageBody: state.DialogsReducer.newMessageBody,
        isAuth: state.AuthReducer.isAuth
    }
}
let mapDispathToProps = (dispatch: (action: ActionTypes) => void) => {
    return {

        onClickSendMessage: () => {
            dispatch(SendMessageAC())
        },
        onNewMessageChange: (body: string) => {
            dispatch(UpdateNewPostAC(body))
        }
    }
}
export const DialogsContainer = connect(mapStateToProps, mapDispathToProps)(Dialogs)
//Dialogs презинтационная компонента