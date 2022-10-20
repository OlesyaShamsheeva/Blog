import styles from './TextField.module.css'

export const TextField = ({input,value,onChange, inputRegistr}) => {
  return (
      <div className={styles.inform}>
        <div className={styles.inform_el}>{input.label}</div>
        <input
            type={input.type}
            className={(inputRegistr) ? styles.inputReg : styles.inputChange}
            value={value}
            name={input.name}
            onChange={onChange}
        />
      </div>
  )
}