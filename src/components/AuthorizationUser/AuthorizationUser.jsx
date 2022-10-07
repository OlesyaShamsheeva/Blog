import styles from "../AuthorizationUser/AuthorizationUser.module.css"
import {NavLink, useNavigate} from "react-router-dom";

export const AuthorizationUser = () => {

    const navCreate=useNavigate()
    return (<div className={styles.wrapper}>
            <h1 className={styles.h1}>Log in to your account</h1>
            <div className={styles.inform}>
                <div className={styles.inform_el}>Email Address</div>
                <input className={styles.input}></input></div>
            <div className={styles.inform}>
                <div className={styles.inform_el}>Password</div>
                <input className={styles.input}
                ></input></div>
            <button className={styles.button} onClick={()=>navCreate("/all-articles")}>SugIn Account</button>
            <span className={styles.link}>Don’t have a Times account?
           <NavLink to={"/registration"} className={styles.active}>Create one</NavLink>
                   </span>
        </div>
    )

}
