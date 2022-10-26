import styles from '../NoPhotoArticle/NoPhotoArticle.module.css'

export const NoPhotoArticle = ({ onChange }) => {
  return (
    <div className={styles.wrap}>
      <input type="file" onChange={onChange} className={styles.inp} id="label"/>
      <label htmlFor="label" className={styles.btn}>
        Loading img
      </label>
    </div>
  )
}
