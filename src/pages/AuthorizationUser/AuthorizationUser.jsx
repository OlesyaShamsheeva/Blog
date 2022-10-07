import styles from "./AuthorizationUser.module.css"
import {NavLink, useNavigate} from "react-router-dom";
import {useState} from "react";

export const AuthorizationUser = () => {
    const navCreate = useNavigate()

    const [errorAut, setErrorAut] = useState(false)
    const [stateAut, setStateAut] = useState({
        email: '', password: '',
    })
    const users = JSON.parse(localStorage.getItem("Users"))
    const submitFormAut = () => {
        const emailUser = users.find(el => el.email === stateAut.email)
        if (!emailUser) {
            const user = {...stateAut, id: Date.now()}
            localStorage.setItem("Users", JSON.stringify([...users, user]))
            setErrorAut(false)
            navCreate("/all-articles")
        } else {
            setErrorAut(true)
        }
    }
    const handleChangeAut = (e) => setStateAut((prevState) => ({...prevState, [e.target.name]: e.target.value}))
    return (<div className={styles.wrapper}>
            <h1 className={styles.h1}>Log in to your account</h1>
            <div className={styles.inform}>
                <div className={styles.inform_el}>Email Address</div>
                < input
                    value={stateAut.email}
                    name="email"
                    className={styles.input}
                    onChange={handleChangeAut}
                />
            </div>
            <div className={styles.inform}>
                <div className={styles.inform_el}>Password</div>
                < input
                    value={stateAut.password}
                    name="password"
                    className={styles.input}
                    onChange={handleChangeAut}
                />
            </div>
            {errorAut&&<div>email already in use</div>}
            <button className={styles.button} onClick={() => navCreate("/all-articles")}
                    onClick={() => submitFormAut()}>SugIn Account
            </button>
            <span className={styles.link}>Don’t have a Times account?
           <NavLink to={"/registration"} className={styles.active}>Create one</NavLink>
                   </span>
        </div>
    )
}
