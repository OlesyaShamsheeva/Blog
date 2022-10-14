import {useNavigate} from "react-router-dom";

import {ImgArticle} from "./imgArticle/ImgArticle";
import {PhotoUser} from "../../components/PhotoUser";

import glass from "../../assets/imgs/glass.png"
import styles from "./Article.module.css"


export const Article = ({article, isBigImg = false, isVertical = false, isBigAvatar = false}) => {
  const navigate = useNavigate()
  if (!article) {
    return null
  }
  return (
      <div className={`${styles.wrapper} ${isVertical ? styles.column : styles.row}`}>
        <div>
          <ImgArticle url={article.url} isBigImg={isBigImg}/>
        </div>
        <div className={styles.informBlock}>
          <span className={styles.tag}> {article.category} </span>
          <h4 className={styles.caption} onClick={() => navigate(`/article/${article.id}`)}>
            {article.title}
          </h4>
          <div className={styles.text} dangerouslySetInnerHTML={{__html: article.description}}/>
          <div className={styles.inform}>
            <PhotoUser photo={article.userAvatar} isBigAvatar={isBigAvatar}/>
            <span className={styles.name}> {article.user}</span>
            <span className={styles.data}>{article.data}  </span>
            <span className={styles.view}>
                    <img src={glass} className={styles.icon} alt="Counter icon"/>
              {article.viewCounter}
                    </span>
          </div>
        </div>
      </div>
  )
}