import { useNavigate, useParams } from 'react-router-dom';
import { useEffect, useState } from 'react';

import { detailArticle, updateArticle } from '../../http/articleApi';
import {useGetArticleQuery} from '../../store/article/article.api';

export const useArticleDetails = () => {
  const navigate = useNavigate()
  const { articleId } = useParams()
  const [article, setArticle] = useState({})
  const {}=useGetArticleQuery(articleId)
  console.log(articleId)
  useEffect(() => {
    detailArticle(articleId).then((res) => {
      const updatedArticle = {
        ...res,
        viewCounter: Number(res.viewCounter) + 1
      }
      updateArticle(updatedArticle)
      setArticle(updatedArticle)
    })

  }, [])


  if (!article) {
    return <div>Loading...</div>
  }

  return {
    navigate,
    article,
  }


}
