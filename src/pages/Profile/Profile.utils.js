import { useContext, useEffect, useState } from 'react';
import { useFormik } from 'formik';
import jwt_decode from 'jwt-decode';

import { deletePhoto, myProfile, updateProfile } from '../../http/userApi';
import { MyContext } from '../../App';
import { ProfileFormValidation } from './ProfileFormValidation';
import {    InputProfile} from "../../pages/Profile/hooks/InputProfile"

export const useProfile = () => {
  const { user, setUser } = useContext(MyContext);
  const [error] = useState(false);

const {InputProfile,setValues, handleSubmit,
  handleChange,
  values,
  touched,
  errors,}=InputProfile()
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
      setValues(res);
    });
  }, []);

  return {
    InputProfile,
    user,
    error,
    handleImageChange,
    handleDeleteImage,
    handleSubmit,
    handleChange,
    values,
    touched,
    errors,
  }
}