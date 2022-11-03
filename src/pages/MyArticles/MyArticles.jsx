import { Article } from '../../components/Article/';
import { NotArticles } from '../../components/Article/NoArticle';

import { PhotoUser } from '../../components/PhotoUser';
import { Pagination } from '../../components/Pagination';
import { useMyArticles } from './MyArticles.utils';

import styles from './MyArticles.module.css'
import { usePagination } from '../../hook/usePagination';

export const MyArticles = ({ bigAvatar = false }) => {
  const {
    article,
    user,
  } = useMyArticles()

  const {
    firstContentIndex,
    lastContentIndex,
    nextPage,
    prevPage,
  } = usePagination({
    contentPerPage: 3,
    count: article.length,
  });

  return (
    <div>
      <div className={styles.myArticles}>
        <div className={styles.profile}>
          <PhotoUser
            photo={user.avatar}
            bigAvatar={bigAvatar} isBigAvatar/>
          <div className={styles.name}>
            <span>{user.firstName}</span>
            <span className={styles.lastName}>{user.lastName}</span>
          </div>
          <div className={styles.text}>
            {user.description}
          </div>
        </div>
        <div>
          {(article.length > 0) ? (article.slice(firstContentIndex, lastContentIndex).map((article) => (
            <Article isVertical isBigImg key={article._id} article={article}/>
          ))) : <NotArticles/>}
          <div className={styles.pagBtn}>
            {article.length > 0 ? <Pagination next={nextPage} prev={prevPage}/> : ''}
          </div>
        </div>
      </div>
    </div>
  )
}