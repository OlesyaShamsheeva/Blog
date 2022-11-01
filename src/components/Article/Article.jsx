import { useNavigate } from 'react-router-dom';

import { ImgArticle } from './imgArticle';
import { PhotoUser } from '../PhotoUser';

import { Routes } from '../../constants';
import glass from '../../assets/imgs/glass.png'
import styles from './Article.module.css'

export const Article = ({ article, isBigImg = false, isVertical = false, isBigAvatar = false }) => {
  const navigate = useNavigate()

  return (
    <div className={`${styles.wrapper} ${isVertical ? styles.column : styles.row}`}>
      <div>
        <ImgArticle photo={article.imgArticle} isBigImg={isBigImg}/>
      </div>
      <div className={styles.informBlock}>
        <span className={styles.tag}>
          #{article.category}
        </span>
        <h4 className={styles.caption}
            onClick={() => navigate(Routes.ARTICLE_DETAIL.replace(/:[a-zA-Z?]+/g, article._id))}>
          {article.title}
        </h4>
        <div className={styles.text}
             dangerouslySetInnerHTML={{ __html: article.description }}/>
        <div className={styles.inform}>
          <div>
            <PhotoUser photo={article.avatar}
                       isBigAvatar={isBigAvatar}/>
          </div>
          <span className={styles.name}>
              {article.firstName}
            <span> {article.lastName}</span>
            </span>
          <span className={styles.data}>
              {article.data}
            </span>
          <span className={styles.view}>
                    <img src={glass} className={styles.icon} alt="Counter icon"/>
            {article.viewCounter}
                    </span>
        </div>
      </div>
    </div>
  )
}