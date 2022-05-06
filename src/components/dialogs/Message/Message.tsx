import React from "react";
import s from "./../Dialogs.module.css";

type MessagesItemType={
  message:string
}
const MessagesItem = (props:MessagesItemType) => {
    return (
      <div className={s.messages}>
        <div className={s.message}>{props.message}</div>
      </div>
    );
  };
export default  MessagesItem;