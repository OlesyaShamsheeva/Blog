import { NavLink} from 'react-router-dom';

import { TextField } from '../../components/TextField';
import { useAuthorization } from './Authorizatuon.utils';
import { Routes } from '../../constants'
import styles from './AuthorizationUser.module.css'

export const AuthorizationUser = () => {

  const {
    passwordFormInput,
    handleChangeAut,
    errorAut,
    errorText,
    submitFormAut
  } = useAuthorization()

  return (
    <div className={styles.wrapper}>
      <h1 className={styles.h1}>
        Log in to your account
      </h1>
      {passwordFormInput.map((input) => (
        <TextField
          key={input.name}
          input={input}
          onChange={handleChangeAut}
          inputRegistr/>
      ))}
      {errorAut && <div className={styles.error}>
        {errorText}
      </div>}
      <button
        className={styles.button}
        onClick={submitFormAut}
      >
        Login Account
      </button>
      <span className={styles.link}>
                Don’t have a Times account?
                <NavLink to={Routes.REGISTRATION} className={styles.active}>Create one</NavLink>
            </span>
    </div>
  )
}









