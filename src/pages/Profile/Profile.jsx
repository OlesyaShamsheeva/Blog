import { useContext, useEffect } from 'react';


import { PhotoUser } from '../../components/PhotoUser';
import { NoPhoto } from '../../components/PhotoUser/NoPhoto';
import { ActivePhoto } from '../../components/PhotoUser/ActivePhoto';

import { TextField } from '../../components/TextField';
import jwt_decode from 'jwt-decode';

import { MyContext } from '../../App';
import { deletePhoto, myProfile } from '../../http/userApi';
import { updateProfile } from '../../http/userApi';
import styles from './Profile.module.css'

export const Profile = ({ inputRegistr = false }) => {
  const { user, setUser } = useContext(MyContext)

  const inputProfile = [
    {
      label: 'First Name',
      name: 'firstName',
      value: user.firstName,
      description: user.description,
    },
    {
      label: 'Last Name',
      name: 'lastName',
      value: user.lastName,
      description: user.description,
    },
  ]

  const convertBase64 = (file) =>
    new Promise((resolve, reject) => {
      const fileReader = new FileReader()
      fileReader.readAsDataURL(file)
      fileReader.onload = () => {
        resolve(fileReader.result)
      }
      fileReader.onerror = (error) => {
        reject(error)
      }
    })

  async function handleImageChange(e) {
    e.preventDefault();
    let reader = new FileReader();
    let file = e.target.files[0];
    console.log(file)
    reader.readAsDataURL(file)
    const base64 = await convertBase64(file)
    setUser((prevState) => ({ ...prevState, avatar: base64 }))
  }

  const handleChangeAut = (e) => setUser((prevState) => ({ ...prevState, [e.target.name]: e.target.value }))

  const handleSubmit = (e) => {
    e.preventDefault()
    console.log(user)
    updateProfile({
      avatar: user.avatar,
      description: user.description,
      emailAddress: user.emailAddress,
      firstName: user.firstName,
      lastName: user.lastName,
      name: '',
      password: user.password,
      __v: user.__v,
      _id: user._id
    })
  }

  const handleDeleteImage = () => {
    setUser((prevState) => ({ ...prevState, avatar: '' }))
    deletePhoto(user.avatar)
  }

  useEffect(() => {
    const { userId } = jwt_decode(localStorage.getItem('token').slice(7))
    myProfile(userId).then((res) => setUser(res))
  }, [])

  return (
    <div className={styles.wrap}>
      <h3 className={styles.caption}>Profile</h3>
      <div className={styles.block}>
        <PhotoUser isBigAvatar photo={user.avatar}>
          {user.avatar ?
            <ActivePhoto onChange={handleImageChange} onDelete={handleDeleteImage}/>
            :
            <NoPhoto onChange={handleImageChange}/>
          }
        </PhotoUser>
        <form onSubmit={handleSubmit} className={styles.form}>
          <div className={styles.inputChange}>
            {inputProfile.map((input) =>
              <TextField
                key={input.label}
                input={input}
                onChange={handleChangeAut}
                inputRegistr={false}
              />
            )}
          </div>
          <div className={styles.div}>
              <textarea onChange={handleChangeAut} value={user.description} onChange={(e) => {
                setUser({ ...user, description: e.target.value })
              }}/>
          </div>
          <div className={styles.submit}>
            <button type="submit" className={styles.btn}>Save Changes</button>
          </div>
        </form>
      </div>
    </div>
  )
}








