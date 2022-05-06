import React, { ChangeEvent } from "react";
import { ActionTypes } from "../../redux/state";
import { SendMessageAC, UpdateNewPostAC } from "./dialogs-reducer";
import s from "./Dialogs.module.css";
import DialogsItem from "./DialogsItem/DialogsItem";
import MessagesItem from "./Message/Message";

type DialogsType = {
  id: string
  name: string
}
type MessageType = {
  id: string
  message: string
}
type PropsType = {
  dialogsData: Array<DialogsType>
  messageData: Array<MessageType>
  newMessageBody: string
  dispatch: (action: ActionTypes) => void
}


export const Dialogs = (props: PropsType) => {
  let dialogsElements =
    props.dialogsData.map(d => <DialogsItem key={d.id} name={d.name} />)
  let messegessElements =
    props.messageData.map(m => <MessagesItem key={m.id} message={m.message} />)
  let newMessageBody = props.newMessageBody

  const onSendMessageClick = () => {
    props.dispatch(SendMessageAC())
  }
  const onNewMessageChange = (e: ChangeEvent<HTMLTextAreaElement>) => {
    let body = e.currentTarget.value
    props.dispatch(UpdateNewPostAC(body))
  }
  return (
    <nav className={s.dialogs}>
      <div className={s.dialogsItems}>
        {dialogsElements}
      </div>
      <div className={s.messages}>
        <div>{messegessElements} </div>
        <div>
          <div><textarea
            placeholder="please"
            value={newMessageBody}
            onChange={onNewMessageChange}
          /></div>
          <div><button onClick={onSendMessageClick}>Commit</button></div>
        </div>
      </div>
    </nav>
  );
};