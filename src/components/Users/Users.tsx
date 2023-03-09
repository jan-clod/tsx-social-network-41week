import React from "react";
import { Button, TextField } from "@mui/material";
import { NavLink } from "react-router-dom";
import s from "./Users.module.css";
import { UserType } from "../../redux/user-reducer";
import { usersApi } from "../../api/api";
import { ErrorMessage, Field, Form, Formik, FormikHelpers, FormikValues } from "formik";
import loginForm from "../formValidation/LoginForm";

type PropsType = {
    users: Array<UserType>
    pageSize: number
    totalUserCount: number
    currentPage: number
    isFething: boolean
    follow: (userId: string) => void
    unfollow: (userId: string) => void
    onPageChanged: (pageNumber: number) => void
    followTC: (userId: string) => void
    unFollowTC: (userId: string) => void
}

export let Users = (props: PropsType) => {
    // let pageCount = Math.ceil(props.totalUserCount / props.pageSize)
    let pages = []
    for (let i = 1; i <= 21; i++) {
        pages.push(i)
    }

    return (
        <div className={s.usersBlock}>
            <UserSearhForm />
            {/* <TextField
                    focused
                    fullWidth
                    label="Поиск пользователей"
                    id="fullWidth" /> */}
            <div className={s.users_navigation}>
                {
                    pages.map(p => {
                        return <span
                            onClick={() => { props.onPageChanged(p) }}
                            className={
                                props.currentPage === p
                                    ? s.selectedPage
                                    : s.noSelectPage
                            }>{p}</span>
                    })
                }
            </div>
            {
                props.users.map(u => <div key={u.id}>

                    <div className={s.users_container}>
                        <div className={s.users_container_blockImg + ' ' + s.grid}>
                            <NavLink to={'/profile/' + u.id}>
                                <img
                                    className={s.blockImg_img + ' ' + s.grid}
                                    src={u.photos.small == null ? "https://www.clipartmax.com/png/middle/247-2470496_what-do-people-think-round-icon-user-png.png" : u.photos.small}
                                    alt="" />
                            </NavLink>
                        </div>
                        {
                            u.followed
                                ? <Button
                                    className={s.users_container_button + ' ' + s.grid}
                                    size="small"
                                    onClick={() => {
                                        props.unFollowTC(u.id)
                                    }}>Отписаться</Button>
                                : <Button
                                    className={s.users_container_button + ' ' + s.grid}
                                    variant="outlined"
                                    onClick={() => {
                                        props.followTC(u.id)
                                    }}>Подписаться</Button>
                        }

                        <div className={s.users_container_fullName + ' ' + s.grid}>
                            {u.name}
                        </div>
                        <div className={s.users_container_status + ' ' + s.grid}>
                            {u.status}
                        </div>

                        {/*                       
                        <div className={s.location + ' ' + s.grid}>
                                <div>Belarus</div>
                            </div>
                         */}
                    </div>
                </div>)
            }
        </div>
    )
}


export const UserSearhForm: React.FC<{}> = () => {

    const onClick = (values: FormikValues, actions: FormikValues) => {
        console.log({ term: values });
        alert(JSON.stringify(values, null, 2));
        actions.setSubmitting(false);
    }
    return (
        <div className={s.textInput_block}>
            <h3 className={s.textInput_block_name} >Searh Users</h3>
            <Formik

                initialValues={{ term: '' }}
                onSubmit={onClick}
            >
                <Form > 
                    <Field id="term" name="term" placeholder="term" className={s.textInput_block_input} />
                    <button className={s.textInput_block_button} type="submit">🔍︎</button>
                </Form>
            </Formik>
        </div>
    );
};