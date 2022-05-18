import { ChangeEvent, KeyboardEvent } from "react";
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
  onClickSendMessage: () => void
  onNewMessageChange: (e: string) => void
  dialogsData: Array<DialogsType>
  messageData: Array<MessageType>
  newMessageBody: string
}
const Item = styled(Paper)(({ theme }:any) => ({
  backgroundColor: 'rgb(42, 42, 42)',
  padding: theme.spacing(2),
  textAlign: 'left',
}));

export const Dialogs = (props: PropsType) => {
  let dialogsElements =
    props.dialogsData.map(d =>
      <Box sx={{ minWidth: '100%' }} key={d.id}>
        <Stack spacing={2} key={d.id}>
          <Item key={d.id}>
            <DialogsItem key={d.id} name={d.name} />
          </Item>
        </Stack>
      </Box>)
  let messegessElements = props.messageData.map(m => <MessagesItem key={m.id} message={m.message} sender={m.sender}/>)
  
    let newMessageBody = props.newMessageBody

  const onClickSendMessage = () => props.onClickSendMessage()
  
  const onNewMessageChange = (e: ChangeEvent<HTMLTextAreaElement>) => {
    let body = e.currentTarget.value
    props.onNewMessageChange(body)
  }
  const onKeyPressHandler = (e: KeyboardEvent<HTMLDivElement>) => {
    e.key === 'Enter' && props.onClickSendMessage()
  }
  return (
    <nav className={s.dialogs}>
      <div className={s.dialogsItems}>
        {dialogsElements}
      </div>
      <div className={s.messages}>
        <div className={s.blockMessage}>
          {messegessElements}
        </div>
        <div>
          <div className={s.myMessag}>

            <Box sx={{ width: '80%', maxWidth: '100%', }}>
              <TextField
                fullWidth
                label="pull message"
                id="fullWidth"
                placeholder="please"
                value={newMessageBody}
                onChange={onNewMessageChange}
                onKeyPress={onKeyPressHandler}
              />
            </Box>
            <div className={s.myMessagButton}>
              <Stack direction="row" spacing={2}>
                <Button
                  variant="contained"
                  endIcon={<SendIcon />}
                  onClick={onClickSendMessage}
                > Send</Button>
              </Stack>
            </div>
          </div>

        </div>
      </div>
    </nav>
  );
};