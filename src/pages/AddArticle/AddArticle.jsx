import { useContext, useState } from 'react';
import { useNavigate } from 'react-router-dom';

import { CreateArticle } from './CreateArticle';
import { ArticleFile } from './ArticleFile';
import { PhotoArticle } from '../../components/PhotoArticle';

import { addArticle, deletePhotoArticle } from '../../http/articleApi';
import { MyContext } from '../../App';
import { Routes } from '../../constants'
import styles from './AddArticle.module.css'

export const AddArticle = ({inputRegistr = false} ) => {
  const navigate = useNavigate()

  const { article, setArticle, user } = useContext(MyContext)

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
    navigate(Routes.ALL_ARTICLES)
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
    setFile(file)
    reader.readAsDataURL(file)
    const base64 = await convertBase64(file)
    setArticle((prevState) => ( { ...prevState, imgArticle: base64 } ))
  }

  const handleGetEnter = (e) => setArticle((prevState) => ( { ...prevState, [e.target.name]: e.target.value } ))

  const handleDeleteImage = (e) => {
    e.preventDefault()
    setArticle((prevState) => ({ ...prevState, imgArticle: '' }))
    deletePhotoArticle(article.imgArticle)
  }

  return (
    <div className={styles.wrap}>
      <h1 className={styles.caption}>
        Add article
      </h1>
      <form onSubmit={submitFormArticle}>
        <div className={styles.inputAdd}>
          {articleFormInputs.map((input) =>
            <ArticleFile
              key={input.id}
              name={input.name}
              input={input}
              inputRegistr={false}
              onChange={handleGetEnter}/>
          )}
        </div>
        <div className={styles.textadd}>
          <CreateArticle
            setFormData={setArticle}/>
        </div>
        <PhotoArticle
          onChange={handleImageChange}
          onDelete={handleDeleteImage}
        />
        <div>
          <>
            {article.imgArticle ?
              file?.name : ''}
          </>
        </div>
        <button
          className={styles.buttonPublish}
          type="submit">
          Publish an article
        </button>
      </form>
    </div>
  );
}
