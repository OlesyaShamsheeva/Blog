import {useEffect, useState} from "react";
import {useNavigate, useParams} from "react-router-dom";

import {ImgArticle} from "../../components/Article/imgArticle/ImgArticle";
import {PhotoUser} from "../../components/PhotoUser";

import {updateArticle} from "../../http/articleApi";
import {detailArticle} from "../../http/articleApi";
import styles from "./ArticleDetails.module.css"
import glass from "../../assets/imgs/glass.png";

export const ArticleDetails = ({isBigAvatar = false}) => {
  const navigate = useNavigate()
  const {articleId} = useParams()

  const [article, setArticle] = useState({})

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

  return (
      <div className={styles.wrapper}>
        <button className={styles.button}
                onClick={() => navigate("/all-articles")}>
          All articles
        </button>
        <div>
          <div className={styles.tagEl}>
            {article.category}
          </div>
          <h4 className={styles.caption}>
            {article.title}
          </h4>
          <ImgArticle url={article.url} isBigImg/>
          <div className={styles.textContent}
               dangerouslySetInnerHTML={{__html: article.description}}>
          </div>
          <div className={styles.wrap}>
            <div className={styles.inform}>
              <PhotoUser photo={article.userAvatar}
                         isBigAvatar={isBigAvatar}/>
              <span className={styles.name}>
                       {article.firstName}
                {article.lastName}
                    </span>
              <span className={styles.data}>
                        {article.data}
                    </span>
              <span className={styles.view}>
                    <img src={glass}
                         className={styles.icon} alt="Counter icon"/>
                {article.viewCounter}
                    </span>
            </div>
            <button className={styles.buttonTag}>
              {article.category}
            </button>
          </div>
        </div>
      </div>
  )
}



