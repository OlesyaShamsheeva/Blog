import {useState} from "react";
import {NavLink, useNavigate} from "react-router-dom";
import {useFormik} from "formik";
import * as Yup from "yup";
import {TextField} from "../../components/TextField";

import styles from "./RegistrationUser.module.css"

export const RegistrationUser = () => {
  const users = JSON.parse(localStorage.getItem("Users")) || [];

  const formik = useFormik({
    initialValues: {
      firstName: "",
      lastName: "",
      emailAddress: "",
      password: "",
    },
    validationSchema: Yup.object({
      firstName: Yup.string()
          .min(2, "Must be at least 3 characters")
          .max(15, "Must be 15 characters of less")
          .required("Required!"),
      lastName: Yup.string()
          .min(2, "Must be at least 3 characters")
          .max(20, "Must be 20 characters of less")
          .required("Required!"),
      emailAddress: Yup.string()
          .email("Invalid email address")
          .required("Required!"),
      password: Yup.string()
          .required("No password provided.")
          .min(8, "Password is too short - should be 8 chars minimum.")
          .matches(/[a-zA-Z]/, "Password can only contain Latin letters."),
    }),

    onSubmit: (values) => {
      const emailUser = users.find(
          (el) => el.email === formik.initialValues.emailAddress
      );
      if (!emailUser) {
        const user = {
          ...formik.initialValues,
          id: Date.now(),
          avatar: "",
          description: "",
        };
        localStorage.setItem("Users", JSON.stringify([...users, user]));
        setError(false);
        navigate("/authorization");
      } else {
        setError(true);
      }
    },
  });


  const navigate = useNavigate();
  const [error, setError] = useState(false);

  const registerFormInputs = [
    {
      label: "First Name",
      name: "firstName",
      type: "text",
      value: "",
    },
    {
      label: "Last Name",
      name: "lastName",
      type: "text",
      value: "",
    },
    {
      label: "Email Address",
      name: "emailAddress",
      type: "text",
      value: "",
    },
    {
      label: "Password",
      name: "password",
      type: "password",
      value: "",
    },
  ];

  return (
      <div className={styles.wrapper}>
        <h1 className={styles.h1}>Create your free account</h1>
        <form onSubmit={formik.handleSubmit}>
          {registerFormInputs.map((input) => (
              <>
                <TextField
                    key={input.name}
                    input={input}
                    onChange={(e) => formik.setFieldValue(input.name, e.target.value)}
                    value={formik.values[input.name]}
                    inputRegistr
                />
                {formik.touched[input.name] && formik.errors[input.name] ? (
                    <div className={styles.errorvalid}> {formik.errors [input.name]}</div>) : null}
              </>
          ))}
          {error && <div className={styles.error}>email already in use</div>}
          <button
              className={styles.button}
              type="submit"
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
  );
};






