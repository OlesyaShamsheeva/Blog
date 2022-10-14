import {useState} from "react";
import {NavLink, useNavigate} from "react-router-dom";

import {TextField} from "../../components/TextField";

import styles from "./RefistrationUser.module.css"


export const RegistrationUser = () => {
    const navigate = useNavigate()

    const [error, setError] = useState(false)
    const [state, setState] = useState({
        firstName: '',
        lastName: '',
        email: '',
        password: '',
    })

    const users = JSON.parse(localStorage.getItem("Users")) || []

    const registerFormInputs = [
        {
            label: "First Name",
            name: "firstName",
            type: "text",
            value: state.firstName
        },
        {
            label: "Last Name",
            name: "lastName",
            type: "text",
            value: state.lastName
        },
        {
            label: "Email Address",
            name: "email",
            type: "text",
            value: state.email
        },
        {
            label: "Password",
            name: "password",
            type: "password",
            value: state.password
        },
    ]

    const submitForm = () => {
        const emailUser = users.find(el => el.email === state.email)
        if (!emailUser) {
            const user = {
                ...state,
                id: Date.now(),
                avatar: '',
                description: '',
            }
            localStorage.setItem("Users", JSON.stringify([...users, user]))
            setError(false)
            navigate("/authorization")
        } else {
            setError(true)
        }
    }

    const handleChange = (e) => setState((prevState) => ({...prevState, [e.target.name]: e.target.value}))

    return (
        <div className={styles.wrapper}>
            <h1 className={styles.h1}>Create your free account</h1>
            {registerFormInputs.map((input) => (
                <TextField key={input.name} input={input} onChange={handleChange} inputRegistr/>
            ))}
            {error && <div className={styles.error}>email already in use</div>}
            <button
                className={styles.button}
                onClick={submitForm}
            >
                Create Account
            </button>
            <span className={styles.link}>
            Do you have an account?
           <NavLink to="/authorization" className={styles.active}>
               SigIn Account
           </NavLink>
        </span>
        </div>
    )
}


