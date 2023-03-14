import { ChangeEvent, Component, KeyboardEvent } from "react";
import s from "./Dialogs.module.css";
import DialogsItem from "./DialogsItem/DialogsItem";
import MessagesItem from "./Message/Message";
import Box from '@mui/material/Box';
import TextField from '@mui/material/TextField';
import Button from '@mui/material/Button';
import SendIcon from '@mui/icons-material/Send';
import Stack from '@mui/material/Stack';
import Paper from '@mui/material/Paper';
import { styled } from '@mui/material/styles';
import { MessageReduserType } from "../../redux/dialogs-reducer";
import { Navigate } from "react-router-dom";

type DialogsType = {
  id: string
  name: string
}
type MessageType = {
  id: string
  message: Array<MessageReduserType>;
  sender: 'You' | 'I';
}
export type DialogsPropsType = {
  onClickSendMessage: () => void
  onNewMessageChange: (e: string) => void
  dialogsData: Array<DialogsType>
  messageData: Array<MessageType>
  newMessageBody: string
  isAuth: boolean
}
const Item = styled(Paper)(({ theme }: any) => ({
  backgroundColor: 'rgb(42, 42, 42)',
  padding: theme.spacing(2),
  textAlign: 'left',
}));

export const Dialogs = (props: DialogsPropsType) => {
  let dialogsElements =
    props.dialogsData.map(d => <DialogsItem key={d.id} name={d.name} />)
  let messegessElements =
    props.messageData.map(m =>
      <MessagesItem key={m.id} message={m.message} sender={m.sender} />)

  let newMessageBody = props.newMessageBody

  const onClickSendMessage = () => props.onClickSendMessage()

  const onNewMessageChange = (e: ChangeEvent<HTMLInputElement>) => {
    let body = e.currentTarget.value
    props.onNewMessageChange(body)
  }
  const onKeyPressHandler = (e: KeyboardEvent<HTMLDivElement>) => {
    e.key === 'Enter' && props.onClickSendMessage()
  }
  return (
    <main className={s.dialogsBlock}>
      <section className={s.dialogsItems}>
        
        {dialogsElements}
      </section>
      <section className={s.messagesBlock}>
        <div className={s.blockMessage}>
          {messegessElements}
        </div>
        <div>
          <div className={s.myMessag}>
            <input
              placeholder="please"
              value={newMessageBody}
              onChange={onNewMessageChange}
              onKeyPress={onKeyPressHandler}
              type="text" />

            <div className={s.myMessagButton}>
              <button onClick={onClickSendMessage}>Send ✈</button>
            </div>
          </div>

        </div>
      </section>
    </main>
  );
}; 