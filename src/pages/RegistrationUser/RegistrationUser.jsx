import { NavLink, useNavigate } from 'react-router-dom';
import { useState } from 'react';
import { useFormik } from 'formik';

import { TextField } from '../../components/TextField';

import { Routes } from '../../constants'
import { ValidationSchema } from './ValidationSchema';
import { registration } from '../../http/userApi';
import styles from './RegistrationUser.module.css'

export const RegistrationUser = () => {
  const [error, setError] = useState(false);
  const navigate = useNavigate();

  const formik = useFormik({
    initialValues: {
      firstName: '',
      lastName: '',
      emailAddress: '',
      password: '',
    },
    validationSchema: ValidationSchema,
    onSubmit: (values) => {
      registration(values).then(() => {
        setError(false)
        navigate(Routes.AUTHORIZATION)
      }).catch(() => setError(true))
    },
  });

  const registerFormInputs = [
    {
      label: 'First Name',
      name: 'firstName',
      type: 'text',
      value: formik.values.firstName,
    },
    {
      label: 'Last Name',
      name: 'lastName',
      type: 'text',
      value: formik.values.lastName,
    },
    {
      label: 'Email Address',
      name: 'emailAddress',
      type: 'text',
      value: formik.values.emailAddress,
    },
    {
      label: 'Password',
      name: 'password',
      type: 'password',
      value: formik.values.password,
    },
  ];

  return (
    <div className={styles.wrapper}>
      <h1 className={styles.h1}>Create your free account</h1>
      <form onSubmit={formik.handleSubmit}>
        {registerFormInputs.map((input) => (
          <div key={input.name}>
            <TextField
              input={input}
              onChange={formik.handleChange}
              value={formik.values[input.name]}
              inputRegistr
            />
            {formik.touched[input.name] && formik.errors[input.name] ? (
              <div className={styles.errorvalid}>
                {formik.errors[input.name]}
              </div>
            ) : null}
          </div>
        ))}
        {error && <div className={styles.error}>
          email already in use
        </div>}
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











