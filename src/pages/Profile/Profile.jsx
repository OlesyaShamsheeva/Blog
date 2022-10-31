import { useContext, useEffect, useState } from "react";
import { useFormik } from "formik";


import { PhotoUser } from "../../components/PhotoUser";
import { NoPhoto } from "../../components/PhotoUser/NoPhoto";
import { ActivePhoto } from "../../components/PhotoUser/ActivePhoto";
import { TextField } from "../../components/TextField";


import styles from "./Profile.module.css";
import { useProfile } from './Profile.utils';


export const Profile = () => {
  const {
    user,
    handleImageChange,
    handleDeleteImage,
    handleSubmit,
    handleChange,
    inputProfile,values,errors,error,touched

  } = useProfile()


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
        <form onSubmit={handleSubmit} >
          {inputProfile.map((input) => (
            <div key={input.name}>
               <TextField
                 input={input}
                 name={input.name}
                 onChange={handleChange}
                 value={values[input.name]}
                 inputRegistr={false}
               />
              {touched[input.name] &&errors[input.name] ? (
                <div className={styles.errorvalid}>
                  {errors[input.name]}
                </div>
              ) : null}
            </div>
          ))}
          {error && <div className={styles.error}>email already in use</div>}
          <div className={styles.div}>
            <textarea
              onChange={handleChange}
              name="description"
              value={values.description}
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


















