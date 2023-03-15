import React, { useMemo, useState } from "react";
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
    onPageChanged: (pageNumber: any) => void
    followTC: (userId: string) => void
    unFollowTC: (userId: string) => void
}

export let Users = (props: PropsType) => {
    //alert(Math.ceil(props.totalUserCount / props.pageSize)) ← →

    let [pages, setPages] = useState([1, 2, 3, 4, 5])
    let lastPage = []
    lastPage.push(Math.ceil(props.totalUserCount / props.pageSize))
    let forward = () => {
        let arr = [];
        for (let i = 0; i < 5; i++) {
            arr.push(pages[i] + 4)

        }
        setPages(arr)

    }

    let back = () => {
        if (pages[0] < 5) {
            setPages([1, 2, 3, 4, 5])
        } else {
            let arr = [];
            for (let i = 0; i < 5; i++) {
                arr.push(pages[i] - 4)
            }
            setPages(arr)
        }
    }
    return (
        <div className={s.usersBlock}>

            <UserSearhForm />

            <div className={s.users_navigation_bolck}>
                <div className={s.users_navigation}>
                    <button onClick={back}>←</button>
                    {
                        pages.map(e => {
                            return <span
                                onClick={() => { props.onPageChanged(e) }}
                                className={
                                    props.currentPage === e
                                        ? s.selectedPage
                                        : s.noSelectPage
                                }>{e}</span>
                        })
                    }
                    <span>{'...' + ' ' + lastPage}</span>
                    <button onClick={forward}>→</button>
                </div>
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
                                ? <button
                                    className={s.users_container_button + ' ' + s.unFollow + ' ' + s.grid}
                                    onClick={() => {
                                        props.unFollowTC(u.id)
                                    }}>Unfollow</button>
                                : <button
                                    className={s.users_container_button + ' ' + s.follow + ' ' + s.grid}
                                    onClick={() => {
                                        props.followTC(u.id)
                                    }}>Follow</button>
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
                    <Field
                        id="term"
                        name="term"
                        placeholder="term"
                        className={s.textInput_block_input}
                    />
                    <button className={s.textInput_block_button} type="submit">🔍︎</button>
                </Form>
            </Formik>
        </div>
    );
};