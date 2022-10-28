import styles from './PhotoArticle.module.css'

export const PhotoArticle = ( { onChange, onDelete, } ) => {
  return (
    <div className={styles.buttonActive}>
      <div className={styles.wrap}>
        <input type="file" onChange={onChange} className={styles.inp} id="label"/>
        <label htmlFor="label" className={styles.btn}>
          Add img
        </label>
      </div>
      <button onClick={onDelete} className={styles.delete}>Delete img</button>
    </div>
  )
}







