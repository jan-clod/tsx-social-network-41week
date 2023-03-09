import s from './Login.module.css';
import { useFormik } from 'formik';
import { authType, loginOutTC, logInTC } from '../../redux/auth-reducer';
import { connect } from 'react-redux';

let myLogin = {
    email: 'Fia.yan@mail.ru',
    password: '310074ZxC',
    rememberMe: true
}

type propsType = {
    logInTC: (email: string, password: string, rememberMe: boolean) => void
    loginOutTC: () => void
    auth: authType
}

export const LoginPure = (props: propsType) => {
    const formik = useFormik({
        initialValues: {
            email: '',
            password: '',
            rememberMe: false
        },
        onSubmit: values => {
            props.logInTC(values.email, values.password, true)
        }
    });

    let click = () => {
        props.loginOutTC()
    }
    return (
        <div className={s.block}>
            <div className={s.block_left}><h1>Autarization</h1></div>
            <form className={s.loginBlock} onSubmit={formik.handleSubmit}>

                <label htmlFor="email"><h2>Welome Back</h2></label>
                <div className={s.loginBlock_form}>
                    <input
                        className={s.form_input}
                        id="email"
                        name="email"
                        type="email"
                        placeholder='email'

                        onChange={formik.handleChange}
                        value={formik.values.email}
                    />

                    <input
                        className={s.form_input}
                        id="password"
                        name="password"
                        type="password"
                        placeholder='password'

                        onChange={formik.handleChange}
                        value={formik.values.password}
                    />
                    <div className={s.form_container}>
                        <input
                            className={s.form_chekbox}
                            id="rememberMe"
                            name="rememberMe"
                            type="checkbox"
                            onChange={formik.handleChange}
                        />
                        <p> remember me</p>
                    </div>





                    <button className={s.form_button} type="submit"><h3>Log In</h3></button>
                </div>

                {/* <button onClick={click}>out</button> */}

            </form>
        </div>
    );
};

let mapStateToProps = (state: authType) => ({
    isAuth: state
})

export const Login = connect(mapStateToProps, { loginOutTC, logInTC })(LoginPure)