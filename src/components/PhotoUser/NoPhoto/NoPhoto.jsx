import styles from './NoPhoto.module.css'

export const NoPhoto = ({ onChange }) => {
  return (
    <div className={styles.wrap}>
      <input type="file" onChange={onChange} className={styles.inp} id="label"/>
      <label htmlFor="label" className={styles.btn}>
        Upload photo
      </label>
    </div>
  )
}
