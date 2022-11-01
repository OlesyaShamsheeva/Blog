import { useContext, useEffect } from 'react';
import { MyContext } from '../../App';

import { usePagination } from '../../hook/usePagination';
import jwt_decode from 'jwt-decode';

import { myArticleId } from '../../http/articleApi';
import { myProfile } from '../../http/userApi';

export const useMyArticles = () => {
  const { article, setArticle } = useContext(MyContext)
  const { user, setUser } = useContext(MyContext)

  const {
    firstContentIndex,
    lastContentIndex,
    nextPage,
    prevPage,
  } = usePagination({
    contentPerPage: 3,
    count: article.length,
  });

  useEffect(() => {
    const { userId } = jwt_decode(localStorage.getItem('token').slice(7))
    myArticleId(userId).then((res) => setArticle(res))
    myProfile(userId).then((res) => setUser(res))
  }, [])

  return {
    article,
    user,
    firstContentIndex,
    lastContentIndex,
    nextPage,
    prevPage,
  }

}

