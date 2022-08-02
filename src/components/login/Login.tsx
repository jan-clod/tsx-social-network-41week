import { Button } from '@mui/material';
import axios from 'axios';
import { ErrorMessage, Field, Form, Formik } from 'formik';
import loginForm from '../formValidation/LoginForm';
import s from './Login.module.css';

export const LoginForm = () => {
    let myLogin = {
        email: 'Fia.yan@mail.ru',
        password: '310074ZxC',
        rememberMe: true
    }

    const autoriz = () => {
        axios.post("https://social-network.samuraijs.com/api/1.0/auth/login", {
            email: myLogin.email,
            password: myLogin.password,
            rememberMe: myLogin.rememberMe,
        }).then(response => console.log(response.data))
    }

    return (
        <form>
            <Formik
                initialValues={{ email: "", password: "", rememberMe: false }}
                onSubmit={(values) => {

                    axios.post("https://social-network.samuraijs.com/api/1.0/auth/login", {
                        email: values.email,
                        password: values.password,
                        rememberMe: values.rememberMe,
                    }).then(response => alert(response.data))
                    debugger
                    alert(values)
                }}
                validationSchema={loginForm}>
                {() => (
                    <Form>
                        <div>
                            <Field type={'text'} name={'email'} placeholder={'e-mail'} />
                        </div>
                        <ErrorMessage className={s.error} name="email" component="div" />
                        <div>
                            <Field className={s.password} type={'password'} name={'password'} placeholder={'password'} />
                        </div>
                        <ErrorMessage className={s.error} name="password" component="div" />
                        <div>
                            <Field type={'checkbox'} name={'rememberMe'} />
                            <label htmlFor={'rememberMe'}> remember me </label>
                        </div>

                        <Button onClick={autoriz} variant="contained" type={'submit'} size="small">Log in</Button>
                    </Form>
                )}
            </Formik>
        </form>
    )
}

export const Login = () => {

    return (
        <div className={s.login}>
            <h1>Login Form</h1>
            <LoginForm />
        </div>
    )
}