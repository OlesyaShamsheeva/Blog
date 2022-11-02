import { useNavigate } from 'react-router-dom';
import { useContext, useState } from 'react';

import { MyContext } from '../../App';
import { addArticle, deletePhotoArticle } from '../../http/articleApi';
import { Routes } from '../../constants'

export const useAddArticle = () => {

  const navigate = useNavigate()
  const {article,setArticle, user } = useContext(MyContext)
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
    setArticle((prevState) => ({ ...prevState, imgArticle: base64 }))
  }

  const handleGetEnter = (e) => setArticle((prevState) => ({ ...prevState, [e.target.name]: e.target.value }))

  const handleDeleteImage = (e) => {
    e.preventDefault()
    setArticle((prevState) => ({ ...prevState, imgArticle: '' }))
    deletePhotoArticle(article.imgArticle)
  }

  return {
    submitFormArticle,
    articleFormInputs,
    handleGetEnter,
    setArticle,
    handleImageChange,
    handleDeleteImage,
    file,
    article,
  }

}
