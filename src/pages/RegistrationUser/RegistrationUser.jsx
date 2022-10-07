import {useState} from "react";
import {Navigate, NavLink, useNavigate} from "react-router-dom";
import styles from ".//RefistrationUser.module.css"
import {Menu, NavAction} from "../../components/Navbar";


export const RegistrationUser = () => {
    const navigate = useNavigate()
    const users = JSON.parse(localStorage.getItem("Users"))

    const [error, setError] = useState(false)
    const [state, setState] = useState({
        firstName: '', lastName: '', email: '', password: '',
    })

    const submitForm = () => {
        const emailUser = users.find(el => el.email === state.email)
        console.log(emailUser)
        if (!emailUser) {
            const user = {...state, id: Date.now()}
            localStorage.setItem("Users", JSON.stringify([...users, user]))
            setError(false)
            navigate("/all-articles")
        } else {
setError(true)
        }
    }

    const handleChange = (e) => setState((prevState) => ({...prevState, [e.target.name]: e.target.value}))

    return (<div className={styles.wrapper}>
        <h1 className={styles.h1}>Create your free account</h1>
        <div className={styles.inform}>
            <div className={styles.inform_el}>First Name</div>
            <input
                className={styles.input}
                value={state.firstName}
                name="firstName"
                onChange={handleChange}
            />
        </div>
        <div className={styles.inform}>
            <div className={styles.inform_el}>Last Name</div>
            <input
                value={state.lastName}
                name="lastName"
                className={styles.input}
                onChange={handleChange}
            />
        </div>
        <div className={styles.inform}>
            <div className={styles.inform_el}>Email Address</div>
            < input
                value={state.email}
                name="email"
                className={styles.input}
                onChange={handleChange}
            />
        </div>
        <div className={styles.inform}>
            <div className={styles.inform_el}>Password</div>
            < input
                value={state.password}
                name="password"
                className={styles.input}
                onChange={handleChange}
            />
        </div>
            {error&&<div className={styles.error}>email already in use</div>}
        <button
            className={styles.button}
            onClick={() => submitForm()}>
            Create Account
        </button>
        <span className={styles.link}>
            Do you have an account?
           <NavLink to={"/authorization"} className={styles.active}>SigIn Account</NavLink>
                   </span>
    </div>)
}


