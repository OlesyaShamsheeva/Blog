import styles from './TextField.module.css'

export const TextField = ({ input, onChange }) => {
  return (
      <div className={styles.inform}>
          <div className={styles.inform_el}>{input.label}</div>
          <input
              type={input.type}
              className={styles.input}
              value={input.value}
              name={input.name}
              onChange={onChange}
          />
      </div>
  )
}