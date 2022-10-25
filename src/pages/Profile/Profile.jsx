import {MyContext} from "../../App";

import {PhotoUser} from "../../components/PhotoUser";
import {NoPhoto} from "../../components/PhotoUser/NoPhoto";
import {ActivePhoto} from "../../components/PhotoUser/ActivePhoto";
import {useContext, useState, useEffect} from "react";
import {TextField} from "../../components/TextField";
import {useParams} from "react-router-dom";
import styles from "./Profile.module.css"
import {deletePhoto, myProfile} from "../../http/userApi";
import {updateProfile} from "../../http/userApi";


export const Profile = ({inputRegistr = false}) => {
  const {articleId} = useParams();
  const {user, setUser} = useContext(MyContext)
  const [article, setArticle] = useState(MyContext)

  const inputProfile = [
    {
      label: "First Name",
      name: "firstName",
      value: user?.firstName,
      description: user?.description,
    },
    {
      label: "Last Name",
      name: "lastName",
      value: user?.lastName,
      description: user?.description,
    }]

  //
  // const changeUser = (e) => {
  //   e.preventDefault()
  //   if (user.avatar !== user.avatar) {
  //     const changedArticles = article.map((article) => {
  //       if (article.userId !== articleId) {
  //         return {...article, userAvatar: user.avatar}
  //       } else {
  //         return article
  //       }
  //     })
  //     setArticle(changedArticles)
  //   }
  //   const changedUser = {...user, ...user}
  //   const changedUsers = user.map((item) => item.id === changedUser.id ? {changedUser} : item)
  //   setUser(changedUser)
  // }

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
    reader.readAsDataURL(file)
    const base64 = await convertBase64(file)
    setUser((prevState) => ({...prevState, avatar: base64}))
  }

  const handleChangeAut = (e) => setUser((prevState) => ({...prevState, [e.target.name]: e.target.value}))


  const handleDeleteImage = () => {
    setUser((prevState) => ({...prevState, avatar: ''}))
    deletePhoto(user.avatar)
  }
  const changeUserId = (e) => {
    e.preventDefault()
    const data = {
      ...user,
    }
    updateProfile(data)
    setUser(updateProfile)
  }

  return (
      <div>
        <h3 className={styles.caption}>Profile</h3>
        <div className={styles.block}>
          <PhotoUser isBigAvatar photo={user?.avatar}>
            {user?.avatar ?
                <ActivePhoto onChange={handleImageChange} onDelete={handleDeleteImage}/>
                :
                <NoPhoto onChange={handleImageChange}/>
            }
          </PhotoUser>
          <form className={styles.form}>
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
              {user?.description}
              <textarea></textarea>
            </div>
            <button  onSubmit={changeUserId}>Save Changes</button>
          </form>
        </div>
      </div>
  )
}









