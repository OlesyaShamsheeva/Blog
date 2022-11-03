import { useState } from 'react';
import { useNavigate } from 'react-router-dom';

import { useFormik } from 'formik';
import {Routes} from "../../constants"
import { registration } from '../../http/userApi';
import { ValidationSchema } from './ValidationSchema';
import { authApi } from '../../store/auth/auth.api';


export const useRegistration= () => {
  const [error, setError] = useState(false);
  const [createUser,{}]=authApi.useCreateUserMutation({
  })

  const navigate = useNavigate();
  const {
    values,
    handleSubmit,
    handleChange,
    touched,
    errors,
  }=useFormik({
  initialValues: {
    firstName: '',
    lastName: '',
    emailAddress: '',
    password: '',
  },
  validationSchema: ValidationSchema,
  onSubmit: async (values) => {
    await registration(values).then(() => {
      setError(false)
      navigate(Routes.AUTHORIZATION)
    }).catch(() => setError(true))
    createUser({...values,body:values})
  },
});
  console.log(values)
const registerFormInputs = [
  {
    label: 'First Name',
    name: 'firstName',
    type: 'text',
    value:values.firstName,
  },
  {
    label: 'Last Name',
    name: 'lastName',
    type: 'text',
    value: values.lastName,
  },
  {
    label: 'Email Address',
    name: 'emailAddress',
    type: 'text',
    value: values.emailAddress,
  },
  {
    label: 'Password',
    name: 'password',
    type: 'password',
    value: values.password,
  },
]

  return {
    error,
    handleSubmit,
    registerFormInputs,
    handleChange,
    values,
    touched,
    errors,

  }
}