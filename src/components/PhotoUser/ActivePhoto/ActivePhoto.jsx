import styles from "./ActivePhoto.module.css";

export const ActivePhoto = ({ onChange, onDelete }) => {
    return(
        <div className={styles.buttonActive}>
          <div className={styles.wrap}>
            <input type="file" onChange={onChange} className={styles.inp} id="label"/>
            <label  htmlFor="label" className={styles.btn}>
              Upload photo
            </label>
          </div>
            <button onClick={onDelete} className={styles.delete}>Delete photo</button>
        </div>
    )
}
