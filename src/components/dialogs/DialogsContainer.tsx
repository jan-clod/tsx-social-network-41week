import { ActionTypes, MessageReduserType, MessagesDataType } from "../../redux/state";
import { SendMessageAC, UpdateNewPostAC } from "../../redux/dialogs-reducer";
import { Dialogs } from "./Dialogs";

type DialogsType = {
    id: string
    name: string
}
type MessageType = {
    id: string
    message: Array<MessageReduserType>;
    sender: 'You' | 'I';
}
type PropsType = {
    dialogsData: Array<DialogsType>
    messageData: Array<MessageType>
    newMessageBody: string
    dispatch: (action: ActionTypes) => void
}

export const DialogsContainer = (props: PropsType) => {
    const onClickSendMessage = () => {
        props.dispatch(SendMessageAC())
    }
    const onNewMessageChange = (e: string) => {
        let body = e
        props.dispatch(UpdateNewPostAC(body))
    }
    return (
        <Dialogs
            onClickSendMessage={onClickSendMessage}
            onNewMessageChange={onNewMessageChange}
            dialogsData={props.dialogsData}
            messageData={props.messageData}
            newMessageBody={props.newMessageBody}
        />
    );
};