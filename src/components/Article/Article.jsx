import {useNavigate} from "react-router-dom";
import {useContext} from "react";

import {ImgArticle} from "./imgArticle/ImgArticle";
import {PhotoUser} from "../../components/PhotoUser";

import {MyContext} from "../../App";
import glass from "../../assets/imgs/glass.png"
import styles from "./Article.module.css"

export const Article = ({article, isBigImg = false, isVertical = false, isBigAvatar = false}) => {
  const {user, setUser} = useContext(MyContext)

  const navigate = useNavigate()

  return (
      <div className={`${styles.wrapper} ${isVertical ? styles.column : styles.row}`}>
        <div>
          <ImgArticle url={article.url} isBigImg={isBigImg}/>
        </div>
        <div className={styles.informBlock}>
          <span className={styles.tag}> {article.category} </span>
          <h4 className={styles.caption}
              onClick={() => navigate(`/article/${article._id}`)}>
            {article.title}
          </h4>
          <div className={styles.text}
               dangerouslySetInnerHTML={{__html: article.description}}/>
          <div className={styles.inform}>
            <PhotoUser photo={article.userAvatar} isBigAvatar={isBigAvatar}/>
            <span className={styles.name}>
              {article.firstName}
              {article.lastName}
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