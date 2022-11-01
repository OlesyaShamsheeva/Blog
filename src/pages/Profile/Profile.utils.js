import { useContext, useEffect, useState } from 'react';
import { useFormik } from 'formik';
import jwt_decode from 'jwt-decode';

import { deletePhoto, myProfile, updateProfile } from '../../http/userApi';
import { MyContext } from '../../App';
import { ProfileFormValidation } from './ProfileFormValidation';

export const useProfile = () => {
  const { user, setUser } = useContext(MyContext);
  const [error] = useState(false);

  const {
    handleSubmit,
    handleChange,
    values,
    touched,
    errors,
    setValues,
  } = useFormik({
    initialValues: {
      firstName: user.firstName,
      lastName: user.lastName,
      description: user.description,
    },
    validationSchema: ProfileFormValidation,
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

  const inputProfile= [
    {
      label: "First Name",
      name: "firstName",
      value: values.firstName,
    },
    {
      label: "Last Name",
      name: "lastName",
      value: values.lastName,
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
      setValues(res);
    });
  }, []);

  return {
    inputProfile,
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