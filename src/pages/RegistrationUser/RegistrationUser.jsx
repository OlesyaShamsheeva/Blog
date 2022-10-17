import {useState} from "react";
import {NavLink, useNavigate} from "react-router-dom";
 import {useFormik} from "formik";
import { Formik } from 'formik';
import * as Yup from "yup";

import {TextField} from "../../components/TextField";

import styles from "./RefistrationUser.module.css"


export const RegistrationUser = () => {
  const formik = useFormik({
    initialValues: {
      firstName: '',
      lastName: '',
      emailAddress: '',
      password: "",
    },
    validationSchema: Yup.object({
      firstName: Yup.string().min(2, 'Too Short!').max(15, "Must be 15 characters of less").required("Required!"),
      lastName: Yup.string().min(2, 'Too Short!').max(20, "Must be 20 characters of less").required("Required!"),
      emailAddress: Yup.string().email("Invalid email address").required("Required!"),
      password: Yup.string()
          .required('No password provided.')
          .min(8, 'Password is too short - should be 8 chars minimum.')
          .matches(/[a-zA-Z]/, 'Password can only contain Latin letters.')
    }),
    onSubmit: values => {
      alert(JSON.stringify(values, null, 2));
    }
  })

  const navigate = useNavigate()

  const [error, setError] = useState(false)


  const users = JSON.parse(localStorage.getItem("Users")) || []

  const registerFormInputs = [
    {
      label: "First Name",
      name: "firstName",
      type: "text",
      value: formik.initialValues.firstName
    },
    {
      label: "Last Name",
      name: "lastName",
      type: "text",
      value: formik.initialValues.lastName
    },
    {
      label: "Email Address",
      name: " emailAddress",
      type: "text",
      value: formik.initialValues.emailAddress
    },
    {
      label: "Password",
      name: "Password",
      type: "password",
      value: formik.initialValues.password
    },
  ]
  console.log(formik)
  const submitForm = () => {
    const emailUser = users.find(el => el.email === formik.initialValues.emailAddress)
    if (!emailUser) {
      const user = {
        ...formik.initialValues,
        id: Date.now(),
        avatar: '',
        description: '',
      }
      localStorage.setItem("Users", JSON.stringify([...users, user]))
      setError(false)
      navigate("/authorization")
    } else {
      setError(true)
    }
  }

  const handleChange = (e) => ((prevState) => ({...prevState, [e.target.name]: e.target.value}))


  ;

  return (
      <div className={styles.wrapper}>
        <h1 className={styles.h1}>Create your free account</h1>
        <form onSubmit={formik.handleSubmit}>
          {registerFormInputs.map((input) => (
              <TextField key={input.name} input={input} onChange={formik.handleChange} value={input.value} inputRegistr/>
          ))}
          {error && <div className={styles.error}>email already in use</div>}
          <button
              className={styles.button}
              type="submit"
              onClick={submitForm}
          >
            Create Account
          </button>
        </form>
        <span className={styles.link}>
            Do you have an account?
           <NavLink to="/authorization" className={styles.active}>
               SigIn Account
           </NavLink>
        </span>
      </div>
  )
}


