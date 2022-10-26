import { useContext, useEffect } from 'react';
import { usePagination } from '../../hook/usePagination';

import { Article } from '../../components/Article/';
import { NotArticles } from '../../components/Article/NoArticle';
import { PhotoUser } from '../../components/PhotoUser';

import { MyContext } from '../../App';
import jwt_decode from 'jwt-decode';
import { myProfile } from '../../http/userApi';
import { myArticleId } from '../../http/articleApi';
import styles from './MyArticles.module.css'


export const MyArticles = ({ bigAvatar = false }) => {
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

  return (
    <div>
      <div className={styles.myArticles}>
        <div className={styles.profile}>
          <PhotoUser
            photo={user.avatar}
            bigAvatar={bigAvatar} isBigAvatar/>
          <div className={styles.name}>
            {user.firstName}
            {user.lastName}
          </div>
          <div className={styles.text}>
            Pellentesque odio nisi, euismod in, pharetra a, ultricies in, diam. Sed
            arcu.
          </div>
        </div>
        <div>
          {(article.length > 0) ? (article.slice(firstContentIndex, lastContentIndex).map((article) => (
            <Article isVertical isBigImg key={article._id} article={article}/>
          ))) : <NotArticles/>}
          <div className={styles.pagBtn}>
         <span>
           {article?.length > 0 && <button className={styles.pag} onClick={prevPage}>
             Prev
           </button>
           }
         </span>
            <span>
              {article?.length > 0 && <button className={styles.pag} onClick={nextPage}>
                Next
              </button>
              }</span>
          </div>
        </div>
      </div>
    </div>
  )
}