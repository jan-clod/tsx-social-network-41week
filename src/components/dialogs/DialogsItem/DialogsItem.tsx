import React from "react";
import { NavLink } from "react-router-dom";
import s from "./../Dialogs.module.css";

type DialogsItemType={
  name:string
}

const DialogsItem = (props:DialogsItemType) => {
  return (
    <div className={s.dialog}>
      <NavLink to={"/dialogs/"  + props.name }>{ props.name }</NavLink>
    </div>
  );
};

export default DialogsItem;
