import styles from "./NavAction.module.css"
export const NavAction=()=>{
    return (
        <div className={styles.button}>
            <button className={styles.LogIn}> Log in</button>
            <button className={styles.SignIn}> Sign in</button>
        </div>

    )
}