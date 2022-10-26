import { useContext, useState } from 'react';
import { useNavigate } from 'react-router-dom';

import { CreateArticle } from './CreateArticle';
import { ArticleFile } from './ArticleFile';

import { addArticle } from '../../http/articleApi';
import { MyContext } from '../../App';
import styles from './AddArticle.module.css'
import { NoPhotoArticle } from '../Profile/NoPhotoArticle/NoPhotoArticle';

export const AddArticle = () => {
  const navigate = useNavigate()
  const { user } = useContext(MyContext)
  const { article, setArticle } = useContext(MyContext)
  const [file, setFile] = useState(null)

  const articleFormInputs = [
    {
      name: 'title',
      value: article.title,
      placeholder: 'Enter a title',
    },
    {
      name: 'category',
      value: article.category,
      placeholder: 'Enter the category name...',
    },
  ]

  const submitFormArticle = (e) => {
    e.preventDefault()
    const artic = {
      ...article,
      id: Date.now(),
      data: new Date().toLocaleString(),
      firstName: user.firstName,
      lastName: user.lastName,
      userId: user._id,
      userAvatar: user.avatar,
    }
    addArticle({
      ...artic,
      name: 'fff',
      viewCounter: 0,
      data: new Date().toLocaleString(),
    })
    navigate('/all-articles')
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
    console.log(e)
    let reader = new FileReader();
    let file = e.target.files[0];
    setFile(file)
    reader.readAsDataURL(file)
    const base64 = await convertBase64(file)
    console.log(base64)
    setArticle((prevState) => ({ ...prevState, imgArticle: base64 }))
  }

  const handleGetEnter = (e) => setArticle((prevState) => ({ ...prevState, [e.target.name]: e.target.value }))

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
          setFormData={setArticle}/>
        <NoPhotoArticle
          onChange={handleImageChange}
        />
        <div>
          {file?.name}
        </div>
        <button
          className={styles.buttonPublish}
          onClick={submitFormArticle}>
          Publish an article
        </button>
      </form>
    </div>
  );
}
