import styles from ".//RefistrationUser.module.css"
import { useNavigate} from "react-router-dom";
import {useState} from "react";

export const RegistrationUser = () => {
    //сохраняю данные из инпутов в state//
    const [user,setUser]=useState({})
    const navigat=useNavigate()
    return (
        <div className={styles.wrapper}>
            <h1 className={styles.h1}>Create your free account</h1>
            <div className={styles.inform}>
                <div className={styles.inform_el}>First Name</div>
                <input className={styles.input}></input>
            </div>
            <div className={styles.inform}>
                <div className={styles.inform_el}>Name  </div>
                <input className={styles.input}></input></div>
            <div className={styles.inform}>
               <div className={styles.inform_el} >Email Address </div>
                <input className={styles.input}></input></div>
            <div className={styles.inform}>
               <div className={styles.inform_el}>Password</div>
                <input className={styles.input}></input></div>
            <button className={styles.button} onClick={()=>navigat("/all-articles")}
            >
                Create Account</button>
        </div>)
}