import React from "react";
import { NavLink } from "react-router-dom";
import s from "./../Dialogs.module.css";
import profile from "./m.png";

type DialogsItemType = {
  name: string
}

const DialogsItem = (props: DialogsItemType) => {
  return (
    <div className={s.dialogItems_block}>
      <img src={profile} alt="404" />
      <NavLink to={"/dialogs/" + props.name}>
        <a>{props.name} </a>
      </NavLink>
    </div>
  );
};

export default DialogsItem;
