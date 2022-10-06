import styles from "./NavAction.module.css"

export const NavAction = ({auth,isHeader}) => {
    return (
        <div className={styles.button}>
            <button className={(isHeader)? styles.button_white:styles.button_black}  onClick={() => auth()} >Log in</button>
            <button  className={(isHeader)? styles.button_black:styles.button_black_footer} onClick={() => auth()} > Sign in</button>
        </div>

    )
}