import { useNavigate } from 'react-router-dom';
import { useContext, useState } from 'react';

import { MyContext } from '../../App';
import { authorization } from '../../http/userApi';
import { Routes } from '../../constants'
import { authApi } from '../../store/auth/auth.api';

export const useAuthorization = () => {

  const navigate = useNavigate()
  const { setIsAuth, setUser } = useContext(MyContext)
  const [errorAut, setErrorAut] = useState(false)
  const [errorText, setErrorText] = useState('')
  const [stateAut, setStateAut] = useState({
    emailAddress: '',
    password: '',
  })

  const passwordFormInput = [
    {
      label: 'Email Address',
      name: 'emailAddress',
      type: 'text',
      value: stateAut.emailAddress
    },
    {
      label: 'Password',
      name: 'password',
      type: 'password',
      value: stateAut.password
    },
  ]

  const handleChangeAut = (e) => setStateAut((prevState) => ({ ...prevState, [e.target.name]: e.target.value }))
  const [createUser,{}]=authApi.useCreateUserMutation({
  })
  const submitFormAut = async () => {
    await authorization(stateAut.emailAddress, stateAut.password).then((res) => {
        setIsAuth(true)
        setUser(res)
        navigate(Routes.ALL_ARTICLES)
      createUser({...res,body:res})
      }
    ).catch((error) => {
      setErrorAut(true)
      setErrorText(error.response.data.message)
    })
  }
  return {
    passwordFormInput,
    handleChangeAut,
    errorAut,
    errorText,
    submitFormAut
  }
}

