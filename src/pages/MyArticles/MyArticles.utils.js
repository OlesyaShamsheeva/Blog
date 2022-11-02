import { useContext, useEffect } from 'react';
import { MyContext } from '../../App';

import jwt_decode from 'jwt-decode';

import { myArticleId } from '../../http/articleApi';
import { myProfile } from '../../http/userApi';
import { useGetUserArtQuery } from '../../store/article/article.api';

export const useMyArticles = () => {

  const { user, setUser, article, setArticle } = useContext(MyContext)
  const {}= useGetUserArtQuery(user.id)
  useEffect(() => {
    const { userId } = jwt_decode(localStorage.getItem('token').slice(7))
    myArticleId(userId).then((res) => setArticle(res))
    myProfile(userId).then((res) => setUser(res))
  }, [])

  return {
    article,
    user,
  }

}

