import {useContext, useState} from "react";
import {NavLink, useNavigate} from "react-router-dom";

import {TextField} from "../../components/TextField";

import {MyContext} from "../../App";
import styles from "./AuthorizationUser.module.css"

export const AuthorizationUser = () => {
    const navCreate = useNavigate()
    const {setIsAuth, setUser} = useContext(MyContext)

    const [errorAut, setErrorAut] = useState(false)
    const [stateAut, setStateAut] = useState({
        email: '',
        password: '',
    })

    const users = JSON.parse(localStorage.getItem("Users")) || []

    const submitFormAut = () => {
        const userAuth = users.find(el => el.email === stateAut.email && el.password === stateAut.password)
        if (userAuth) {
            setIsAuth(true)
            setErrorAut(false)
            setUser(userAuth)
            localStorage.setItem("user", JSON.stringify(userAuth))
            navCreate("/all-articles")
        } else {
            setErrorAut(true)
        }
    }

    const handleChangeAut = (e) => setStateAut((prevState) => ({...prevState, [e.target.name]: e.target.value}))

    const passwordFormInput = [
        {
            label: "Email Address",
            name: "email",
            type: "text",
            value: stateAut.email
        },
        {
            label: "Password",
            name: "password",
            type: "password",
            value: stateAut.password
        },
    ]

    return (
        <div className={styles.wrapper}>
            <h1 className={styles.h1}>Log in to your account</h1>
            {passwordFormInput.map((input) => (
                <TextField key={input.name} input={input} onChange={handleChangeAut} inputRegistr/>
            ))}
            {errorAut && <div className={styles.error}>User is not found</div>}
            <button
                className={styles.button}
                onClick={submitFormAut}
            >
                SugIn Account
            </button>
            <span className={styles.link}>
                Don’t have a Times account?
                <NavLink to="/registration" className={styles.active}>Create one</NavLink>
            </span>
        </div>
    )
}
