import { useFormik } from 'formik';
import { ProfileFormValidation } from '../ProfileFormValidation';
import { updateProfile } from '../../../http/userApi';
export const InputProfile = () =>{

  const {
    values,
    user,
    setUser
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

  const inputProf= [
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
  return{
    InputProfile
  }
}