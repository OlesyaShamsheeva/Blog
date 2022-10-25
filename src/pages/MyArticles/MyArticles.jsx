import {MyContext} from "../../App";

import {useContext,useEffect} from "react";
import {Pagination} from "../../components/Pagination";
import {Article} from "../../components/Article/";
import {NotArticles} from "../../components/Article/NoArticle";
import {PhotoUser} from "../../components/PhotoUser";
import {detailArticle, myArticleId, updateArticle} from "../../http/articleApi";
import styles from "./MyArticles.module.css"
export const MyArticles = ({bigAvatar = false}) => {
  const {article,setArticle}=useContext(MyContext)
  const {user,setUser}=useContext(MyContext)
  console.log('user', user)
  useEffect(() => {
   myArticleId(user._id).then((res) => {
     setArticle(res)
      })
  }, [])
  return (
      <div>
        <div className={styles.myArticles}>
          <div className={styles.profile}>
            <PhotoUser photo={article.avatar} bigAvatar={bigAvatar} isBigAvatar/>
            <div className={styles.name}>{user.firstName} {user.lastName}</div>
            <div className={styles.text}> Pellentesque odio nisi, euismod in, pharetra a, ultricies in, diam. Sed
              arcu.
            </div>
          </div>
          <div>
            {(article.length > 0) ? (article.map((article) => (
                <Article isVertical isBigImg key={article._id} article={article}/>
            ))) : <NotArticles/>}
            {article?.length > 0 && <Pagination/>}
          </div>
        </div>
      </div>
  )
}