import styles from "./AuthorizationUser.module.css"
import {NavLink, useNavigate} from "react-router-dom";
import {useContext, useState} from "react";
import {MyContext} from "../../App";

export const AuthorizationUser = () => {
    const navCreate = useNavigate()
    const { isAuth, setIsAuth } = useContext(MyContext)
    const [errorAut, setErrorAut] = useState(false)
    const [stateAut, setStateAut] = useState({
        email: '', password: '',
    })

    const users = JSON.parse(localStorage.getItem("Users")) || []

    const submitFormAut = () => {
        const userAuth = users.find(el => el.email === stateAut.email && el.password === stateAut.password)
        if (userAuth) {
            setIsAuth(true)
            setErrorAut(false)
            localStorage.setItem("user", JSON.stringify(userAuth))
            navCreate("/all-articles")
        } else {
            setErrorAut(true)
        }
    }
    const handleChangeAut = (e) => setStateAut((prevState) => ({...prevState, [e.target.name]: e.target.value}))

    return (
        <div className={styles.wrapper}>
            <h1 className={styles.h1}>Log in to your account</h1>
            <div className={styles.inform}>
                <div className={styles.inform_el}>Email Address</div>
                <input
                    value={stateAut.email}
                    name="email"
                    className={styles.input}
                    onChange={handleChangeAut}
                />
            </div>
            <div className={styles.inform}>
                <div className={styles.inform_el}>Password</div>
                <input
                    value={stateAut.password}
                    name="password"
                    type={"password"}
                    className={styles.input}
                    onChange={handleChangeAut}
                />
            </div>
            {errorAut&&<div className={styles.error}>User is not found</div>}
            <button
                className={styles.button}
                onClick={() => submitFormAut()}
            >
                SugIn Account
            </button>
            <span className={styles.link}>Don’t have a Times account?
                <NavLink to="/registration" className={styles.active}>Create one</NavLink>
            </span>
        </div>
    )
}
