import {MyContext} from "../../App";

import {PhotoUser} from "../../components/PhotoUser";
import {NoPhoto} from "../../components/PhotoUser/NoPhoto";
import {ActivePhoto} from "../../components/PhotoUser/ActivePhoto";
import {useContext, useState} from "react";
import {TextField} from "../../components/TextField";
import {useParams} from "react-router-dom";
import styles from "./Profile.module.css"

export const Profile = ( { inputRegistr = false} ) => {
  const {articleId} = useParams();
  const {user, setUser, setArticles} = useContext(MyContext)
  const [article, setArticle] = useState(JSON.parse(localStorage.getItem('article')))

  const users = JSON.parse(localStorage.getItem("Users")) || []
  const articles = JSON.parse(localStorage.getItem("Articles")) || []
  const [stateProf, setStateProf] = useState({
    firstName: user?.firstName || "",
    lastName: user?.lastName || "",
    description: user?.description || "",
    avatar: user?.avatar || '',
  })
  const inputProfile = [
    {
      label: "First Name",
      name: "firstName",
      value: stateProf?.firstName,
      description: stateProf?.description,
    },
    {
      label: "Last Name",
      name: "lastName",
      value: stateProf?.lastName,
      description: stateProf?.description,
    },
  ]

  const changeUser = (e) => {
    e.preventDefault()

    if (user.avatar !== stateProf.avatar) {
      const changedArticles = articles.map((article) => {
        if (article.userId !== articleId) {
          return {...article, userAvatar: stateProf.avatar}
        } else {
          return article
        }
      })
      console.log(changedArticles)
      localStorage.setItem("Articles", JSON.stringify(changedArticles))
      setArticles(changedArticles)
    }
    const changedUser = {...user, ...stateProf}
    const changedUsers = users.map((item) => item.id === changedUser.id ? {changedUser} : item)
    localStorage.setItem("user", JSON.stringify(changedUser))
    localStorage.setItem("Users", JSON.stringify(changedUsers))
    setUser(changedUser)

  }

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
    setStateProf((prevState) => ({...prevState, avatar: base64}))
  }


  const handleChangeAut = (e) => setStateProf((prevState) => ({...prevState, [e.target.name]: e.target.value}))

  const handleDeleteImage = () => setStateProf((prevState) => ({...prevState, avatar: ''}))

  return (
      <div>
        <h3 className={styles.caption}>Profile</h3>
        <div className={styles.block}>
          <PhotoUser isBigAvatar photo={stateProf?.avatar}>
            {stateProf?.avatar ?
                <ActivePhoto onChange={handleImageChange} onDelete={handleDeleteImage}/>
                :
                <NoPhoto onChange={handleImageChange}/>
            }
          </PhotoUser>
          <form onSubmit={changeUser} className={styles.form}>
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
              {stateProf?.description}
              <textarea></textarea>
            </div>
            <button type="submit">Save Changes</button>
          </form>
        </div>
      </div>
  )
}