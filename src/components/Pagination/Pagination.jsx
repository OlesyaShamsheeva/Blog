import styles from './Pagination.module.css'

export const Pagination = ({next,prev}) => {
  return (
    <div className={styles.buttons}>
           <button onClick={prev} className={styles.btn}>
             Prev
           </button>
            <button  onClick={next} className={styles.btn} >
              Next
            </button>
</div>
  )
}