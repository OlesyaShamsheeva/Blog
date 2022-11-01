import { TextField } from '../../components/TextField';
import styles from './RegistrationUser.module.css';

export const Form = ({ array, handleChange, values, touched, errors, error }) => {
  return (
    <div>
      {array.map((input) => (
        <div key={input.name}>
          <TextField
            input={input}
            onChange={handleChange}
            value={values[input.name]}
            inputRegistr
          />
          {touched[input.name] && errors[input.name] ? (
            <div className={styles.errorvalid}>
              {errors[input.name]}
            </div>
          ) : null}
        </div>
      ))}
      {error && <div className={styles.error}>
        email already in use
      </div>}
    </div>
  )


}
