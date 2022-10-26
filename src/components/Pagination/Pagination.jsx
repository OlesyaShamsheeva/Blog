import styles from './Pagination.module.css'

export const Pagination = ({  }) => {

  return (
    <div className={styles.buttons}>
      <button className={styles.button}>
        Prev
      </button>
      <button className={styles.button}>Next</button>
    </div>
  )
}