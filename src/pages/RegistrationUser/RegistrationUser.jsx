import { NavLink, useNavigate } from 'react-router-dom';
import { useState } from 'react';
import { useFormik } from 'formik';

import * as Yup from 'yup';

import { TextField } from '../../components/TextField';

import { Routes } from '../../constants'
import { Validation } from '../../constants'
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
    validationSchema: Yup.object({
      firstName: Yup.string().trim()
        .min(3, Validation.MIN_LENGTH_3)
        .max(15, Validation.MAX_LENGTH_15)
        .matches(/^[A-Za-z-ЁёА-я\s`-]+$/, 'Only letters allowed')
        .required(Validation.REQUIRED),
      lastName: Yup.string().trim()
        .min(3, Validation.MIN_LENGTH_3)
        .max(15, Validation.MAX_LENGTH_15)
        .matches(/^[A-Za-z-ЁёА-я\s`-]+$/, 'Only letters allowed')
        .required(Validation.REQUIRED),
      emailAddress: Yup.string()
        .email(Validation.INVALID_EMAIL)
        .required(Validation.REQUIRED),
      password: Yup.string()
        .required(Validation.REQUIRED)
        .min(8, Validation.PASSWORD_MIN_LENGTH_8)
        .matches(/[a-zA-Z]/, Validation.PASSWORD_LETTERS),
    }),
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











