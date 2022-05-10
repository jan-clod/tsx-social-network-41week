import React, { ChangeEvent } from "react";
import { ActionTypes } from "../../redux/state";
import { SendMessageAC, UpdateNewPostAC } from "./dialogs-reducer";
import s from "./Dialogs.module.css";
import DialogsItem from "./DialogsItem/DialogsItem";
import MessagesItem from "./Message/Message";
import Box from '@mui/material/Box';
import TextField from '@mui/material/TextField';
import Button from '@mui/material/Button';
import DeleteIcon from '@mui/icons-material/Delete';
import SendIcon from '@mui/icons-material/Send';
import Stack from '@mui/material/Stack';
import CommentIcon from '@mui/icons-material/Comment';
import AccountBoxIcon from '@mui/icons-material/AccountBox';
import NewspaperIcon from '@mui/icons-material/Newspaper';
import LibraryMusicIcon from '@mui/icons-material/LibraryMusic';
import SettingsIcon from '@mui/icons-material/Settings';
import Paper from '@mui/material/Paper';
import { styled } from '@mui/material/styles';

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
const Item = styled(Paper)(({ theme }) => ({
  backgroundColor: 'rgb(42, 42, 42)',
  padding: theme.spacing(2),
  textAlign: 'left',
}));

export const Dialogs = (props: PropsType) => {
  let dialogsElements =
    props.dialogsData.map(d =>
      <Box sx={{ width: '100%' }}>
        <Stack spacing={2}>
          <Item>
            <DialogsItem key={d.id} name={d.name} />
          </Item>
        </Stack>
      </Box>)
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
          <div className={s.myMessag}>

            <Box sx={{ width: 700, maxWidth: '100%', }}>
              <TextField
                fullWidth
                label="pull message"
                id="fullWidth"
                placeholder="please"
                value={newMessageBody}
                onChange={onNewMessageChange}
              />
            </Box>
            <div>
              <Stack direction="row" spacing={2}>
                <Button
                  variant="contained"
                  endIcon={<SendIcon />}
                  onClick={onSendMessageClick}
                > Send</Button>
              </Stack>
            </div>
          </div>

        </div>
      </div>
    </nav>
  );
};