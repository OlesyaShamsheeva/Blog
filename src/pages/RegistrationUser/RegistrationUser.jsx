import { NavLink} from 'react-router-dom';

import { Form } from './Form';
import { useRegistration } from './Registration.utils';
import { Routes } from '../../constants'
import styles from './RegistrationUser.module.css'
import {authApi} from '../../store/auth/auth.api';

export const RegistrationUser = () => {

  const {
    error,
    handleSubmit,
    registerFormInputs,
    handleChange,
    values,
    touched,
    errors,
  } = useRegistration()

  return (
    <div className={styles.wrapper}>
      <h1 className={styles.h1}>Create your free account</h1>
      <form onSubmit={handleSubmit}>
        <Form array={registerFormInputs} handleChange={handleChange} values={values} touched={touched} errors={errors}
              error={error}/>
        <button className={styles.button} type="submit">
          Create Account
        </button>
      </form>
      <span className={styles.link}>
        Do you have an account?
        <NavLink to={Routes.AUTHORIZATION} className={styles.active}>
         Login Account
        </NavLink>
      </span>
    </div>
  );
};











