import { ImgArticle } from '../../components/Article/imgArticle';
import { PhotoUser } from '../../components/PhotoUser';

import { useArticleDetails } from './ArticleDetails.utils';
import { Routes } from '../../constants'
import styles from './ArticleDetails.module.css'
import glass from '../../assets/imgs/glass.png';

export const ArticleDetails = ({ isBigAvatar = false }) => {
  const {
    navigate,
    article,
  } = useArticleDetails()
  return (
    <div className={styles.wrapper}>
      <button className={styles.button}
              onClick={() => navigate(Routes.ALL_ARTICLES)}>
        All articles
      </button>
      <div>
        <div className={styles.tagEl}>
          #{article.category}
        </div>
        <h4 className={styles.caption}>
          {article.title}
        </h4>
        <div className={styles.img}>
          <ImgArticle photo={article.imgArticle} isBigImg/>
        </div>
        <div className={styles.textContent}
             dangerouslySetInnerHTML={{ __html: article.description }}>
        </div>
        <div className={styles.wrap}>
          <div className={styles.inform}>
            <PhotoUser photo={article.userAvatar}
                       isBigAvatar={isBigAvatar}/>
            <span className={styles.name}>
              <span>{article.firstName}</span>
              <span className={styles.lastName}>{article.lastName}</span>
                    </span>
            <span className={styles.data}>
              {article.data}
                    </span>
            <span className={styles.view}>
                    <img src={glass} className={styles.icon} alt="Counter icon"/>
              {article.viewCounter}
                    </span>
            <span>
           </span>
            <button className={styles.buttonTag}>
              {article.category}
            </button>
          </div>
          <div>
          </div>
        </div>
      </div>
    </div>
  )
}



