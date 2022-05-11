import React from "react";
import { MessageReduserType } from "../../../redux/state";
import s from "./../Dialogs.module.css";

type MessagesItemType = {
  message: Array<MessageReduserType>
  sender: 'You' | 'I'
}
const MessagesItem = (props: MessagesItemType) => {
  let You =s.You 
  let I =s.I 
  let Message = {
    ...props.message, message: [...props.message.map(t=>t.message)]

  }
  console.log(Message)
  
  return (
    <div className={s.messages}>
      <div  className={props.sender === 'You' ? You : I} >{Message.message}</div>
    </div>
  );
};
export default MessagesItem;