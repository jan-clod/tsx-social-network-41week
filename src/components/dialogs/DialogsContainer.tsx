import { ActionTypes, DialogsPageType, SendMessageAC, UpdateNewPostAC } from "../../redux/dialogs-reducer";
import { Dialogs } from "./Dialogs";
import { connect } from "react-redux";
import { AppStateType } from "../../redux/redux-store";

let mapStateToProps = (state: AppStateType):DialogsPageType => { // контекстом приходит state
    return {
        dialogsData: state.dialogsPage.dialogsData,
        messagesData: state.dialogsPage.messagesData,
        newMessageBody: state.dialogsPage.newMessageBody
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