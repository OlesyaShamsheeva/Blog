import styles from '../Reference/Reference.module.css'

export const Reference = () => {
  const text="© 2021 Justice-it. All rights reserved."
  return (
    <div className= { styles.reference } >
      <div> {text}</div>
      <div>{text}</div>
    </div>
  )
}