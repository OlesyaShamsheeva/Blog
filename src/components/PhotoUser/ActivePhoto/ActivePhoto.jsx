import styles from "./ActivePhoto.module.css";

export const ActivePhoto = () => {
    return(
        <div className={styles.buttonActive}>
            <button className={styles.button}>Change photo</button>
            <button className={styles.delete}>Delete photo</button>
        </div>
    )
}
