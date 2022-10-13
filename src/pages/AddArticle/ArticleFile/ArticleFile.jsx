import styles from "./ArticleFile.module.css"
export const ArticleFile = ({input, onChange,}) => {
  return (
      <div >
        <div></div>
        <input
            placeholder={input.placeholder}
        className={styles.inpCreate}
            value={input.value}
            name={input.name}
            onChange={onChange}
            key={input.id}
        />
      </div>
  )
}