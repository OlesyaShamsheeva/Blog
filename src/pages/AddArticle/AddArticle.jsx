import {useContext, useState} from "react";

import {CreateArticle} from "./CreateArticle";
import {ArticleFile} from "./ArticleFile";

import styles from "./AddArticle.module.css"
import {useNavigate} from "react-router-dom";
import {MyContext} from "../../App";
import {addArticle} from "../../http/articleApi";

export const AddArticle = () => {
  const navigate = useNavigate()
  const {user,setUser}=useContext(MyContext)
  const {article, setArticle} = useContext(MyContext)

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
      userId: user._id,
      userAvatar: user.avatar,
    }
    console.log(article)
    addArticle({...article,
      name: 'fff',
      viewCounter: 0,
      data: new Date(),
    } )
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
