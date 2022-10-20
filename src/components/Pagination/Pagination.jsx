import styles from "./Pagination.module.css"
export const Pagination = (  {page, totalPages, handlePagination}) => {
    return (
        <div className={styles.buttons}
             page={page} totalPages={totalPages} handlePagination={handlePagination}
        >
            <button className={styles.button}>Prev</button>
            <button className={styles.button}>Next</button>
        </div>
    )
}