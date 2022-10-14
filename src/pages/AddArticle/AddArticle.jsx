import {useContext, useState} from "react";

import {CreateArticle} from "./CreateArticle";
import {ArticleFile} from "./ArticleFile";

import styles from "./AddArticle.module.css"
import {useNavigate} from "react-router-dom";
import {MyContext} from "../../App";

export const AddArticle = () => {
  const navigate = useNavigate()
  const {articles, setArticles} = useContext(MyContext)

  const [user, setUser] = useState(JSON.parse(localStorage.getItem('user')))
  const [formData, setFormData] = useState({
    title: "",
    name: "",
    category: "",
  })

  const articleFormInputs = [
    {
      name: "title",
      value: formData.title,
      placeholder: "Enter a title",
    },
    {
      name: "category",
      value: formData.category,
      placeholder: "Enter the category name...",
    },

  ]

  const submitFormArticle = (e) => {
    e.preventDefault()
    const article = {
      ...formData,
      id: Date.now(),
      viewCounter:"",
      data: new Date().toLocaleString(),
      firstName: user.firstName,
      lastName: user.lastName,
      userId: user.id,
      userAvatar: user.avatar,
    }
    localStorage.setItem("Articles", JSON.stringify([...articles, article]))
    setArticles((prevState) => ([...prevState, article]))
    navigate("/all-articles")
  }
  console.log(formData)
  const handleGetEnter = (e) => setFormData((prevState) => ({...prevState, [e.target.name]: e.target.value}))
  return (
      <div>
        <h1 className={styles.caption}>
          Add article
        </h1>
        <form>
          <div className={styles.inputAdd}>
            {articleFormInputs.map((input) =>
                <ArticleFile
                    key={input.id}
                    name={input.name}
                    input={input}
                    onChange={handleGetEnter}/>
            )}
          </div>
          <CreateArticle
              setFormData={setFormData}/>
          <button
              className={styles.buttonPublish}
              onClick={submitFormArticle}>
            Publish an article
          </button>
        </form>
      </div>
  );
}
