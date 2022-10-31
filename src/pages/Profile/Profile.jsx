import { useContext, useEffect, useState } from "react";
import { useFormik } from "formik";
import * as Yup from "yup";

import { PhotoUser } from "../../components/PhotoUser";
import { NoPhoto } from "../../components/PhotoUser/NoPhoto";
import { ActivePhoto } from "../../components/PhotoUser/ActivePhoto";
import { TextField } from "../../components/TextField";

import jwt_decode from "jwt-decode";
import { MyContext } from "../../App";
import { Validation } from "../../constants";
import { deletePhoto, myProfile } from "../../http/userApi";
import { updateProfile } from "../../http/userApi";
import styles from "./Profile.module.css";

export const Profile = ({ inputRegistr = false }) => {

  const { user, setUser } = useContext(MyContext);
  const [error, setError] = useState(false);

  const formik = useFormik({
    initialValues: {
      firstName: user.firstName,
      lastName: user.lastName,
      description: user.description,
    },
    validationSchema: Yup.object({
      firstName: Yup.string()
        .trim()
        .min(3, Validation.MIN_LENGTH_3)
        .max(15, Validation.MAX_LENGTH_15)
        .matches(/^[A-Za-z-ЁёА-я\s`-]+$/, "Only letters allowed")
        .required(Validation.REQUIRED),
      lastName: Yup.string()
        .trim()
        .min(3, Validation.MIN_LENGTH_3)
        .max(15, Validation.MAX_LENGTH_15)
        .matches(/^[A-Za-z-ЁёА-я\s`-]+$/, "Only letters allowed")
        .required(Validation.REQUIRED),
    }),
    onSubmit: async (values) => {
      const data = await updateProfile({
        avatar: user.avatar,
        description: values.description,
        emailAddress: user.emailAddress,
        firstName: values.firstName,
        lastName: values.lastName,
        name: "",
        password: user.password,
        __v: user.__v,
        _id: user._id,
      });
      setUser(data);
    },
  });

  const inputProfile = [
    {
      label: "First Name",
      name: "firstName",
      value: formik.values.firstName,
    },
    {
      label: "Last Name",
      name: "lastName",
      value: formik.values.lastName,
    }
  ];

  const convertBase64 = (file) =>
    new Promise((resolve, reject) => {
      const fileReader = new FileReader();
      fileReader.readAsDataURL(file);
      fileReader.onload = () => {
        resolve(fileReader.result);
      };
      fileReader.onerror = (error) => {
        reject(error);
      };
    });
  async function handleImageChange(e) {
    e.preventDefault();
    let reader = new FileReader();
    let file = e.target.files[0];
    reader.readAsDataURL(file);
    const base64 = await convertBase64(file);
    setUser((prevState) => ({ ...prevState, avatar: base64 }));
  }

  const handleDeleteImage = () => {
    setUser((prevState) => ({ ...prevState, avatar: "" }));
    deletePhoto(user.avatar);
  };

  useEffect(() => {
    const { userId } = jwt_decode(localStorage.getItem("token").slice(7));
    myProfile(userId).then((res) => {
      setUser(res);
      formik.setValues(res);
    });
  }, []);
  return (
    <div className={styles.wrap}>
      <h3 className={styles.caption}>Profile</h3>
      <div className={styles.block}>
        <div className={styles.foto}>
          <PhotoUser isBigAvatar photo={user.avatar}>
            {user.avatar ? (
              <ActivePhoto
                onChange={handleImageChange}
                onDelete={handleDeleteImage}
              />
            ) : (
              <NoPhoto onChange={handleImageChange} />
            )}
          </PhotoUser>
        </div>
        <form onSubmit={formik.handleSubmit} >
          {inputProfile.map((input) => (
            <div key={input.name}>
               <TextField
                 input={input}
                 name={input.name}
                 onChange={formik.handleChange}
                 value={formik.values[input.name]}
                 inputRegistr={false}
               />
              {formik.touched[input.name] && formik.errors[input.name] ? (
                <div className={styles.errorvalid}>
                  {formik.errors[input.name]}
                </div>
              ) : null}
            </div>
          ))}
          {error && <div className={styles.error}>email already in use</div>}
          <div className={styles.div}>
            <textarea
              onChange={formik.handleChange}
              name="description"
              value={formik.values.description}
            />
          </div>
          <div className={styles.submit}>
            <button type="submit" className={styles.btn}>
              Save Changes
            </button>
          </div>
        </form>
      </div>
    </div>
  );
};


















