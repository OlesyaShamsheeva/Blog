import styles from "./NoPhoto.module.css"
export const NoPhoto = () => {
  return(
      <div className={styles.wrap}>
          <input type="file" className={styles.button} />
          <button className={styles.button}>
          </button>
      </div>
  )
}
